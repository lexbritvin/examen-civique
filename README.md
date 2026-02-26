# Examen Civique — QCM

A progressive web app (PWA) for practising the French citizenship exam (*examen de naturalisation*). 190 multiple-choice questions across 5 sections, drawn from the official test format.

**Live site:** https://britvin.github.io/examen-civique/

## Features

- 40-question quiz (8 per section), randomised each session
- Instant feedback: green on correct, red on wrong with correct answer highlighted
- Per-section results table with pass/fail indicator (32 / 40 to pass)
- ★ marks important questions
- Works offline via Service Worker cache

## Run locally

No build step required — pure static HTML/CSS/JS.

```bash
# Via Docker
docker build -t civique . && docker run --rm -p 8080:80 civique
# Then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | App shell + inline CSS |
| `app.js` | Quiz engine |
| `questions.js` | 190 questions (`const QUESTIONS`) |
| `sw.js` | Service Worker (cache-first) |
| `manifest.json` | PWA manifest |
