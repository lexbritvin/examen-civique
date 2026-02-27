// ── State ────────────────────────────────────────────────────────────────────
let quiz = [];
let current = 0;
let score = 0;
let sectionStats = {};
let answered = false;
let selectedBtn = null;
let selectedOpt = null;
let wrongIds = [];
let wrongQuestions = [];
let currentMode = 'test';

const SECTIONS = [1, 2, 3, 4, 5];
const QUESTIONS_PER_SECTION = 8;
const PASS_SCORE = 32;
const TOTAL_EXAM = 40;
let total = TOTAL_EXAM;

// ── Helpers ──────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectQuiz() {
  const selected = SECTIONS.flatMap(sectionId => {
    const pool = QUESTIONS.filter(q => q.section === sectionId);
    return shuffle(pool).slice(0, QUESTIONS_PER_SECTION);
  });
  return shuffle(selected);
}

function selectReview() {
  return [...QUESTIONS].sort((a, b) => a.id - b.id);
}

function selectImportant() {
  return shuffle(QUESTIONS.filter(q => q.important));
}

function selectSection(sectionId) {
  return shuffle(QUESTIONS.filter(q => q.section === sectionId));
}

// ── localStorage ─────────────────────────────────────────────────────────────
const HISTORY_KEY = 'civique-history';
const MAX_HISTORY = 20;

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch { return []; }
}

function saveToHistory(entry) {
  const history = loadHistory();
  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.length = MAX_HISTORY;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// ── Screen management ────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
}

// ── Welcome screen ───────────────────────────────────────────────────────────
function startQuiz(mode) {
  if (mode === undefined) mode = 'test';
  currentMode = mode;

  // Capture wrong questions before resetting (for retry mode)
  const retryPool = [...wrongQuestions];
  wrongIds = [];
  wrongQuestions = [];

  if (mode === 'test')           quiz = selectQuiz();
  else if (mode === 'review')    quiz = selectReview();
  else if (mode === 'important') quiz = selectImportant();
  else if (mode === 'retry')     quiz = shuffle(retryPool);
  else if (mode && mode.section) quiz = selectSection(mode.section);
  else                           quiz = selectQuiz();

  total = quiz.length;
  current = 0;
  score = 0;
  answered = false;
  sectionStats = {};
  SECTIONS.forEach(s => { sectionStats[s] = { correct: 0, total: 0 }; });

  showScreen('quiz-screen');
  renderQuestion();
}

// ── Quiz rendering ───────────────────────────────────────────────────────────
function renderQuestion() {
  answered = false;
  const q = quiz[current];

  // Progress
  const pct = (current / total) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${current + 1} / ${total}`;

  // Section badge
  document.getElementById('section-badge').textContent = q.sectionName;

  // Question text
  const qEl = document.getElementById('question-text');
  qEl.textContent = q.text;
  if (q.important) {
    qEl.insertAdjacentHTML('beforeend', ' <span class="star" title="Question importante">★</span>');
  }

  // Options — shuffled order, labels reassigned a/b/c/d
  const optEl = document.getElementById('options');
  optEl.innerHTML = '';
  const labels = ['a', 'b', 'c', 'd'];
  shuffle(q.options).forEach((opt, i) => {
    const displayLabel = labels[i];
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.label = displayLabel;
    btn.innerHTML = `<span class="opt-label">${displayLabel})</span> ${escapeHtml(opt.text)}`;
    btn.dataset.correct = opt.correct ? '1' : '';
    btn.addEventListener('click', () => handleAnswer(opt, btn));
    optEl.appendChild(btn);
  });

  // Hide action buttons, reset selection
  document.getElementById('next-btn').hidden = true;
  document.getElementById('confirm-btn').hidden = true;
  selectedBtn = null;
  selectedOpt = null;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function handleAnswer(opt, btn) {
  if (answered) return;

  // Deselect previous
  if (selectedBtn) selectedBtn.classList.remove('selected');

  // Select new
  selectedBtn = btn;
  selectedOpt = opt;
  btn.classList.add('selected');
  document.getElementById('confirm-btn').hidden = false;
}

function confirmAnswer() {
  if (answered || !selectedOpt) return;
  answered = true;

  document.getElementById('confirm-btn').hidden = true;

  const q = quiz[current];
  sectionStats[q.section].total++;

  // Disable all buttons
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  selectedBtn.classList.remove('selected');

  if (selectedOpt.correct) {
    score++;
    sectionStats[q.section].correct++;
    selectedBtn.classList.add('correct');
  } else {
    wrongIds.push(q.id);
    wrongQuestions.push(q);
    selectedBtn.classList.add('wrong');
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.dataset.correct) b.classList.add('correct');
    });
  }
  document.getElementById('next-btn').hidden = false;
}

function advance() {
  current++;
  if (current >= total) {
    showResults();
  } else {
    renderQuestion();
  }
}

document.getElementById('confirm-btn').addEventListener('click', confirmAnswer);
document.getElementById('next-btn').addEventListener('click', advance);

// ── Results ───────────────────────────────────────────────────────────────────
function showResults() {
  showScreen('result-screen');

  document.getElementById('score-value').textContent = `${score} / ${total}`;

  const badge = document.getElementById('result-badge');
  if (currentMode === 'review') {
    badge.textContent = '📖 Révision terminée';
    badge.className = 'result-badge pass';
  } else if (currentMode === 'test') {
    const passed = score >= PASS_SCORE;
    badge.textContent = passed ? '✅ ADMIS' : '❌ ÉCHEC';
    badge.className = 'result-badge ' + (passed ? 'pass' : 'fail');
  } else {
    const pct = total > 0 ? Math.round(score / total * 100) : 0;
    badge.textContent = `${pct}%`;
    badge.className = 'result-badge ' + (pct >= 80 ? 'pass' : 'fail');
  }

  const sectionNames = {
    1: 'Principes et valeurs',
    2: 'Système institutionnel',
    3: 'Droits et devoirs',
    4: 'Histoire et géographie',
    5: 'Vie dans la société',
  };

  const tbody = document.getElementById('section-stats');
  tbody.innerHTML = '';
  SECTIONS.forEach(s => {
    const st = sectionStats[s];
    if (st.total === 0) return;
    const tr = document.createElement('tr');
    const pct = Math.round(st.correct / st.total * 100);
    tr.innerHTML = `
      <td>${sectionNames[s]}</td>
      <td class="stat-score">${st.correct}/${st.total}</td>
      <td class="stat-bar-cell"><div class="stat-bar" style="width:${pct}%"></div></td>
    `;
    tbody.appendChild(tr);
  });

  // Retry button
  const retryBtn = document.getElementById('retry-btn');
  if (wrongIds.length > 0 && currentMode !== 'review' && currentMode !== 'retry') {
    retryBtn.textContent = `Répéter les erreurs (${wrongIds.length})`;
    retryBtn.hidden = false;
  } else {
    retryBtn.hidden = true;
  }

  // Save to history (not for review/retry)
  if (currentMode !== 'review' && currentMode !== 'retry') {
    const passed = currentMode === 'test' ? score >= PASS_SCORE : null;
    const modeStr = typeof currentMode === 'object' && currentMode.section
      ? `section-${currentMode.section}`
      : currentMode;
    saveToHistory({
      date: new Date().toISOString(),
      score,
      total,
      passed,
      mode: modeStr,
      sections: Object.fromEntries(
        Object.entries(sectionStats).map(([k, v]) => [k, { correct: v.correct, total: v.total }])
      )
    });
  }
}

// ── History rendering ─────────────────────────────────────────────────────────
function renderHistory() {
  const history = loadHistory();
  const container = document.getElementById('history-list');
  if (!history.length) {
    container.hidden = true;
    return;
  }
  container.hidden = false;

  const modeLabel = m => {
    if (m === 'test') return '';
    if (m === 'important') return ' ★';
    if (m && m.startsWith('section-')) return ` S${m.split('-')[1]}`;
    return '';
  };

  const items = history.slice(0, 5).map(h => {
    const d = new Date(h.date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const icon = h.passed === true ? '✅' : h.passed === false ? '❌' : '📝';
    return `<div class="history-item">${icon} ${day}/${month}${modeLabel(h.mode)} — ${h.score}/${h.total}</div>`;
  }).join('');
  container.innerHTML = '<div class="history-title">Historique</div>' +
    `<div class="history-items">${items}</div>`;
}

// ── Section grid toggle ───────────────────────────────────────────────────────
document.getElementById('section-btn').addEventListener('click', () => {
  const grid = document.getElementById('section-grid');
  const btn = document.getElementById('section-btn');
  grid.hidden = !grid.hidden;
  btn.textContent = grid.hidden ? 'Par section ▾' : 'Par section ▴';
});

document.querySelectorAll('.section-choice').forEach(btn => {
  btn.addEventListener('click', () => {
    const sectionId = parseInt(btn.dataset.section);
    document.getElementById('section-grid').hidden = true;
    document.getElementById('section-btn').textContent = 'Par section ▾';
    startQuiz({ section: sectionId });
  });
});

// ── Event listeners ───────────────────────────────────────────────────────────
document.getElementById('start-btn').addEventListener('click', () => startQuiz('test'));
document.getElementById('review-btn').addEventListener('click', () => startQuiz('review'));
document.getElementById('important-btn').addEventListener('click', () => startQuiz('important'));
document.getElementById('retry-btn').addEventListener('click', () => startQuiz('retry'));

document.getElementById('restart-btn').addEventListener('click', () => {
  renderHistory();
  showScreen('welcome-screen');
});

// ── Init ──────────────────────────────────────────────────────────────────────
renderHistory();
