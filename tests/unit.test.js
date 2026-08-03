// ============================================================
// UNIT TESTS
// Pure functions and data-shape validation — no DOM interaction,
// no navigation, no localStorage.
// ============================================================

TF.suite('Utility functions', 'unit', () => {
  TF.test('shuffle() returns an array with the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffle(input);
    TF.assertArrayLength(out, 5);
    TF.assertDeepEqual([...out].sort(), [...input].sort());
  });

  TF.test('shuffle() does not mutate the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    TF.assertDeepEqual(input, copy);
  });

  TF.test('shuffle() of an empty array returns an empty array', () => {
    TF.assertArrayLength(shuffle([]), 0);
  });

  TF.test('rnd() returns an integer within the inclusive bounds', () => {
    for (let i = 0; i < 200; i++) {
      const n = rnd(3, 7);
      TF.assertOk(Number.isInteger(n), 'rnd() should return an integer');
      TF.assertOk(n >= 3 && n <= 7, `rnd(3,7) returned out-of-range value ${n}`);
    }
  });

  TF.test('rnd(n, n) always returns n', () => {
    for (let i = 0; i < 20; i++) TF.assertEqual(rnd(4, 4), 4);
  });
});

TF.suite('normalizeItem() per question type', 'unit', () => {
  TF.test('mcq: builds a 4-option list including the correct answer with a valid correctIndex', () => {
    const raw = { fact: 'f', q: 'q?', correct: 'C', wrong: ['W1', 'W2', 'W3'], hint: 'h', experiment: 'e' };
    const q = normalizeItem(raw, 'mcq');
    TF.assertEqual(q.type, 'mcq');
    TF.assertArrayLength(q.options, 4);
    TF.assertIncludes(q.options, 'C');
    TF.assertEqual(q.options[q.correctIndex], 'C');
    TF.assertEqual(q.prompt, 'q?');
    TF.assertEqual(q.explanation, 'f');
  });

  TF.test('sort: shuffles items but preserves each label/match pairing', () => {
    const raw = { prompt: 'p', items: [{ label: 'A', match: true }, { label: 'B', match: false }, { label: 'C', match: true }], hint: 'h', explanation: 'e' };
    const q = normalizeItem(raw, 'sort');
    TF.assertEqual(q.type, 'sort');
    TF.assertArrayLength(q.items, 3);
    const byLabel = Object.fromEntries(q.items.map(it => [it.label, it.match]));
    TF.assertEqual(byLabel.A, true);
    TF.assertEqual(byLabel.B, false);
    TF.assertEqual(byLabel.C, true);
  });

  TF.test('match: leftItems/rightItems are permutations of the pairs, correctMap is preserved', () => {
    const raw = { prompt: 'p', pairs: [{ left: 'L1', right: 'R1' }, { left: 'L2', right: 'R2' }], hint: 'h', explanation: 'e' };
    const q = normalizeItem(raw, 'match');
    TF.assertEqual(q.type, 'match');
    TF.assertDeepEqual([...q.leftItems].sort(), ['L1', 'L2']);
    TF.assertDeepEqual([...q.rightItems].sort(), ['R1', 'R2']);
    TF.assertEqual(q.correctMap.L1, 'R1');
    TF.assertEqual(q.correctMap.L2, 'R2');
  });

  TF.test('sequence: bank is a permutation of steps; the correct order is kept separately', () => {
    const raw = { prompt: 'p', steps: ['S1', 'S2', 'S3'], hint: 'h', explanation: 'e' };
    const q = normalizeItem(raw, 'sequence');
    TF.assertEqual(q.type, 'sequence');
    TF.assertDeepEqual(q.steps, ['S1', 'S2', 'S3']);
    TF.assertDeepEqual([...q.bank].sort(), ['S1', 'S2', 'S3']);
  });

  TF.test('label: parts is a permutation preserving the name/correct pairing', () => {
    const raw = { prompt: 'p', parts: [{ name: 'P1', correct: false }, { name: 'P2', correct: true }], hint: 'h', explanation: 'e' };
    const q = normalizeItem(raw, 'label');
    TF.assertEqual(q.type, 'label');
    TF.assertArrayLength(q.parts, 2);
    const byName = Object.fromEntries(q.parts.map(p => [p.name, p.correct]));
    TF.assertEqual(byName.P1, false);
    TF.assertEqual(byName.P2, true);
  });
});

TF.suite('buildQuestions()', 'unit', () => {
  TF.test('produces exactly one normalized question per pool item', () => {
    const sk = qaMakeSyntheticMcqSkill('unit-test-build', 6, 'A');
    const qs = buildQuestions(sk);
    TF.assertArrayLength(qs, 6);
    qs.forEach(q => TF.assertEqual(q.type, 'mcq'));
  });
});

TF.suite('Navigation/lookup helper functions', 'unit', () => {
  TF.test('strandColorVar() returns the expected CSS variable reference', () => {
    TF.assertEqual(strandColorVar('physical'), 'var(--strand-physical)');
    TF.assertEqual(strandColorVar('life'), 'var(--strand-life)');
  });

  TF.test('totalStars() sums stars only from completed skills', () => {
    const saved = progress;
    progress = { 'x-1': { done: true, stars: 3 }, 'x-2': { done: false, stars: 2 }, 'x-3': { done: true, stars: 1 } };
    TF.assertEqual(totalStars(), 4);
    progress = saved;
  });

  TF.test('skillsForUnitId() sorts skills by numeric id suffix ascending', () => {
    const savedGrade = grade;
    grade = 1;
    const skills = skillsForUnitId('H'); // Animals, g1-H-1..g1-H-9
    TF.assertArrayLength(skills, 9);
    for (let i = 0; i < skills.length; i++) {
      TF.assertEqual(skills[i].id, `g1-H-${i + 1}`);
    }
    grade = savedGrade;
  });

  TF.test('unitFor() finds the correct unit object for a skill in the current grade', () => {
    const savedGrade = grade;
    grade = 1;
    const u = unitFor(skillsById['g1-H-1']);
    TF.assertEqual(u.id, 'H');
    TF.assertEqual(u.name, 'Animals');
    grade = savedGrade;
  });

  TF.test('skillsForGrade() / unitsForGrade() return [] for a grade with no content', () => {
    TF.assertArrayLength(skillsForGrade(99), 0);
    TF.assertArrayLength(unitsForGrade(99), 0);
  });
});

TF.suite('Data schema validation', 'unit', () => {
  [1, 2, 3].forEach(g => {
    TF.test(`grade ${g}: every skill has id/unit/title/type/pool`, () => {
      skillsForGrade(g).forEach(s => {
        TF.assertOk(typeof s.id === 'string' && s.id.length > 0, `skill missing id: ${JSON.stringify(s).slice(0, 80)}`);
        TF.assertOk(typeof s.unit === 'string' && s.unit.length > 0, `${s.id} missing unit`);
        TF.assertOk(typeof s.title === 'string' && s.title.length > 0, `${s.id} missing title`);
        TF.assertIncludes(['mcq', 'sort', 'match', 'sequence', 'label'], s.type, `${s.id} has unknown type "${s.type}"`);
        TF.assertOk(Array.isArray(s.pool) && s.pool.length > 0, `${s.id} has an empty pool`);
      });
    });

    TF.test(`grade ${g}: every pool item matches its declared type's schema`, () => {
      skillsForGrade(g).forEach(s => {
        s.pool.forEach((item, idx) => {
          const where = `${s.id} pool[${idx}]`;
          if (s.type === 'mcq') {
            TF.assertOk(typeof item.q === 'string', `${where} missing q`);
            TF.assertOk(typeof item.correct === 'string', `${where} missing correct`);
            TF.assertOk(Array.isArray(item.wrong) && item.wrong.length === 3, `${where} wrong[] should have exactly 3 entries`);
          } else if (s.type === 'sort') {
            TF.assertOk(typeof item.prompt === 'string', `${where} missing prompt`);
            TF.assertOk(Array.isArray(item.items) && item.items.length >= 3, `${where} items[] too short`);
            item.items.forEach((it, i) => {
              TF.assertOk(typeof it.label === 'string', `${where} item[${i}] missing label`);
              TF.assertOk(typeof it.match === 'boolean', `${where} item[${i}] missing boolean match`);
            });
            TF.assertOk(item.items.some(it => it.match === true), `${where} has no correct (match:true) item`);
          } else if (s.type === 'match') {
            TF.assertOk(typeof item.prompt === 'string', `${where} missing prompt`);
            TF.assertOk(Array.isArray(item.pairs) && item.pairs.length >= 2, `${where} pairs[] too short`);
            item.pairs.forEach((p, i) => {
              TF.assertOk(typeof p.left === 'string', `${where} pair[${i}] missing left`);
              TF.assertOk(typeof p.right === 'string', `${where} pair[${i}] missing right`);
            });
          } else if (s.type === 'sequence') {
            TF.assertOk(typeof item.prompt === 'string', `${where} missing prompt`);
            TF.assertOk(Array.isArray(item.steps) && item.steps.length >= 3, `${where} steps[] too short`);
          } else if (s.type === 'label') {
            TF.assertOk(typeof item.prompt === 'string', `${where} missing prompt`);
            TF.assertOk(Array.isArray(item.parts) && item.parts.length >= 2, `${where} parts[] too short`);
            TF.assertOk(item.parts.some(p => p.correct === true), `${where} has no correct part`);
          }
        });
      });
    });
  });

  TF.test('no duplicate skill ids across all grades', () => {
    const all = [...skillsForGrade(1), ...skillsForGrade(2), ...skillsForGrade(3)];
    const ids = all.map(s => s.id);
    TF.assertEqual(new Set(ids).size, ids.length, 'duplicate skill id detected');
  });
});
