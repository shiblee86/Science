// ============================================================
// REGRESSION TESTS
// Lock in specific bugs found during development plus invariants
// that must never silently change without a deliberate decision.
// ============================================================

TF.suite('Schema regressions', 'regression', () => {
  const grades = [1, 2, 3];

  TF.test('no sort-type item uses "left" instead of "label" (found and fixed in g2-earth.js Q1)', () => {
    grades.forEach(g => {
      skillsForGrade(g).filter(s => s.type === 'sort').forEach(s => {
        s.pool.forEach((item, i) => {
          item.items.forEach((it, j) => {
            TF.assertFalse('left' in it, `${s.id} pool[${i}].items[${j}] has a stray "left" key (should be "label")`);
            TF.assertOk('label' in it, `${s.id} pool[${i}].items[${j}] is missing "label"`);
          });
        });
      });
    });
  });

  TF.test('no match-type pair is missing left/right (would render as blank buttons)', () => {
    grades.forEach(g => {
      skillsForGrade(g).filter(s => s.type === 'match').forEach(s => {
        s.pool.forEach((item, i) => {
          item.pairs.forEach((p, j) => {
            TF.assertOk('left' in p && 'right' in p, `${s.id} pool[${i}].pairs[${j}] missing left/right`);
          });
        });
      });
    });
  });

  TF.test('no pool item field is the literal value undefined (stray leftover properties found twice during g2/g3 authoring)', () => {
    grades.forEach(g => {
      skillsForGrade(g).forEach(s => {
        s.pool.forEach((item, i) => {
          Object.keys(item).forEach(k => {
            TF.assertOk(item[k] !== undefined, `${s.id} pool[${i}].${k} is undefined`);
          });
        });
      });
    });
  });

  TF.test('every sort item has at least one correct (match:true) entry (an all-false item can never be answered)', () => {
    grades.forEach(g => {
      skillsForGrade(g).filter(s => s.type === 'sort').forEach(s => {
        s.pool.forEach((item, i) => {
          TF.assertOk(item.items.some(it => it.match === true), `${s.id} pool[${i}] has no correct item`);
        });
      });
    });
  });

  TF.test('every label item has exactly one correct part (ambiguous or unanswerable otherwise)', () => {
    grades.forEach(g => {
      skillsForGrade(g).filter(s => s.type === 'label').forEach(s => {
        s.pool.forEach((item, i) => {
          const correctCount = item.parts.filter(p => p.correct === true).length;
          TF.assertEqual(correctCount, 1, `${s.id} pool[${i}] should have exactly 1 correct part, has ${correctCount}`);
        });
      });
    });
  });
});

TF.suite('Grade isolation regressions', 'regression', () => {
  TF.test('grade 1 has exactly 71 skills across 16 units', () => {
    TF.assertEqual(skillsForGrade(1).length, 71);
    TF.assertEqual((GRADE_UNITS[1] || []).length, 16);
  });

  TF.test('grade 2 has exactly 86 skills across 22 units', () => {
    TF.assertEqual(skillsForGrade(2).length, 86);
    TF.assertEqual((GRADE_UNITS[2] || []).length, 22);
  });

  TF.test('grade 3 has exactly 98 skills across 25 units', () => {
    TF.assertEqual(skillsForGrade(3).length, 98);
    TF.assertEqual((GRADE_UNITS[3] || []).length, 25);
  });

  TF.test('no skill id is duplicated within or across grades', () => {
    const all = [...skillsForGrade(1), ...skillsForGrade(2), ...skillsForGrade(3)];
    TF.assertEqual(new Set(all.map(s => s.id)).size, all.length);
  });

  TF.test("every skill's unit exists in that grade's unit list (no orphaned skills)", () => {
    [1, 2, 3].forEach(g => {
      const unitIds = new Set((GRADE_UNITS[g] || []).map(u => u.id));
      skillsForGrade(g).forEach(s => {
        TF.assertOk(unitIds.has(s.unit), `grade ${g} skill ${s.id} references unknown unit "${s.unit}"`);
      });
    });
  });

  TF.test('every unit belongs to one of the 4 known strands', () => {
    const knownStrands = new Set(STRANDS.map(s => s.id));
    [1, 2, 3].forEach(g => {
      (GRADE_UNITS[g] || []).forEach(u => {
        TF.assertOk(knownStrands.has(u.strand), `grade ${g} unit ${u.id} has unknown strand "${u.strand}"`);
      });
    });
  });

  TF.test('loading grade 2/3 content does not change grade 1 skill ids (content isolation across data files)', () => {
    const g1Ids = skillsForGrade(1).map(s => s.id).sort();
    TF.assertOk(g1Ids.every(id => id.startsWith('g1-')), 'a non-grade-1 skill id leaked into GRADE_SKILLS[1]');
  });
});

TF.suite('Core behavior regressions', 'regression', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('the passing threshold stays at 70%', () => {
    TF.assertEqual(PASS_PCT, 70);
  });

  TF.test('the localStorage key stays "safia_science_v2" (changing this silently orphans saved progress)', () => {
    TF.assertEqual(STORAGE_KEY, 'safia_science_v2');
  });

  TF.test('star thresholds: 100% = 3 stars, 80% = 2 stars, 60% = below the pass line and not marked done', () => {
    selectGrade(1);
    const sk = qaMakeSyntheticMcqSkill('regress-star-thresholds', 5, 'B');
    skillsById[sk.id] = sk;

    function runWithNCorrect(nCorrect) {
      delete progress[sk.id];
      startSkill(sk.id);
      let answeredCount = 0, iterations = 0;
      while (document.getElementById('quizScreen').classList.contains('active') && iterations < 30) {
        const q = questions[qi];
        if (answeredCount < nCorrect) mcqPicked = q.correctIndex;
        else mcqPicked = (q.correctIndex + 1) % q.options.length;
        checkAnswer();
        nextQuestion();
        answeredCount++; iterations++;
      }
    }

    try {
      runWithNCorrect(5); // 100%
      TF.assertEqual(progress[sk.id].stars, 3);

      runWithNCorrect(4); // 80%
      TF.assertEqual(progress[sk.id].stars, 2);

      runWithNCorrect(3); // 60% -> below the 70% pass line
      TF.assertFalse(!!(progress[sk.id] && progress[sk.id].done));
    } finally {
      delete skillsById[sk.id];
    }
  });

  TF.test('a skill exactly at the 70% pass line is marked done with 1 star', () => {
    selectGrade(1);
    const sk = qaMakeSyntheticMcqSkill('regress-70-boundary', 10, 'B');
    skillsById[sk.id] = sk;
    try {
      startSkill(sk.id);
      let answeredCount = 0, iterations = 0;
      while (document.getElementById('quizScreen').classList.contains('active') && iterations < 30) {
        const q = questions[qi];
        if (answeredCount < 7) mcqPicked = q.correctIndex;
        else mcqPicked = (q.correctIndex + 1) % q.options.length;
        checkAnswer();
        nextQuestion();
        answeredCount++; iterations++;
      }
      TF.assertOk(progress[sk.id] && progress[sk.id].done, '70% should pass');
      TF.assertEqual(progress[sk.id].stars, 1, '70-79% should earn exactly 1 star');
    } finally {
      delete skillsById[sk.id];
    }
  });

  TF.test('grade cards on the home screen unlock exactly when that grade has content', () => {
    goHome();
    TF.assertFalse(document.querySelector('.grade-card.g1').classList.contains('locked'));
    TF.assertFalse(document.querySelector('.grade-card.g2').classList.contains('locked'));
    TF.assertFalse(document.querySelector('.grade-card.g3').classList.contains('locked'));
  });

  TF.test('selecting a grade with no content is a no-op (guards future Grade 4+ stubs)', () => {
    const before = grade;
    selectGrade(99);
    TF.assertEqual(grade, before);
  });

  TF.test('mascot name stays "Scout" across all grade themes', () => {
    TF.assertEqual(GRADE_THEMES[1].mascotName, 'Scout');
    TF.assertEqual(GRADE_THEMES[2].mascotName, 'Scout');
    TF.assertEqual(GRADE_THEMES[3].mascotName, 'Scout');
  });
});
