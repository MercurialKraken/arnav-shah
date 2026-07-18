# Design Tokens — Arnav Shah Personal Website

Single source of visual truth. Derived from the Design North Star in `CLAUDE.md`:
*minimalist, sleek structure; literary personality carried by typography.*

Builders: implement these values in `style.css`. Do not introduce new fonts, colors,
shadows, or radii beyond what is defined here. If something isn't in this file, the
answer is "don't."

---

## 1. Typography

### 1.1 Families

**Serif — Newsreader** (Production Type, Google Fonts).
Used for: all headings, all prose, project titles, writing titles, the Italic Deck.
Why: it's an editorial serif built for reading at length — high stroke contrast, ball
terminals, a slightly narrow set that feels typeset rather than defaulted, and a
variable optical-size axis so large headings tighten correctly. Its italic is
unusually expressive, which the signature move depends on. It reads "journal" where
EB Garamond reads "book" and Playfair reads "fashion brand."

**Sans — IBM Plex Sans** (IBM, Google Fonts).
Used for: nav, footer, buttons/links-as-UI, metadata, tags, dates, captions, tables,
the resume page chrome, any technical label.
Why: drawn for an engineering company. It carries a workmanlike, instrument-panel
neutrality that makes the technical scaffolding read as *engineering* rather than
*portfolio template*, and its slightly humanist skeleton keeps it from fighting the
serif. Neutral grotesques (Inter, Helvetica) would be quieter but say nothing.

**Mono — IBM Plex Mono** (IBM, Google Fonts). **Adopted, and tightly scoped.**
Used for: technical metadata only — project tech tags, dates, and metrics. Nothing else.
Why: it gives the engineering scaffolding one note of instrument-panel texture that the
sans alone doesn't carry, and it shares Plex's skeleton, so a third family costs no
additional visual vocabulary. The scope is the whole point — Mono earns its place by
appearing rarely and only where a value is being *reported*.

**Never use Mono for:** prose of any kind, writing titles or excerpts, project titles or
summaries, nav, footer, or the Italic Deck. If the text is read as language rather than
scanned as data, it is not Mono. When in doubt, it's not Mono.

If code snippets ever appear, they use Mono too — same family, same reasoning.

### 1.2 CDN link

Place in `<head>` of every page, before `style.css`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&display=swap">
```

Loaded weights: Newsreader 300–600 roman + italic (variable, one file per style);
IBM Plex Sans 400 / 500 / 600; IBM Plex Mono 400 only. Nothing else — do not add
weights ad hoc. Mono ships a single weight deliberately: metadata is never emphasised.

### 1.3 Family stacks

```css
--font-serif: "Newsreader", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
--font-sans:  "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono:  "IBM Plex Mono", ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", monospace;
```

### 1.4 Type scale

Root font-size stays at the browser default (16px). Never set `html { font-size }` to
a percentage — it breaks user zoom preferences.

| Token | Role | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `--fs-display` | Home page name only | serif | `clamp(3rem, 7vw, 4.5rem)` | 400 | 1.04 | `-0.022em` |
| `--fs-h1` | Page title | serif | `clamp(2.125rem, 5vw, 3rem)` | 400 | 1.12 | `-0.016em` |
| `--fs-h2` | Section head | serif | `clamp(1.5rem, 3vw, 1.75rem)` | 500 | 1.22 | `-0.01em` |
| `--fs-h3` | Project / piece title | serif | `1.25rem` | 600 | 1.32 | `-0.005em` |
| `--fs-deck` | **Italic Deck** (signature) | serif *italic* | `clamp(1.25rem, 2.4vw, 1.375rem)` | 300 | 1.5 | `0` |
| `--fs-prose` | Body prose | serif | `1.125rem` | 400 | 1.65 | `0` |
| `--fs-ui` | Sans body / UI text | sans | `1rem` | 400 | 1.55 | `0` |
| `--fs-nav` | Nav links | sans | `0.9375rem` | 500 | 1 | `0.01em` |
| `--fs-meta` | Captions, footer, UI metadata | sans | `0.875rem` | 400 | 1.45 | `0` |
| `--fs-tag` | **Technical metadata** — tech tags, dates, metrics | **mono** | `0.75rem` | 400 | 1.45 | `0.01em` |
| `--fs-label` | Eyebrow / small-caps labels | sans | `0.75rem` | 600 | 1.3 | `0.1em`, `uppercase` |

Optical sizing: set `font-optical-sizing: auto;` on `html` so Newsreader's `opsz` axis
responds. Enable `font-variant-numeric: oldstyle-nums` on serif prose only — text
figures belong in prose; lining figures belong in sans chrome, mono metadata, and the
resume. Mono is the reason dates and metrics now align in a column: use it for any
figure a reader might compare against another figure.

**Rules of use**
- Prose is serif. UI and chrome are sans. Technical metadata — tech tags, dates, metrics
  — is mono. Those are the only three cases; there is no fourth.
- Mono is for values that are *scanned*, not language that is *read*. Never prose, never
  writing, never titles, never nav or footer.
- Italic at deck size appears **only** in the Italic Deck. Inline emphasis inside prose
  uses italic at prose size — that's fine and expected.
- Never bold serif prose for emphasis; use italic.
- Headings never use letter-spacing greater than 0. Only `--fs-label` is tracked out.
- No `text-transform: uppercase` anywhere except `--fs-label`.

---

## 2. Color

Restrained to five inks plus one accent. **Warm paper stock, warm black** — a pure
`#fff`/`#000` pairing reads clinical and fights the literary intent.

**The ground is `#F3EDE1`.** Not off-white. Its relative luminance is 0.851 against the
old `#FBFAF7`'s 0.956 — a real drop in emitted light, which is what removes the fatigue —
while its saturation *rises* from 27% to 43%. Lightness down, chroma up: that is the
difference between "cream stock" and "dimmed white." Grey is structurally impossible
here because saturation moved in the opposite direction from lightness. Below ~90%
lightness at this hue it goes manila; above ~93% it still glares.

Every ratio below is computed against `#F3EDE1`, not asserted.

| Token | Hex | Role | Contrast on paper |
|---|---|---|---|
| `--paper` | `#F3EDE1` | Page background | — |
| `--paper-sunk` | `#EBE3D2` | Rare subtle fill (resume viewer frame, pull-quote ground) | 1.09:1 vs paper |
| `--ink` | `#16130F` | Primary text | **15.9:1** (AAA) |
| `--ink-soft` | `#4F483D` | Secondary text, metadata, captions, the Deck | **7.74:1** (AAA) |
| `--ink-faint` | `#6E6659` | Tertiary only: disabled nav, footer fine print | **4.86:1** — large/UI text only |
| `--rule` | `#DCD4C2` | Hairline rules, borders, dividers | 1.27:1 vs paper |
| `--rule-strong` | `#C7BCA4` | Rare heavier divider (footer top, section break) | 1.61:1 vs paper |
| `--accent` | `#8C2F23` | Oxblood. Links, deck rule, active nav mark | **7.08:1** (AAA) |
| `--accent-hover` | `#6E2419` | Link hover/active | **9.34:1** |
| `--focus` | `#8C2F23` | Focus ring (same oxblood, 2px offset outline) | — |

**Reconciliation notes — why each token moved.**

- **`--paper-sunk` went darker, not lighter** (`#F4F1EA` → `#EBE3D2`). On a cream ground
  a *lighter* panel reads as a light leak or a blown highlight, which breaks the paper
  metaphor and looks like a rendering bug. Deeper cream reads as recessed stock, which is
  the honest metaphor. Separation is 1.09:1, slightly stronger than the old pair's 1.08:1
  — a darker ground needs marginally more delta to stay perceptible.
- **`--ink` did not move.** `#16130F` is already a warm near-black (hue 34°) and still
  measures 15.9:1 (was 17.4:1 on the brighter ground). Losing 1.5 points of an already
  enormous ratio costs nothing; changing it would be churn.
- **`--ink-soft` had to move** (`#5F584D` → `#4F483D`). The old value measured only
  **6.03:1** on the new paper — a real AAA failure, not a rounding issue. Darkened to
  7.74:1, hue held at 36.7° so it stays warm against the warmer ground.
- **`--ink-faint` had to move** (`#8C857A` → `#6E6659`). The old value collapsed to
  **3.13:1** on the new paper, failing even its restricted large/UI-only threshold.
  Darkened to 4.86:1 at hue 37°.
- **Both rules moved down in value.** `#E2DED5` measured 1.15:1 on the new paper — nearly
  invisible, having read 1.29:1 on the old one. `#DCD4C2` restores it to 1.27:1, matching
  the original *perceived* hairline weight rather than the original hex. Same logic for
  `--rule-strong`: 1.58:1 before, `#CFC9BC` would now be 1.28:1, `#C7BCA4` restores 1.61:1.
- **`--accent` did not move, and shouldn't.** Oxblood `#8C2F23` measures 7.08:1 on the new
  paper (was 7.2:1) — it holds AAA with room, so there is no failure to fix. It also
  *gains* from the change: at hue 7° against a 40° ground, the hue distance narrowed, so
  the red now sits in the same warm family as the paper instead of stamping on top of it.
  That is more literary, not less. `--accent-hover` holds at 9.34:1.

**One accent, used sparingly.** Oxblood appears in exactly three places: link text, the
short rule above the Italic Deck, and the active-nav marker. Nowhere else. No accent
backgrounds, no accent headings, no tinted panels.

**One caveat to respect:** accent on `--paper-sunk` measures **6.46:1** — AA, not AAA.
Do not put oxblood link text on a sunk ground at prose size. The resume download link
belongs *above* the viewer frame on `--paper`, which is where §7 already puts it.

**Dark mode is not part of this system.** A paper-stock journal has no honest dark
counterpart; inverting it produces a generic dev-portfolio look and the oxblood goes
muddy. There are no dark-mode values in this file by design — a previous draft carried
some, they were computed against the old `#FBFAF7` ground, and stale values in a source
of truth are worse than no values. If dark mode is ever wanted, it gets derived fresh
from `#F3EDE1` with every ratio recomputed, as its own piece of work.

---

## 3. Spacing

Base unit **4px**, exposed as a 12-step scale. Vertical rhythm between major blocks
should always come from this scale — never from ad-hoc margins.

| Token | Value | Typical use |
|---|---|---|
| `--sp-1` | `0.25rem` (4px) | Icon nudge, tag padding |
| `--sp-2` | `0.5rem` (8px) | Label → value gap |
| `--sp-3` | `0.75rem` (12px) | Tight inline gaps |
| `--sp-4` | `1rem` (16px) | Paragraph spacing, list gaps |
| `--sp-5` | `1.5rem` (24px) | Heading → body |
| `--sp-6` | `2rem` (32px) | Between list items / cards |
| `--sp-7` | `3rem` (48px) | Sub-section separation |
| `--sp-8` | `4rem` (64px) | Section separation (mobile) |
| `--sp-9` | `6rem` (96px) | Section separation (desktop) |
| `--sp-10` | `8rem` (128px) | Page top padding below nav (desktop) |
| `--sp-11` | `10rem` (160px) | Home hero breathing room |
| `--sp-12` | `12rem` (192px) | Reserved; use almost never |

Generosity is the default. When unsure between two steps, take the larger one — this
site should feel under-filled, not packed.

---

## 4. Layout

```css
--measure-prose:   66ch;    /* body prose column — ~66 chars, the readable optimum */
--width-content:   46rem;   /* 736px — default single-column page width */
--width-wide:      68rem;   /* 1088px — media, resume viewer, two-column lists */
--width-full:      78rem;   /* 1248px — nav/footer inner bound only */
--gutter:          1.5rem;  /* mobile side padding */
--gutter-lg:       2.5rem;  /* desktop side padding */
```

**Grid approach: one column, centered.** No CSS grid system, no 12-column scaffold.
The page is a centered measure. Where two columns are genuinely useful (projects list
on wide screens, writing index), use a single `display: grid` with
`grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr))` and `gap: var(--sp-7)`.
That's the only grid in the site.

Prose containers use `max-width: var(--measure-prose)` — the 66ch measure is what makes
long serif text feel typeset rather than stretched. Wider elements (media, resume) opt
out to `--width-wide`.

**Radii and shadows:** `--radius: 2px` for images/media only. **No box-shadows
anywhere.** Depth is not part of this system; separation comes from whitespace and
hairline rules.

---

## 5. Rules, borders, links

- **Hairlines only.** Every border is `1px solid var(--rule)`. Never 2px, never solid
  dark, never a fully boxed container. Project entries are separated by a top rule, not
  enclosed in a card outline.
- **Section breaks** may use `border-top: 1px solid var(--rule-strong)` with
  `--sp-9` of space above and below. Use at most once or twice per page.
- **No `<hr>` decoration** — rules are structural, never ornamental flourishes.

**Links in prose:** `color: var(--accent)`, no underline at rest, `text-decoration:
underline` with `text-decoration-thickness: 1px` and `text-underline-offset: 0.18em` on
hover/focus. Reasoning: constant underlines in serif prose create visual noise the
North Star forbids; the oxblood alone is sufficient affordance at 7.08:1 contrast
against the paper, and at 2.25:1 against the surrounding `--ink` prose it is clearly a
different colour of text, not just darker text.

**Links as UI** (nav, footer, "View repo"): sans, `color: var(--ink)`, hover to
`var(--accent)`. Never underlined; hit target ≥ 44px on touch.

**Focus:** `outline: 2px solid var(--focus); outline-offset: 3px;` — visible on all
interactive elements, never removed.

---

## 6. The Signature Move — The Italic Deck

**One move. Do not add a second.**

Every page opens with its title, then a single line of Newsreader Italic beneath it,
preceded by a short oxblood rule. It is the only place italic appears at deck size
anywhere on the site, and it is what makes the site read as a journal.

Spec:

```css
.deck {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
  font-size: var(--fs-deck);
  line-height: 1.5;
  color: var(--ink-soft);
  max-width: 34rem;          /* deliberately shorter than the body measure */
  margin-top: var(--sp-5);
  padding-top: var(--sp-5);
  position: relative;
}
.deck::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 2.5rem;
  height: 1px;
  background: var(--accent);
}
```

Placement: directly under the `h1` on every page (home, projects, writing, resume).
One deck per page, one line of text, never two. The shorter measure is intentional —
the ragged right edge against the wider body column below is the whole effect.

---

## 7. Component treatment guidance

Guidance, not markup. The builder writes the HTML.

**Nav (identical on all four pages).** Sans, `--fs-nav`, weight 500, `--ink`. A single
row aligned right (or below the wordmark on mobile), separated from the page by a
hairline `border-bottom: 1px solid var(--rule)`. Vertical padding `--sp-5`. Gap between
items `--sp-6`. Not sticky, not blurred, no background change on scroll — it's a
masthead, it scrolls away.
*Active state:* `color: var(--accent)` plus a 1px oxblood underline sitting `0.4em`
below the baseline (use `border-bottom` on the link). Nothing else — no bold, no pill,
no background.

**Footer (identical on all four pages).** Separated by `border-top: 1px solid
var(--rule-strong)` with `--sp-9` above. Sans `--fs-meta` in `--ink-soft`. Email,
LinkedIn, GitHub as plain inline links separated by `--sp-6`. No headings, no icons, no
CTA language. Quiet enough to be nearly missed.

**Project entries.** Not cards — *listings*. Each is separated from the next by a top
hairline and `--sp-7` of padding. Structure: sans `--fs-label` eyebrow (role/context)
→ serif `--fs-h3` title → serif prose summary at `--measure-prose` → **mono `--fs-tag`
row of tech tags** → sans `--fs-meta` row of links. Media (video/image/GIF) sits
full-width of `--width-wide` at
`--radius: 2px` with `--sp-5` above and below and an optional sans `--fs-meta` caption
in `--ink-soft`. No hover lift, no scale transform; hovering the title shifts it to
`--accent`.
*Tech tags:* mono `--fs-tag` in `--ink-soft`, each in a `1px solid var(--rule)` box at
`--radius: 2px` with `--sp-1`/`--sp-3` padding, `--sp-3` gap, wrapping freely. Boxed
rather than bare so the tags read as a discrete data row and not as a caption. No fill,
no accent — the border is the whole treatment.

**Writing pieces.** Deliberately given *more* air than projects, not less — this is how
the site proves the writing is a peer, not a footnote. Same listing structure but drop
the eyebrow, set titles at `--fs-h2`, and use `--sp-8` between entries. An excerpt, if
shown, is serif prose at `--measure-prose`. Genre/date goes in sans `--fs-meta`
*below* the title, never above it.
**No mono anywhere on the writing page** — not even for dates, which are mono elsewhere.
This is the one deliberate exception to the "dates are mono" rule, and it is the point:
mono is engineering texture, and applying it to the writing would quietly re-file the
writing as technical output. Writing dates are sans.

**Embedded resume.** `<object>`/`<iframe>` at `max-width: var(--width-wide)`,
`min-height: 85vh`, framed by `1px solid var(--rule)` on a `--paper-sunk` ground with
`--sp-4` padding. Download link directly above the viewer, right-aligned, sans
`--fs-meta`, oxblood — above the frame, on `--paper`, never on the sunk ground (see §2).
On viewports under 768px, PDF embeds are unreliable — collapse to a prominent download
link plus one sans line stating the format, and hide the embed.

---

## 8. Responsive

Two breakpoints. More would be noise.

| Breakpoint | Applies |
|---|---|
| `< 48rem` (768px) | Mobile / small tablet |
| `≥ 48rem` | Tablet / laptop |
| `≥ 64rem` (1024px) | Desktop |

**How things adapt**
- Type: `--fs-display`, `--fs-h1`, `--fs-h2`, `--fs-deck` are already `clamp()`d and
  scale fluidly — no per-breakpoint overrides needed. `--fs-prose` stays `1.125rem`
  everywhere; 18px serif is right on a phone too.
- Gutters: `--gutter` (1.5rem) below 48rem → `--gutter-lg` (2.5rem) at and above.
- Section rhythm: `--sp-8` below 48rem → `--sp-9` at and above. Hero top space
  `--sp-8` → `--sp-11` at 64rem.
- Nav: below 48rem, wordmark on its own line with links wrapping beneath in a single
  row at `--sp-5` gap. No hamburger — four links fit, and a menu button is machinery
  this site doesn't need.
- Grid: the `auto-fit` project/writing grid collapses to one column naturally below
  ~44rem. No media query required.
- Resume: embed hidden below 48rem (see §7).

---

## 9. Paste-ready custom properties

```css
:root {
  /* Type — families */
  --font-serif: "Newsreader", "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
  --font-sans:  "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono:  "IBM Plex Mono", ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", monospace;

  /* Type — scale */
  --fs-display: clamp(3rem, 7vw, 4.5rem);
  --fs-h1:      clamp(2.125rem, 5vw, 3rem);
  --fs-h2:      clamp(1.5rem, 3vw, 1.75rem);
  --fs-h3:      1.25rem;
  --fs-deck:    clamp(1.25rem, 2.4vw, 1.375rem);
  --fs-prose:   1.125rem;
  --fs-ui:      1rem;
  --fs-nav:     0.9375rem;
  --fs-meta:    0.875rem;
  --fs-tag:     0.75rem;   /* mono — technical metadata only */
  --fs-label:   0.75rem;

  /* Type — line-heights */
  --lh-display: 1.04;
  --lh-h1:      1.12;
  --lh-h2:      1.22;
  --lh-h3:      1.32;
  --lh-deck:    1.5;
  --lh-prose:   1.65;
  --lh-ui:      1.55;
  --lh-meta:    1.45;

  /* Type — tracking */
  --ls-display: -0.022em;
  --ls-h1:      -0.016em;
  --ls-h2:      -0.01em;
  --ls-h3:      -0.005em;
  --ls-tag:      0.01em;
  --ls-label:    0.1em;

  /* Color — warm paper stock. All ratios measured against --paper. */
  --paper:        #F3EDE1;  /* ground                                    */
  --paper-sunk:   #EBE3D2;  /* 1.09:1 vs paper                           */
  --ink:          #16130F;  /* 15.9:1  AAA                               */
  --ink-soft:     #4F483D;  /*  7.74:1 AAA                               */
  --ink-faint:    #6E6659;  /*  4.86:1 large/UI only                     */
  --rule:         #DCD4C2;  /* 1.27:1 vs paper                           */
  --rule-strong:  #C7BCA4;  /* 1.61:1 vs paper                           */
  --accent:       #8C2F23;  /*  7.08:1 AAA — links, deck rule, active nav */
  --accent-hover: #6E2419;  /*  9.34:1                                   */
  --focus:        #8C2F23;

  /* Spacing */
  --sp-1:  0.25rem;  --sp-2:  0.5rem;   --sp-3:  0.75rem;  --sp-4: 1rem;
  --sp-5:  1.5rem;   --sp-6:  2rem;     --sp-7:  3rem;     --sp-8: 4rem;
  --sp-9:  6rem;     --sp-10: 8rem;     --sp-11: 10rem;    --sp-12: 12rem;

  /* Layout */
  --measure-prose: 66ch;
  --width-content: 46rem;
  --width-wide:    68rem;
  --width-full:    78rem;
  --gutter:        1.5rem;
  --gutter-lg:     2.5rem;
  --radius:        2px;
  --hairline:      1px solid var(--rule);
}

@media (min-width: 48rem) {
  :root { --gutter: var(--gutter-lg); }
}

html {
  font-optical-sizing: auto;
  -webkit-text-size-adjust: 100%;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-serif);
  font-size: var(--fs-prose);
  line-height: var(--lh-prose);
  font-variant-numeric: oldstyle-nums;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Sans and mono contexts reset to lining figures */
nav, footer, .meta, .label, .ui, .tag { font-variant-numeric: lining-nums; }

/* Technical metadata — the only place mono appears */
.tag {
  font-family: var(--font-mono);
  font-size: var(--fs-tag);
  font-weight: 400;
  line-height: var(--lh-meta);
  letter-spacing: var(--ls-tag);
  color: var(--ink-soft);
}
```

---

## 10. Non-negotiables checklist

- [ ] No box-shadows, no gradients, no radii above 2px.
- [ ] Exactly one accent color, in exactly three roles (links, deck rule, active nav).
- [ ] Exactly three font families — serif (prose), sans (chrome/UI), mono. Mono is
      scoped to technical metadata only: project tech tags, dates, metrics. Never prose,
      never writing, never titles, never nav or footer.
- [ ] Exactly one Italic Deck per page, one line long.
- [ ] Body prose never exceeds 66ch.
- [ ] Every interactive element has a visible focus ring.
- [ ] Nav and footer byte-identical across all four pages.
- [ ] `--paper` is `#F3EDE1`. If anything renders on `#FFF` or `#FBFAF7`, it's a bug.
