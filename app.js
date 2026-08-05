// ============================================================
// SCOUT'S SCIENCE TRAIL — quiz engine
// Content lives in data/*.js (loaded before this file).
// Navigation: Grade -> Strand -> Unit -> Skill (trail node) -> Quiz -> Result
// ============================================================

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================================
// CONTENT INDEX
// ============================================================
const PASS_PCT = 70;
const STORAGE_KEY = "safia_science_v2";

const GRADE_UNITS = {
  1: (typeof G1_UNITS !== 'undefined') ? G1_UNITS : [],
  2: (typeof G2_UNITS !== 'undefined') ? G2_UNITS : [],
  3: (typeof G3_UNITS !== 'undefined') ? G3_UNITS : []
};

const GRADE_SKILLS = {
  1: [].concat(
    typeof G1_PHYSICAL !== 'undefined' ? G1_PHYSICAL : [],
    typeof G1_LIFE !== 'undefined' ? G1_LIFE : [],
    typeof G1_EARTH !== 'undefined' ? G1_EARTH : [],
    typeof G1_EXTRA !== 'undefined' ? G1_EXTRA : []
  ),
  2: [].concat(
    typeof G2_PHYSICAL !== 'undefined' ? G2_PHYSICAL : [],
    typeof G2_LIFE !== 'undefined' ? G2_LIFE : [],
    typeof G2_EARTH !== 'undefined' ? G2_EARTH : []
  ),
  3: [].concat(
    typeof G3_PHYSICAL !== 'undefined' ? G3_PHYSICAL : [],
    typeof G3_LIFE !== 'undefined' ? G3_LIFE : [],
    typeof G3_EARTH !== 'undefined' ? G3_EARTH : []
  )
};

let skillsById = {};
function rebuildSkillIndex() {
  skillsById = {};
  Object.values(GRADE_SKILLS).forEach(list => list.forEach(s => { skillsById[s.id] = s; }));
}
rebuildSkillIndex();

function unitsForGrade(g) { return GRADE_UNITS[g] || []; }
function skillsForGrade(g) { return GRADE_SKILLS[g] || []; }
function skillsForUnit(unitId) {
  return skillsForGrade(grade)
    .filter(s => s.unit === unitId)
    .sort((a, b) => parseInt(a.id.split('-').pop()) - parseInt(b.id.split('-').pop()));
}
function unitFor(skill) { return unitsForGrade(grade).find(u => u.id === skill.unit); }
function strandColorVar(strandId) { return 'var(--strand-' + strandId + ')'; }

// ============================================================
// STATE
// ============================================================
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

let grade = null, strand = null, unit = null, skill = null;
let questions = [], qi = 0, correct = 0, wrong = 0, mistakes = [];
let answered = false, hintCount = 0;

// per-question-type selection state
let mcqPicked = null;
let sortPicked = new Set();
let matchSelLeft = null, matchLinks = {};
let seqOrder = [];
let labelPicked = null;

// ============================================================
// PERSISTENCE
// ============================================================
function saveProgress() {
  const blob = new Blob([JSON.stringify(progress, null, 2)], {type: "application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "safia-science-save.json";
  a.click();
  const lbl = document.getElementById("saveLbl");
  lbl.textContent = "✅ Saved!";
  setTimeout(updateTopbar, 2000);
}

function loadProgress() {
  document.getElementById("loadFile").click();
}

function loadFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = ev => {
    try {
      progress = JSON.parse(ev.target.result) || {};
      updateTopbar();
      const lbl = document.getElementById("saveLbl");
      lbl.textContent = "✅ Loaded!";
      setTimeout(updateTopbar, 2000);
      if (document.getElementById('gradeHomeScreen').classList.contains('active')) renderGradeHome();
    } catch (error) {
      alert("💛 Oops! Could not load that file. Try again!");
    }
  };
  r.readAsText(file);
  e.target.value = "";
}

function totalStars() {
  let t = 0;
  Object.values(progress).forEach(p => { if (p && p.done) t += p.stars || 0; });
  return t;
}

function updateTopbar() {
  document.getElementById("saveLbl").innerHTML = "⭐ " + totalStars() + " stars";
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goHome() {
  grade = null;
  document.body.className = '';
  renderGradeGrid();
  updateTopbar();
  showScreen("homeScreen");
}

function selectGrade(g) {
  if (!skillsForGrade(g).length) return;
  grade = g;
  document.body.className = 'grade-' + g;
  showGradeHome();
}

function showGradeHome() {
  renderGradeHome();
  showScreen("gradeHomeScreen");
}

function renderGradeHome() {
  renderScoutMessage();
  renderStrandGrid();
  renderGradeProgress();
}

function openStrand(strandId) {
  strand = strandId;
  showStrand();
}

function showStrand() {
  renderUnitGrid();
  showScreen("strandScreen");
}

function openUnit(unitId) {
  unit = unitId;
  showUnit();
}

function showUnit() {
  renderTrail();
  showScreen("unitScreen");
}

function showUnitFromResult() {
  showUnit();
}

function leaveQuiz() {
  if (confirm("Leave this skill? You can always come back!")) showUnit();
}

// ============================================================
// HOME: grade select
// ============================================================
function renderGradeGrid() {
  const box = document.getElementById("gradeGrid");
  box.innerHTML = "";
  [1, 2, 3].forEach(g => {
    const skills = skillsForGrade(g);
    const playable = skills.length > 0;
    const done = skills.filter(s => progress[s.id] && progress[s.id].done).length;
    const card = document.createElement("div");
    card.className = "grade-card g" + g + (playable ? "" : " locked");
    card.innerHTML = `
      <div class="gc-icon">${playable ? "🦊" : "🔒"}</div>
      <div class="gc-name">Grade ${g}</div>
      <div class="gc-desc">${playable ? skills.length + " skills to explore" : "Coming soon!"}</div>
      <div class="gc-badge">${playable ? done + " / " + skills.length + " done" : "Locked"}</div>
    `;
    if (playable) card.onclick = () => selectGrade(g);
    box.appendChild(card);
  });
}

// ============================================================
// GRADE HOME: strand select + progress
// ============================================================
const SCOUT_MESSAGES = [
  "Hi there! Pick a trail to explore today!",
  "Ready for an adventure? Choose a trail below!",
  "You're doing awesome — let's discover something new!",
  "Every skill you learn is a new stamp on our trail map!",
  "Pick a trail — I'll be right here cheering you on!"
];
function renderScoutMessage() {
  document.getElementById("scoutMsg").textContent = SCOUT_MESSAGES[rnd(0, SCOUT_MESSAGES.length - 1)];
}

function renderStrandGrid() {
  const box = document.getElementById("strandGrid");
  box.innerHTML = "";
  const units = unitsForGrade(grade);
  const skills = skillsForGrade(grade);
  STRANDS.forEach(st => {
    const stUnits = units.filter(u => u.strand === st.id);
    if (!stUnits.length) return;
    const unitIds = new Set(stUnits.map(u => u.id));
    const stSkills = skills.filter(s => unitIds.has(s.unit));
    const done = stSkills.filter(s => progress[s.id] && progress[s.id].done).length;
    const card = document.createElement("div");
    card.className = "strand-card " + st.id;
    card.innerHTML = `
      <div class="sc-icon">${st.icon}</div>
      <div class="sc-name">${st.name}</div>
      <div class="sc-tag">${st.tagline}</div>
      <div class="sc-progress">${done} / ${stSkills.length} done</div>
    `;
    card.onclick = () => openStrand(st.id);
    box.appendChild(card);
  });
}

function renderGradeProgress() {
  const skills = skillsForGrade(grade);
  let done = 0, stars = 0;
  skills.forEach(s => { const p = progress[s.id]; if (p && p.done) { done++; stars += p.stars || 0; } });
  const total = skills.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const theme = GRADE_THEMES[grade] || {name: 'Grade ' + grade};
  document.getElementById("progressChart").innerHTML = `
    <h3>🗺️ ${theme.name} Journey</h3>
    <div style="color:var(--ink-soft)">⭐ ${stars} stars · ${done} of ${total} skills done!</div>
    <div class="progress-bar-cont"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
  `;
}

// ============================================================
// STRAND: unit select
// ============================================================
function renderUnitGrid() {
  const st = STRANDS.find(s => s.id === strand);
  document.getElementById("strandIcon").textContent = st.icon;
  document.getElementById("strandName").textContent = st.name;
  const box = document.getElementById("unitGrid");
  box.innerHTML = "";
  const units = unitsForGrade(grade).filter(u => u.strand === strand);
  units.forEach(u => {
    const uSkills = skillsForUnitId(u.id);
    const done = uSkills.filter(s => progress[s.id] && progress[s.id].done).length;
    const pct = uSkills.length ? Math.round((done / uSkills.length) * 100) : 0;
    const card = document.createElement("div");
    card.className = "unit-card";
    card.innerHTML = `
      <div class="uc-icon">${u.icon}</div>
      <div class="uc-name">${u.name}</div>
      <div class="uc-count">${done} of ${uSkills.length} skills</div>
      <div class="uc-bar"><div class="uc-bar-fill" style="width:${pct}%"></div></div>
    `;
    card.onclick = () => openUnit(u.id);
    box.appendChild(card);
  });
}

function skillsForUnitId(unitId) {
  return skillsForGrade(grade)
    .filter(s => s.unit === unitId)
    .sort((a, b) => parseInt(a.id.split('-').pop()) - parseInt(b.id.split('-').pop()));
}

// ============================================================
// UNIT: the winding skill trail
// ============================================================
function renderTrail() {
  const u = unitsForGrade(grade).find(x => x.id === unit);
  document.getElementById("unitTitle").textContent = u.icon + " " + u.name;
  const skills = skillsForUnitId(unit);
  const box = document.getElementById("trailPath");
  box.innerHTML = "";
  const positions = ["pos-left", "pos-center", "pos-right", "pos-center"];
  skills.forEach((s, i) => {
    const p = progress[s.id];
    const row = document.createElement("div");
    row.className = "trail-row " + positions[i % positions.length];
    const node = document.createElement("div");
    node.className = "trail-node" + (p && p.done ? " done" : "");
    node.innerHTML = `
      <div class="tn-bubble">${p && p.done ? "✓" : (i + 1)}</div>
      <div>
        <div class="tn-label">${s.title}</div>
        ${p && p.done ? `<div class="tn-stars">${"⭐".repeat(p.stars)}</div>` : ""}
      </div>
    `;
    node.onclick = () => startSkill(s.id);
    row.appendChild(node);
    box.appendChild(row);
  });
}

// ============================================================
// QUESTION BUILDING
// ============================================================
function buildQuestions(sk) {
  return shuffle(sk.pool).map(item => normalizeItem(item, sk.type));
}

function normalizeItem(item, type) {
  if (type === 'mcq') {
    const options = shuffle([item.correct, ...item.wrong]);
    return {
      type, fact: item.fact, prompt: item.q, options,
      correctIndex: options.indexOf(item.correct),
      hint: item.hint, experiment: item.experiment, explanation: item.fact
    };
  }
  if (type === 'sort') {
    const items = shuffle(item.items.map(it => ({label: it.label, match: it.match})));
    return {type, prompt: item.prompt, items, hint: item.hint, explanation: item.explanation};
  }
  if (type === 'match') {
    const leftItems = shuffle(item.pairs.map(p => p.left));
    const rightItems = shuffle(item.pairs.map(p => p.right));
    const correctMap = {};
    item.pairs.forEach(p => { correctMap[p.left] = p.right; });
    return {type, prompt: item.prompt, leftItems, rightItems, correctMap, hint: item.hint, explanation: item.explanation};
  }
  if (type === 'sequence') {
    const bank = shuffle(item.steps);
    return {type, prompt: item.prompt, steps: item.steps, bank, hint: item.hint, explanation: item.explanation};
  }
  if (type === 'label') {
    const parts = shuffle(item.parts.map(p => ({name: p.name, correct: p.correct})));
    return {type, prompt: item.prompt, parts, hint: item.hint, explanation: item.explanation};
  }
}

// ============================================================
// QUIZ FLOW
// ============================================================
function startSkill(id) {
  skill = skillsById[id];
  if (!skill) return;
  qi = 0; correct = 0; wrong = 0; mistakes = []; answered = false; hintCount = 0;
  questions = buildQuestions(skill);
  showScreen("quizScreen");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = questions[qi];
  const total = questions.length;
  const u = unitFor(skill);

  document.getElementById("quizLabel").innerHTML = `${u.icon} ${u.name} • ${skill.title}`;
  document.getElementById("quizQNum").innerHTML = "Q " + (qi + 1) + " / " + total;
  document.getElementById("qsCorrect").innerHTML = correct;
  document.getElementById("qsWrong").innerHTML = wrong;
  const att = correct + wrong;
  document.getElementById("qsAcc").innerHTML = att ? Math.round((correct / att) * 100) + "%" : "—";
  document.getElementById("progFill").style.width = (qi / total * 100) + "%";

  document.getElementById("feedback").className = "feedback";
  document.getElementById("explanation").className = "explanation";
  document.getElementById("hintBox").className = "hint-box";
  document.getElementById("checkBtn").style.display = "inline-flex";
  document.getElementById("nextBtn").style.display = "none";

  const hintAllowed = qi < total - 1 && hintCount < 2 && q.hint;
  const hintBtn = document.getElementById("hintBtn");
  hintBtn.style.display = hintAllowed ? "inline-flex" : "none";
  hintBtn.disabled = false;

  document.getElementById("funFactBtn").style.display = qi === total - 1 ? "inline-flex" : "none";

  renderQuestion(q);
}

function renderQuestion(q) {
  const card = document.getElementById("qCard");
  const u = unitFor(skill);
  card.style.borderTopColor = strandColorVar(u.strand);

  mcqPicked = null; sortPicked = new Set(); matchSelLeft = null; matchLinks = {};
  seqOrder = []; labelPicked = null;

  let html = `<div class="q-type-badge">${u.icon} ${u.name}</div>`;
  if (q.type === 'mcq') {
    html += `<div class="q-fact">🔍 Did you know? ${q.fact}</div>`;
    html += `<div class="q-text">${q.prompt}</div>`;
    if (q.experiment) html += `<div class="experiment-box"><div class="science-emoji">🔬</div><div>${q.experiment}</div></div>`;
    html += `<div class="options two-col" id="qBody"></div>`;
  } else if (q.type === 'sort') {
    html += `<div class="q-prompt">${q.prompt}</div>`;
    html += `<div class="sort-grid" id="qBody"></div>`;
  } else if (q.type === 'match') {
    html += `<div class="q-prompt">${q.prompt}</div>`;
    html += `<div class="match-grid"><div class="match-col" id="matchLeft"></div><div class="match-col" id="matchRight"></div></div>`;
  } else if (q.type === 'sequence') {
    html += `<div class="q-prompt">${q.prompt}</div>`;
    html += `<div class="seq-slots" id="seqSlots"></div>`;
    html += `<div class="seq-bank" id="seqBank"></div>`;
  } else if (q.type === 'label') {
    html += `<div class="q-prompt">${q.prompt}</div>`;
    html += `<div class="diagram-wrap" id="qBody"></div>`;
  }
  card.innerHTML = html;

  if (q.type === 'mcq') renderMCQBody(q);
  else if (q.type === 'sort') renderSortBody(q);
  else if (q.type === 'match') renderMatchBody(q);
  else if (q.type === 'sequence') renderSequenceBody(q);
  else if (q.type === 'label') renderLabelBody(q);
}

// ---- per-type renderers ----
function renderMCQBody(q) {
  const box = document.getElementById("qBody");
  const letters = ["A", "B", "C", "D"];
  box.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerHTML = `<div class="opt-letter">${letters[i]}</div><div>${opt}</div>`;
    btn.onclick = () => {
      if (answered) return;
      mcqPicked = i;
      box.querySelectorAll(".opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
    box.appendChild(btn);
  });
}

function renderSortBody(q) {
  const box = document.getElementById("qBody");
  box.innerHTML = "";
  q.items.forEach((it, i) => {
    const chip = document.createElement("button");
    chip.className = "sort-chip";
    chip.textContent = it.label;
    chip.onclick = () => {
      if (answered) return;
      if (sortPicked.has(i)) sortPicked.delete(i); else sortPicked.add(i);
      chip.classList.toggle("picked");
    };
    box.appendChild(chip);
  });
}

function renderMatchBody(q) {
  const left = document.getElementById("matchLeft"), right = document.getElementById("matchRight");
  left.innerHTML = ""; right.innerHTML = "";
  q.leftItems.forEach((txt, i) => {
    const b = document.createElement("button");
    b.className = "match-btn";
    b.textContent = txt;
    b.onclick = () => {
      if (answered) return;
      matchSelLeft = i;
      left.querySelectorAll(".match-btn").forEach(x => x.classList.remove("selected"));
      b.classList.add("selected");
    };
    left.appendChild(b);
  });
  q.rightItems.forEach((txt, i) => {
    const b = document.createElement("button");
    b.className = "match-btn";
    b.textContent = txt;
    b.onclick = () => {
      if (answered || matchSelLeft == null) return;
      matchLinks[matchSelLeft] = i;
      left.children[matchSelLeft].classList.remove("selected");
      left.children[matchSelLeft].classList.add("linked");
      right.querySelectorAll(".match-btn").forEach(x => x.classList.remove("linked"));
      Object.values(matchLinks).forEach(ri => right.children[ri].classList.add("linked"));
      matchSelLeft = null;
    };
    right.appendChild(b);
  });
}

function renderSequenceBody(q) {
  const slotsBox = document.getElementById("seqSlots"), bankBox = document.getElementById("seqBank");
  slotsBox.innerHTML = ""; bankBox.innerHTML = "";
  q.steps.forEach((_, i) => {
    const slot = document.createElement("div");
    slot.className = "seq-slot";
    slot.innerHTML = `<div class="slot-num">${i + 1}</div><div class="slot-text">?</div>`;
    slot.onclick = () => {
      if (answered) return;
      if (i === seqOrder.length - 1) {
        const removedText = seqOrder.pop();
        slot.classList.remove("filled");
        slot.querySelector(".slot-text").textContent = "?";
        const chip = [...bankBox.children].find(c => c.textContent === removedText && c.disabled);
        if (chip) chip.disabled = false;
      }
    };
    slotsBox.appendChild(slot);
  });
  q.bank.forEach(text => {
    const chip = document.createElement("button");
    chip.className = "seq-chip";
    chip.textContent = text;
    chip.onclick = () => {
      if (answered || seqOrder.length >= q.steps.length) return;
      seqOrder.push(text);
      chip.disabled = true;
      const slot = slotsBox.children[seqOrder.length - 1];
      slot.classList.add("filled");
      slot.querySelector(".slot-text").textContent = text;
    };
    bankBox.appendChild(chip);
  });
}

function renderLabelBody(q) {
  const box = document.getElementById("qBody");
  box.innerHTML = "";
  q.parts.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "diagram-part";
    btn.textContent = p.name;
    btn.onclick = () => {
      if (answered) return;
      labelPicked = i;
      box.querySelectorAll(".diagram-part").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
    box.appendChild(btn);
  });
}

// ---- checking ----
function checkAnswer() {
  if (answered) return;
  const q = questions[qi];
  let isCorrect = false;

  if (q.type === 'mcq') {
    if (mcqPicked == null) return;
    isCorrect = mcqPicked === q.correctIndex;
    lockMCQVisual(q);
  } else if (q.type === 'sort') {
    const correctSet = new Set(q.items.map((it, i) => it.match ? i : null).filter(x => x !== null));
    isCorrect = correctSet.size === sortPicked.size && [...correctSet].every(i => sortPicked.has(i));
    lockSortVisual(q);
  } else if (q.type === 'match') {
    const total = q.leftItems.length;
    let allCorrect = Object.keys(matchLinks).length === total;
    for (let li = 0; li < total; li++) {
      const ri = matchLinks[li];
      const okPair = ri != null && q.rightItems[ri] === q.correctMap[q.leftItems[li]];
      if (!okPair) allCorrect = false;
    }
    isCorrect = allCorrect;
    lockMatchVisual(q);
  } else if (q.type === 'sequence') {
    isCorrect = seqOrder.length === q.steps.length && seqOrder.every((t, i) => t === q.steps[i]);
    lockSequenceVisual(q);
  } else if (q.type === 'label') {
    if (labelPicked == null) return;
    isCorrect = q.parts[labelPicked].correct === true;
    lockLabelVisual(q);
  }

  finalizeAnswer(isCorrect, q.explanation);
}

function lockMCQVisual(q) {
  const box = document.getElementById("qBody");
  [...box.children].forEach((b, i) => {
    b.disabled = true;
    b.classList.remove("selected");
    if (i === q.correctIndex) b.classList.add("correct");
    else if (i === mcqPicked) b.classList.add("wrong");
  });
}

function lockSortVisual(q) {
  const box = document.getElementById("qBody");
  [...box.children].forEach((chip, i) => {
    chip.disabled = true;
    chip.classList.remove("picked");
    const shouldPick = q.items[i].match;
    const picked = sortPicked.has(i);
    if (shouldPick && picked) chip.classList.add("correct");
    else if (!shouldPick && picked) chip.classList.add("wrong");
    else if (shouldPick && !picked) chip.classList.add("missed");
  });
}

function lockMatchVisual(q) {
  const left = document.getElementById("matchLeft"), right = document.getElementById("matchRight");
  [...left.children].forEach(b => { b.disabled = true; });
  [...right.children].forEach(b => { b.disabled = true; });
  for (let li = 0; li < q.leftItems.length; li++) {
    const ri = matchLinks[li];
    const okPair = ri != null && q.rightItems[ri] === q.correctMap[q.leftItems[li]];
    left.children[li].classList.remove("selected", "linked");
    left.children[li].classList.add(okPair ? "linked" : "wronglink");
    if (ri != null) {
      right.children[ri].classList.remove("linked");
      right.children[ri].classList.add(okPair ? "linked" : "wronglink");
    }
  }
}

function lockSequenceVisual(q) {
  const slots = document.getElementById("seqSlots");
  [...slots.children].forEach((slot, i) => {
    slot.classList.add(seqOrder[i] === q.steps[i] ? "correct" : "wrong");
  });
  document.querySelectorAll("#seqBank .seq-chip").forEach(c => { c.disabled = true; });
}

function lockLabelVisual(q) {
  const box = document.getElementById("qBody");
  [...box.children].forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove("selected");
    if (q.parts[i].correct) btn.classList.add("correct");
    else if (i === labelPicked) btn.classList.add("wrong");
  });
}

function finalizeAnswer(isCorrect, explanation) {
  answered = true;
  if (isCorrect) correct++;
  else { wrong++; mistakes.push({q: questions[qi].prompt, exp: explanation}); }
  showFeedback(isCorrect, explanation);
}

function showFeedback(isCorrect, msg) {
  const fb = document.getElementById("feedback");
  fb.innerHTML = isCorrect ? "✅ Great job! " + (msg || "") : "🤗 Not quite — " + (msg || "");
  fb.className = "feedback show " + (isCorrect ? "ok" : "bad");

  if (!isCorrect && msg) {
    const ex = document.getElementById("explanation");
    ex.innerHTML = "💡 " + msg;
    ex.className = "explanation show";
  }

  document.getElementById("checkBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-flex";
  document.getElementById("hintBtn").style.display = "none";
  document.getElementById("qsCorrect").innerHTML = correct;
  document.getElementById("qsWrong").innerHTML = wrong;
  const att = correct + wrong;
  document.getElementById("qsAcc").innerHTML = att ? Math.round((correct / att) * 100) + "%" : "—";
}

function showHint() {
  const q = questions[qi];
  if (!q || !q.hint) return;
  hintCount++;
  document.getElementById("hintBox").innerHTML = "💡 Friendly hint: " + q.hint;
  document.getElementById("hintBox").classList.add("show");
  document.getElementById("hintBtn").disabled = true;
}

function showFunFact() {
  const facts = [
    "🌍 Earth is the only planet not named after a god!",
    "🧪 The hottest temperature ever recorded was 134°F in Death Valley!",
    "⚡ Lightning strikes somewhere on Earth 100 times every second!",
    "🌱 A single tree can produce enough oxygen for 4 people to breathe!",
    "🧲 A magnet's pull is strongest at its north and south poles!",
    "🦋 Butterflies taste with their feet - they have taste sensors there!",
    "🌙 The moon is moving away from Earth about 1.5 inches every year!",
    "💧 Water can boil and freeze at the same time - it's called the triple point!",
    "🐙 Octopuses have three hearts and blue blood!",
    "☁️ A single cloud can weigh over a million pounds!"
  ];
  alert("🎉 Fun Fact: " + facts[rnd(0, facts.length - 1)]);
}

function nextQuestion() {
  qi++;
  if (qi >= questions.length) showResult();
  else loadQuestion();
}

function showResult() {
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= PASS_PCT;
  const stars = !passed ? 0 : (pct >= 90 ? 3 : pct >= 80 ? 2 : 1);

  if (passed) {
    const prev = progress[skill.id] || {done: false, stars: 0, score: 0};
    progress[skill.id] = {done: true, stars: Math.max(prev.stars, stars), score: Math.max(prev.score, pct)};
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
  updateTopbar();

  document.getElementById("resEmoji").innerHTML = stars >= 3 ? "🏆" : stars >= 2 ? "🌟" : stars >= 1 ? "⭐" : "💪";
  document.getElementById("resTitle").innerHTML = stars >= 3 ? "AMAZING EXPLORER!" : stars >= 2 ? "Great Job!" : passed ? "Good Job!" : "Good Try!";
  document.getElementById("resPct").innerHTML = pct + "%";
  document.getElementById("resPct").style.color = passed ? "var(--good)" : "var(--bad)";
  document.getElementById("resStars").innerHTML = stars ? "⭐".repeat(stars) : "";
  document.getElementById("resMsg").innerHTML = passed
    ? `✨ You got ${correct} out of ${total} correct! You earned ${stars} star${stars > 1 ? "s" : ""}!`
    : `💪 You got ${correct} out of ${total} correct. You need ${PASS_PCT}% to pass. Want to try again?`;

  const ms = document.getElementById("mistakeSection");
  if (mistakes.length > 0) {
    ms.innerHTML = '<div class="mistake-title">📝 Let\'s learn from this:</div>' +
      mistakes.map(m => '<div class="mistake-item"><div class="mi-q">❓ ' + m.q + '</div>' +
        (m.exp ? '<div class="mi-exp">💡 ' + m.exp + '</div>' : '') + '</div>').join("");
  } else ms.innerHTML = "";

  document.getElementById("retryBtn").onclick = function () { startSkill(skill.id); };
  const nb = document.getElementById("nextLvBtn");
  const uSkills = skillsForUnitId(skill.unit);
  const idx = uSkills.findIndex(s => s.id === skill.id);
  const nextSkill = uSkills[idx + 1];
  if (passed && nextSkill) {
    nb.style.display = "inline-flex";
    nb.onclick = function () { startSkill(nextSkill.id); };
  } else nb.style.display = "none";

  showScreen("resultScreen");
}

// ============================================================
// INIT
// ============================================================
renderGradeGrid();
updateTopbar();
