# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run

```bash
# Build and run via Docker
docker build -t civique . && docker run -p 8080:80 civique

# Rebuild after changes
docker build -t civique . && docker run --rm -p 8080:80 civique
```

There is no build step, linter, or test suite — the app is pure static HTML/CSS/JS.

## Architecture

Single-page app served by nginx. No framework, no bundler, no dependencies installed locally.

**Data flow:** `questions.js` → `app.js` → DOM

- **`questions.js`** — declares `const QUESTIONS`, a flat array of 190 objects. Each question has `{ id, section (1–5), sectionName, important (bool), text, options[] }`. Each option: `{ label, text, correct }`. The source of truth is the Obsidian markdown at `/Users/britvin/Library/Mobile Documents/iCloud~md~obsidian/Documents/My Vault/1 - Rough Notes/Examen Civique — QCM pratique.md`.

- **`app.js`** — all quiz logic. Key functions:
  - `selectQuiz()` — picks 8 random questions per section (40 total), shuffles the result
  - `renderQuestion()` — shuffles option order each render, assigns display labels a/b/c/d, stores `data-correct` on each button
  - `handleAnswer(opt, btn)` — on correct: green + auto-advance (800 ms); on wrong: red + green on correct + shows "Suivant" button
  - `showResults()` — builds per-section stats table

- **`index.html`** — all CSS is inline in a `<style>` block. Three `<section>` elements with `hidden` attribute toggled by `showScreen(id)`. Loads `questions.js` then `app.js`, registers the service worker inline.

- **`sw.js`** — cache-first strategy, caches the asset list on install, purges old caches on activate.

## Question data conventions

- Correct answer is identified by `opt.correct === true` (exactly one per question).
- `important: true` marks questions tagged `:star:` in the source markdown — displayed as ★ in the UI.
- Section ranges: S1 Q1–37, S2 Q38–83, S3 Q84–113, S4 Q114–160, S5 Q161–190.
- Pass threshold: 32/40.
