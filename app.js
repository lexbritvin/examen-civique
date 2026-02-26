// ── State ────────────────────────────────────────────────────────────────────
let quiz = [];
let current = 0;
let score = 0;
let sectionStats = {};
let answered = false;
let reviewMode = false;
let selectedBtn = null;
let selectedOpt = null;

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

// ── Screen management ────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
}

// ── Welcome screen ───────────────────────────────────────────────────────────
function startQuiz(isReview = false) {
  reviewMode = isReview;
  quiz = isReview ? selectReview() : selectQuiz();
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
  if (reviewMode) {
    badge.textContent = '📖 Révision terminée';
    badge.className = 'result-badge pass';
  } else {
    const passed = score >= PASS_SCORE;
    badge.textContent = passed ? '✅ ADMIS' : '❌ ÉCHEC';
    badge.className = 'result-badge ' + (passed ? 'pass' : 'fail');
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
    const { correct, total } = sectionStats[s];
    const tr = document.createElement('tr');
    const pct = total > 0 ? Math.round(correct / total * 100) : 0;
    tr.innerHTML = `
      <td>${sectionNames[s]}</td>
      <td class="stat-score">${correct}/${total}</td>
      <td class="stat-bar-cell"><div class="stat-bar" style="width:${pct}%"></div></td>
    `;
    tbody.appendChild(tr);
  });
}

document.getElementById('restart-btn').addEventListener('click', () => {
  showScreen('welcome-screen');
});

document.getElementById('start-btn').addEventListener('click', () => startQuiz(false));
document.getElementById('review-btn').addEventListener('click', () => startQuiz(true));
