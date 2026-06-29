# jasperzhao05.github.io

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

> This README is maintainer notes — only needed when *I* edit the site.
> Visitors just go to https://jasperzhao05.github.io; they never run any of this.

## Local development (editing the site)

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

## Writing notes

Notes are Markdown files with frontmatter. Drop a new `.md` into:

- `src/content/research-notes/` — shows up under **Research Notes**
- `src/content/investing-notes/` — shows up under **Investing Notes**

Frontmatter:

```yaml
---
title: "Your title"
date: 2026-06-29
description: "One-line summary (optional)."
tags: ["macro", "post-mortem"]
draft: false   # set true to hide from the published list
---
```

The filename becomes the URL slug (e.g. `my-note.md` → `/investing-notes/my-note`).

## Editing site chrome

- Name / email / GitHub / Substack links: `src/config.ts`
- About / Research / Projects / CV pages: `src/pages/*.astro`
- Styles: `src/styles/global.css`

## Substack

Set `substack` (and optionally `substackEmbed`) in `src/config.ts`. The embed
src comes from Substack → Settings → Embed; until then the subscribe box
degrades to a plain link.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. One-time setup: repo **Settings → Pages → Source →
GitHub Actions**.
