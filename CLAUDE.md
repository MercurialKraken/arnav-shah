# CLAUDE.md — Project Brief: Arnav Shah Personal Website

This file is the single source of truth for this project. Every session and every
subagent should read and respect it. When something here conflicts with an ad-hoc
instruction, ask before deviating.

---

## Project Overview

A multi-page personal website for Arnav Shah, a Robotics major at Carnegie Mellon
University's School of Computer Science (Class of 2028, Creative Writing minor). The
site showcases his robotics work (research, engineering, projects) alongside a writing
portfolio. It is a static site, hand-buildable, deployed to GitHub Pages.

---

## Audience & Intent

- **Primary audience:** recruiters at top robotics companies (Amazon Robotics, Tesla,
  Figure AI, Boston Dynamics, Disney Research, etc.).
- **But:** the site must NOT read as a funnel built solely for recruiters. It is Arnav's
  personal space to showcase everything he makes — including writing that recruiters may
  never read — presented as a peer to the technical work, not a footnote.
- **The one impression to leave:** technically serious *and* creatively literate. Range.
  Someone who builds real robotics systems and also writes well.

---

## Design North Star

**Minimalist, sleek structure — literary personality in the typography.**

- The layout, spacing, and color are restrained and clean. Near-zero visual noise.
- The *type* carries the personality: an expressive, high-quality serif for prose and
  headers gives a literary sensibility; clean sans-serif for technical/UI text.
- Flair lives in the lettering and the words, NOT in the layout or color. The result
  should read as taste and restraint, never as decoration for its own sake.
- Think: a well-designed literary journal that happens to be showing robotics work.

---

## Tech Stack (hard constraints)

- **Plain HTML, CSS, and vanilla JavaScript.** No frameworks (no React, Astro, Next,
  Vue, Tailwind build step, etc.).
- **Multi-page site.** Separate HTML files per section that navigate like a normal
  website (real page loads, shareable URLs such as `/writing`, `/projects`).
- Must deploy cleanly to **GitHub Pages** as static files.
- No build step required. A browser opening any `.html` file should just work.
- File layout:
  - `index.html` (Home/Landing)
  - `projects.html`
  - `writing.html`
  - `resume.html`
  - one shared `style.css` linked by every page (single source of visual truth)
  - `script.js` only if needed
  - assets (images, video, PDF) in an `assets/` folder
- Every page shares an identical header/nav and footer so the site feels cohesive.
  The active page is visually indicated in the nav.
- Fonts via a reputable CDN (e.g. Google Fonts) are fine.
- The site must be responsive (looks good on laptop and phone).

---

## Site Structure (separate pages, nav in this order)

1. **Home / Landing** (`index.html`) — most important. Name, a one-line identity,
   immediate sense of who Arnav is and what the site holds. Sets the tone visually.
   Should orient the visitor to the other pages.
2. **Projects** (`projects.html`) — the showcase. Project set and order are defined in
   `content/projects/` (see the Projects section below).
3. **Writing Portfolio** (`writing.html`) — a curated space for Arnav's creative writing.
   Presented with the same care as the projects, not as an afterthought.
4. **Resume** (`resume.html`) — embedded view of the PDF (visible on-page without a
   click) plus a download link.

Shared across every page: an identical header/nav (linking all four pages, active page
indicated) and an identical footer. Footer holds quiet links only — email, LinkedIn,
GitHub. NO dedicated contact section or "get in touch" call-to-action.

---

## Projects

The canonical project list, display order, and per-project representation are DATA,
not part of this brief. They live in `content/projects/`:

- Each project is one `.md` file (e.g. `content/projects/cmr.md`) containing its title,
  summary, media/links, and how it should be represented.
- The display order is defined in `content/projects/ORDER.md`.

To add, remove, or reorder projects, edit those files — NOT this one. The build agent
reads `content/projects/` for the current set every time it runs.

Rules that always apply, regardless of which projects are listed:

- Each project card's representation (video, image+link, repo link, GIFs, etc.) is
  specified in that project's own `.md` file. Respect it.
- If a project says "link out, do not duplicate" (e.g. an existing external writeup),
  never copy that page into this site.
- Confidential work is excluded unless its `.md` file provides a genuinely showable
  representation. A project with nothing showable beyond the resume does not get a card.

---

## Rules & Constraints

- ASSETS ARE PUBLIC. The assets/ directory is served publicly by GitHub Pages: every
  file in it becomes a downloadable URL. Only two kinds of file may live in assets/:
  (1) media that a page actually displays (images, embedded videos/gifs), and (2) the
  resume PDF (which is meant to be publicly downloadable). NOTHING ELSE. No source
  documents, no PDFs (except the resume), no pptx/docx, no README copies, no raw or
  superseded media. All such source material lives in sources/ at the project root,
  which is gitignored and never served. Any agent that adds a file to assets/ must
  confirm it is card-displayed media or the resume; if not, it goes in sources/. This
  protects confidential material (e.g. the MoonRanger flight-software PDF) from being
  served next to the copy that was carefully written to exclude it.
- Do NOT build a contact page or any "get in touch" CTA. Links go quietly in the footer.
- Do NOT use any framework or build tooling. Vanilla only.
- Do NOT duplicate the quadruped writeup page into this site; link out to it.
- Do NOT include Mujin.
- Do NOT invent facts, metrics, or credentials. All content comes from Arnav's real work;
  if a detail is missing, leave a clear placeholder and flag it rather than fabricating.
- Prose must sound like Arnav (see /voice once populated), not generic portfolio copy.
- GLOBAL WRITING RULES (apply to ALL prose on the site — technical, casual, everything):
  - NO em-dashes. Use commas, colons, parentheses, or separate sentences instead.
  - Writing must sound natural and human, never robotic or AI-generated. No hollow
    hype ("cutting-edge", "passionate", "leveraging"), no throat-clearing, no filler.
  - Say the real thing plainly. Concrete over vague, specific over generic.
- Prefer showing over telling: video, images, and real results over adjectives.
- Keep the writing portfolio's presentation as polished as the technical sections.

---

## Definition of Done (v1)

- Four responsive HTML pages (`index`, `projects`, `writing`, `resume`) sharing one
  `style.css`, all deploying to GitHub Pages.
- Identical header/nav and footer on every page; active page indicated in nav.
- All four sections present and complete — no Lorem Ipsum, real content throughout.
- Every project in `content/projects/` represented on the projects page, in the order
  from `ORDER.md`, each with its correct media/links as specified in its own file.
- Resume embedded and downloadable.
- Typography reflects the design north star (literary serif + clean sans).
- Footer links present (email, LinkedIn, GitHub).
- No placeholder or fabricated content shipped; any genuine gaps clearly flagged.