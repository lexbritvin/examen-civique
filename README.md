# Examen Civique — QCM

A progressive web app (PWA) for practising the **Examen civique mention Carte de séjour pluriannuelle (CSP)**, mandatory in France from **1 January 2026** for first applications for a multi-year residence permit (after an initial CST).

> The exam is not required for renewal applications or for first *Carte de séjour temporaire (CST)* requests.

**Live site:** https://lexbritvin.github.io/examen-civique/

## Features

- 40-question quiz (8 per section), randomised each session
- Instant feedback: green on correct, red on wrong with correct answer highlighted
- Per-section results table with pass/fail indicator (32 / 40 to pass)
- ★ marks important questions
- Works offline — install to home screen for offline use (iOS: Share → Add to Home Screen; Android: browser menu → Install app)

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
