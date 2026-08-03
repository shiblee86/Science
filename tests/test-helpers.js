// ============================================================
// Shared helpers for integration/regression tests.
// Depends on app.js's global state and functions already being
// loaded on the page (see runner.html for load order).
// ============================================================

// Resets every piece of app.js module state back to a clean slate,
// including localStorage, and returns to the home screen. Call this
// from beforeEach() in any suite that plays through a skill or
// mutates progress/localStorage.
function qaResetAppState() {
  localStorage.removeItem(STORAGE_KEY);
  progress = {};
  grade = null; strand = null; unit = null; skill = null;
  questions = []; qi = 0; correct = 0; wrong = 0; mistakes = [];
  answered = false; hintCount = 0;
  document.body.className = '';
  goHome();
}

// Fills in the module-level selection state (mcqPicked, sortPicked, ...)
// with the CORRECT answer for the given normalized question, mirroring
// exactly what a real click handler would set.
function qaAnswerCorrectly(q) {
  if (q.type === 'mcq') {
    mcqPicked = q.correctIndex;
  } else if (q.type === 'sort') {
    sortPicked = new Set(q.items.map((it, i) => (it.match ? i : null)).filter(x => x !== null));
  } else if (q.type === 'match') {
    q.leftItems.forEach((lt, li) => {
      const rt = q.correctMap[lt];
      matchLinks[li] = q.rightItems.indexOf(rt);
    });
  } else if (q.type === 'sequence') {
    seqOrder = q.steps.slice();
  } else if (q.type === 'label') {
    labelPicked = q.parts.findIndex(p => p.correct);
  }
}

// Fills in the module-level selection state with a DETERMINISTICALLY
// wrong answer (never relies on chance/shuffle luck):
//  - mcq: the next option after the correct one (always different, 4 options)
//  - sort: nothing picked (every sort item has >=1 correct entry, so an
//          empty selection can never match)
//  - match: nothing linked (an incomplete link set can never be "all correct")
//  - sequence: the steps reversed (never equal to the original for >=2
//              distinct steps)
//  - label: the first incorrect part
function qaAnswerIncorrectly(q) {
  if (q.type === 'mcq') {
    mcqPicked = (q.correctIndex + 1) % q.options.length;
  } else if (q.type === 'sort') {
    sortPicked = new Set();
  } else if (q.type === 'match') {
    // leave matchLinks empty — checkAnswer() requires every left item to be
    // linked, so an empty map is guaranteed incorrect.
  } else if (q.type === 'sequence') {
    seqOrder = q.steps.slice().reverse();
  } else if (q.type === 'label') {
    labelPicked = q.parts.findIndex(p => !p.correct);
  }
}

// Plays an entire skill start to finish via startSkill()/checkAnswer()/
// nextQuestion(), answering every question correctly (default) or
// incorrectly (pass allCorrect === false), exactly like a real play session.
function qaPlaySkillFully(skillId, allCorrect) {
  startSkill(skillId);
  let iterations = 0;
  while (document.getElementById('quizScreen').classList.contains('active') && iterations < 30) {
    const q = questions[qi];
    if (allCorrect === false) qaAnswerIncorrectly(q);
    else qaAnswerCorrectly(q);
    checkAnswer();
    nextQuestion();
    iterations++;
  }
}

// Builds a throwaway synthetic mcq skill with exactly n questions, for
// tests that need precise control over score percentages (e.g. hitting
// an exact 70% pass boundary) without depending on real content's pool
// sizes. unitId must be a real unit id for the current grade so that
// unitFor()/loadQuestion() can resolve it without throwing.
function qaMakeSyntheticMcqSkill(id, n, unitId) {
  const pool = [];
  for (let i = 0; i < n; i++) {
    pool.push({
      fact: 'Synthetic test fact.',
      q: 'Synthetic test question ' + i + '?',
      correct: 'Correct',
      wrong: ['Wrong1', 'Wrong2', 'Wrong3'],
      hint: 'Synthetic test hint.',
      experiment: 'Synthetic test experiment.'
    });
  }
  return { id, unit: unitId, title: 'Synthetic Test Skill', type: 'mcq', pool };
}
