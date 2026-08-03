// ============================================================
// INTEGRATION TESTS
// Exercise multiple app.js functions together against the real DOM
// (screens, quiz card, buttons) exactly as a real play session would.
// ============================================================

TF.suite('Screen navigation', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('selectGrade() shows the grade home screen with 4 strand cards', () => {
    selectGrade(1);
    TF.assertOk(document.getElementById('gradeHomeScreen').classList.contains('active'));
    TF.assertEqual(document.querySelectorAll('#strandGrid .strand-card').length, 4);
  });

  TF.test('openStrand() shows the strand screen with the correct unit count', () => {
    selectGrade(1);
    openStrand('physical');
    TF.assertOk(document.getElementById('strandScreen').classList.contains('active'));
    const expected = GRADE_UNITS[1].filter(u => u.strand === 'physical').length;
    TF.assertEqual(document.querySelectorAll('#unitGrid .unit-card').length, expected);
  });

  TF.test('openUnit() shows the unit trail with one node per skill', () => {
    selectGrade(1);
    openUnit('H');
    TF.assertOk(document.getElementById('unitScreen').classList.contains('active'));
    TF.assertEqual(document.querySelectorAll('#trailPath .trail-node').length, skillsForUnitId('H').length);
  });

  TF.test('goHome() returns to the home screen and clears the selected grade', () => {
    selectGrade(2);
    goHome();
    TF.assertOk(document.getElementById('homeScreen').classList.contains('active'));
    TF.assertEqual(grade, null);
  });

  TF.test('leaveQuiz() returns to the unit trail when the user confirms', () => {
    selectGrade(1); openUnit('H'); startSkill('g1-H-1');
    const originalConfirm = window.confirm;
    window.confirm = () => true;
    leaveQuiz();
    window.confirm = originalConfirm;
    TF.assertOk(document.getElementById('unitScreen').classList.contains('active'));
  });

  TF.test('leaveQuiz() stays on the quiz screen when the user cancels', () => {
    selectGrade(1); openUnit('H'); startSkill('g1-H-1');
    const originalConfirm = window.confirm;
    window.confirm = () => false;
    leaveQuiz();
    window.confirm = originalConfirm;
    TF.assertOk(document.getElementById('quizScreen').classList.contains('active'));
  });
});

TF.suite('Question building and rendering', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('startSkill() builds one question per pool item and shows the quiz screen', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    TF.assertOk(document.getElementById('quizScreen').classList.contains('active'));
    TF.assertArrayLength(questions, skillsById['g1-B-6'].pool.length);
  });

  TF.test('renderQuestion() for an mcq skill renders 4 selectable options', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    TF.assertEqual(document.querySelectorAll('#qBody .opt-btn').length, 4);
  });

  TF.test('renderQuestion() for a sort skill renders one chip per item', () => {
    selectGrade(1);
    startSkill('g1-A-1');
    const q = questions[qi];
    TF.assertEqual(document.querySelectorAll('#qBody .sort-chip').length, q.items.length);
  });

  TF.test('renderQuestion() for a match skill renders equal left/right columns', () => {
    selectGrade(1);
    startSkill('g1-H-2');
    const q = questions[qi];
    TF.assertEqual(document.querySelectorAll('#matchLeft .match-btn').length, q.leftItems.length);
    TF.assertEqual(document.querySelectorAll('#matchRight .match-btn').length, q.rightItems.length);
  });

  TF.test('renderQuestion() for a sequence skill renders one slot per step and one chip per bank item', () => {
    selectGrade(1);
    startSkill('g1-H-9');
    const q = questions[qi];
    TF.assertEqual(document.querySelectorAll('#seqSlots .seq-slot').length, q.steps.length);
    TF.assertEqual(document.querySelectorAll('#seqBank .seq-chip').length, q.bank.length);
  });

  TF.test('renderQuestion() for a label skill renders one button per part', () => {
    selectGrade(1);
    startSkill('g1-I-2');
    const q = questions[qi];
    TF.assertEqual(document.querySelectorAll('#qBody .diagram-part').length, q.parts.length);
  });

  TF.test('loadQuestion() resets feedback/explanation/hint boxes and the Check/Next buttons for a new question', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    const q = questions[qi];
    mcqPicked = q.correctIndex;
    checkAnswer();
    nextQuestion();
    TF.assertFalse(document.getElementById('feedback').classList.contains('show'));
    TF.assertFalse(document.getElementById('explanation').classList.contains('show'));
    TF.assertEqual(document.getElementById('checkBtn').style.display, 'inline-flex');
    TF.assertEqual(document.getElementById('nextBtn').style.display, 'none');
  });
});

TF.suite('Answer checking', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  [
    ['g1-B-6', 'mcq'],
    ['g1-A-1', 'sort'],
    ['g1-H-2', 'match'],
    ['g1-H-9', 'sequence'],
    ['g1-I-2', 'label']
  ].forEach(([skillId, type]) => {
    TF.test(`checkAnswer() on a correct ${type} answer marks it correct and locks the UI`, () => {
      selectGrade(1);
      startSkill(skillId);
      const q = questions[qi];
      TF.assertEqual(q.type, type);
      qaAnswerCorrectly(q);
      checkAnswer();
      TF.assertOk(answered);
      TF.assertEqual(correct, 1);
      TF.assertEqual(wrong, 0);
      TF.assertOk(document.getElementById('feedback').classList.contains('ok'));
      TF.assertEqual(document.getElementById('nextBtn').style.display, 'inline-flex');
      TF.assertEqual(document.getElementById('checkBtn').style.display, 'none');
    });

    TF.test(`checkAnswer() on a deliberately wrong ${type} answer records a mistake and shows bad feedback`, () => {
      selectGrade(1);
      startSkill(skillId);
      const q = questions[qi];
      qaAnswerIncorrectly(q);
      checkAnswer();
      TF.assertOk(answered);
      TF.assertEqual(correct, 0);
      TF.assertEqual(wrong, 1);
      TF.assertArrayLength(mistakes, 1);
      TF.assertOk(document.getElementById('feedback').classList.contains('bad'));
    });
  });

  TF.test('checkAnswer() with no mcq selection does nothing (does not lock the question)', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    mcqPicked = null;
    checkAnswer();
    TF.assertFalse(answered);
  });

  TF.test('checkAnswer() with no label selection does nothing (does not lock the question)', () => {
    selectGrade(1);
    startSkill('g1-I-2');
    labelPicked = null;
    checkAnswer();
    TF.assertFalse(answered);
  });

  TF.test('checkAnswer() is a no-op once a question is already answered (no double counting)', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    const q = questions[qi];
    mcqPicked = q.correctIndex;
    checkAnswer();
    checkAnswer();
    TF.assertEqual(correct, 1);
  });

  TF.test('a partially-linked match question (not all pairs linked) is scored as wrong', () => {
    selectGrade(1);
    startSkill('g1-H-2');
    const q = questions[qi];
    matchLinks[0] = q.rightItems.indexOf(q.correctMap[q.leftItems[0]]); // link only the first pair correctly
    checkAnswer();
    TF.assertEqual(correct, 0);
    TF.assertEqual(wrong, 1);
  });

  TF.test('a sort answer that picks every item (including wrong ones) is scored as wrong', () => {
    selectGrade(1);
    startSkill('g1-A-1');
    const q = questions[qi];
    sortPicked = new Set(q.items.map((_, i) => i)); // select everything, right or wrong
    const anyWrongItemExists = q.items.some(it => it.match === false);
    checkAnswer();
    if (anyWrongItemExists) {
      TF.assertEqual(correct, 0);
      TF.assertEqual(wrong, 1);
    }
  });
});

TF.suite('Scoring and results', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('a perfect run earns 3 stars, marks the skill done, and shows the result screen', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6');
    TF.assertOk(document.getElementById('resultScreen').classList.contains('active'));
    TF.assertEqual(correct, questions.length);
    const p = progress['g1-B-6'];
    TF.assertOk(p && p.done);
    TF.assertEqual(p.stars, 3);
  });

  TF.test('a run answered entirely wrong does not mark the skill done', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6', false);
    TF.assertFalse(!!(progress['g1-B-6'] && progress['g1-B-6'].done));
  });

  TF.test('retrying a passed skill never downgrades a previously earned star count', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6'); // perfect run -> 3 stars
    TF.assertEqual(progress['g1-B-6'].stars, 3);
    qaPlaySkillFully('g1-B-6', false); // then fail it
    TF.assertOk(progress['g1-B-6'].done, 'a previous pass should not be erased by a later failed attempt');
    TF.assertEqual(progress['g1-B-6'].stars, 3, 'stars should never be reduced by a worse retry');
  });

  TF.test('the mistake list on the result screen matches the number of wrong answers', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    const total = questions.length;
    TF.assertOk(total >= 2, 'this test needs a skill with at least 2 questions');
    // answer the first question wrong, the rest correct
    qaAnswerIncorrectly(questions[qi]);
    checkAnswer();
    nextQuestion();
    while (document.getElementById('quizScreen').classList.contains('active')) {
      qaAnswerCorrectly(questions[qi]);
      checkAnswer();
      nextQuestion();
    }
    TF.assertArrayLength(mistakes, 1);
    TF.assertEqual(document.querySelectorAll('#mistakeSection .mistake-item').length, 1);
  });

  TF.test('"Next Skill" targets the next skill in the same unit after a pass', () => {
    selectGrade(1);
    const uSkills = skillsForUnitId('B');
    TF.assertOk(uSkills.length >= 2, 'unit B should have more than one skill');
    qaPlaySkillFully(uSkills[0].id);
    const nextBtn = document.getElementById('nextLvBtn');
    TF.assertEqual(nextBtn.style.display, 'inline-flex');
  });

  TF.test('"Next Skill" is hidden after the last skill in a unit', () => {
    selectGrade(1);
    const uSkills = skillsForUnitId('E'); // Heating and Cooling has exactly 1 skill in grade 1
    TF.assertArrayLength(uSkills, 1);
    qaPlaySkillFully(uSkills[0].id);
    TF.assertEqual(document.getElementById('nextLvBtn').style.display, 'none');
  });

  TF.test('"Try Again" restarts the same skill', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6');
    document.getElementById('retryBtn').onclick();
    TF.assertOk(document.getElementById('quizScreen').classList.contains('active'));
    TF.assertEqual(skill.id, 'g1-B-6');
    TF.assertEqual(qi, 0);
    TF.assertEqual(correct, 0);
  });
});

TF.suite('Progress persistence', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('completing a skill increases the topbar star total', () => {
    selectGrade(1);
    TF.assertEqual(totalStars(), 0);
    qaPlaySkillFully('g1-B-6');
    TF.assertOk(totalStars() > 0);
  });

  TF.test('finishing a skill persists progress to localStorage under STORAGE_KEY', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6');
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    TF.assertOk(saved && saved['g1-B-6'] && saved['g1-B-6'].done);
  });

  TF.test('failing a skill does NOT write anything to localStorage', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6', false);
    TF.assertEqual(localStorage.getItem(STORAGE_KEY), null);
  });

  TF.test('an exported/re-imported progress object round-trips through JSON without loss', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6');
    const before = totalStars();
    const exported = JSON.stringify(progress);
    progress = {};
    TF.assertEqual(totalStars(), 0);
    progress = JSON.parse(exported);
    TF.assertEqual(totalStars(), before);
  });

  TF.test('loadFile() replaces in-memory progress with the parsed file contents', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-6');
    const fakeImported = { 'g1-A-1': { done: true, stars: 2, score: 80 } };
    const fakeEvent = { target: { files: [{}], value: '' } };
    const originalFileReader = window.FileReader;
    window.FileReader = function () {
      return {
        readAsText() { this.onload({ target: { result: JSON.stringify(fakeImported) } }); }
      };
    };
    loadFile(fakeEvent);
    window.FileReader = originalFileReader;
    TF.assertDeepEqual(progress, fakeImported);
  });
});

TF.suite('Hints and fun facts', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('showHint() reveals the hint box and disables the hint button', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    showHint();
    TF.assertOk(document.getElementById('hintBox').classList.contains('show'));
    TF.assertOk(document.getElementById('hintBtn').disabled);
  });

  TF.test('the hint button is hidden once 2 hints have been used in a skill', () => {
    selectGrade(1);
    startSkill('g1-B-6'); // 5 questions
    showHint();
    qaAnswerCorrectly(questions[qi]);
    checkAnswer();
    nextQuestion();
    showHint();
    TF.assertEqual(hintCount, 2);
    qaAnswerCorrectly(questions[qi]);
    checkAnswer();
    nextQuestion();
    TF.assertEqual(document.getElementById('hintBtn').style.display, 'none');
  });

  TF.test('the fun fact button only appears on the final question of a skill', () => {
    selectGrade(1);
    startSkill('g1-B-6');
    TF.assertEqual(document.getElementById('funFactBtn').style.display, 'none');
    while (qi < questions.length - 1) {
      qaAnswerCorrectly(questions[qi]);
      checkAnswer();
      nextQuestion();
    }
    TF.assertEqual(document.getElementById('funFactBtn').style.display, 'inline-flex');
  });
});

TF.suite('Grade/strand/unit progress rendering', 'integration', () => {
  TF.beforeEach(qaResetAppState);

  TF.test('unit card progress bar reflects completed skills in that unit', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-1');
    openStrand('physical');
    const uSkills = skillsForUnitId('B');
    const unitName = GRADE_UNITS[1].find(u => u.id === 'B').name; // "Materials"
    const card = [...document.querySelectorAll('#unitGrid .unit-card')].find(c => c.textContent.includes(unitName));
    TF.assertOk(card, `could not find the "${unitName}" unit card`);
    TF.assertOk(card.textContent.includes(`1 of ${uSkills.length} skills`));
  });

  TF.test('strand card progress count reflects completed skills in that strand', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-1');
    showGradeHome();
    const card = document.querySelector('.strand-card.physical');
    TF.assertOk(card.textContent.includes('1 /'));
  });

  TF.test('grade progress dashboard reflects total completed skills for that grade', () => {
    selectGrade(1);
    qaPlaySkillFully('g1-B-1');
    showGradeHome();
    TF.assertOk(document.getElementById('progressChart').textContent.includes('1 of 71 skills done'));
  });
});
