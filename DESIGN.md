---
name: Rhea
description: Precision-engineering datasheet/blueprint world for a stem-cell centrifuge procurement site.
colors:
  paper: "#F5F7F7"
  paper-raised: "#FFFFFF"
  ink: "#10151A"
  ink-soft: "#4A5560"
  ink-faint: "#5B6670"
  line: "#D8DEDD"
  line-strong: "#B7C1C0"
  accent: "#0B7285"
  accent-figure: "#0B7285"
  accent-ink: "#063E46"
  accent-soft: "#E4F1F1"
  navy: "#0B1220"
  navy-ink: "#E8EDF0"
  navy-ink-soft: "#9FB0BA"
  navy-accent: "#5FC9C9"
  navy-line: "#26313F"
  error: "#B3261E"
typography:
  display:
    fontFamily: "Space Grotesk, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(1.6rem, 1.3rem + 1.4vw, 2.3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, Pretendard Variable, Pretendard, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontFeature: "tabular-nums"
  lede:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
  ui:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
  small:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
  caption:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.82rem"
    fontFeature: "tabular-nums"
  tag:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, Malgun Gothic, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
rounded:
  sm: "3px"
  md: "6px"
  full: "999px"
spacing:
  section-y: "clamp(3.5rem, 7vw, 6rem)"
  hero-y: "clamp(2.5rem, 6vw, 5.5rem)"
  container-max: "1180px"
  container-pad: "clamp(1.25rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.5rem"
---

# Design System: Rhea

## Overview

**Creative North Star: "The Engineering Datasheet"**

Rhea's website is built to read like the spec sheet a procurement buyer already trusts, not a consumer SaaS landing page. The visual language borrows directly from engineering drawings: hairline rules, dimension/leader lines with small perpendicular ticks, tabular-numeral spec data, and a paper-white ground with near-black ink. Corners are sharp-to-slightly-eased (3–6px), never softly rounded in the consumer sense. The one accent color (signal teal) is used sparingly and functionally — for solid CTA fills and for decorative strokes/focus rings — never as decoration for its own sake.

This is explicitly not the generic hero-photo-plus-three-equal-cards template. The hero pairs a one-line mechanism statement with an animated inline SVG rotor blueprint rather than a stock photo or a big single metric. Every recurring visual device (dimension ticks, leader lines, hairline dividers, mono-set data) is drawn from the same drafting-table vocabulary, so the "설계 원칙" spine, the hero rotor diagram, and the workflow connector line all read as one system rather than three unrelated components.

Because real spec numbers and certifications have not arrived yet, the system also carries an honesty convention: unresolved data is rendered in an explicit `.pending-value` style (italic, faint ink) rather than a fabricated number — the placeholder state is a first-class part of the visual system, not a bug to hide.

**Key Characteristics:**
- Paper-white ground, near-black ink, one signal-teal accent — no secondary/tertiary hues.
- Hairline (1px) rules as the primary structural device; no drop shadows.
- Dimension-line / leader-line motif (ticks + connector lines) recurring across hero, principles, and workflow.
- IBM Plex Mono with tabular-nums for all spec/dimension data; Space Grotesk + Pretendard Variable for headings; Pretendard Variable for body.
- Sharp, minimal corners (3–6px), never consumer-soft rounding.

## Colors

The palette is deliberately restrained: two neutrals (paper/ink), one functional accent, and a distinct navy sub-palette reserved for the certifications section only.

### Primary
- **Signal Teal** (`--color-accent`, #0B7285): solid-fill role only — primary CTA buttons, active tag/pill backgrounds. Kept identical between light and dark mode because it must stay dark enough to carry white button text; it is never brightened for dark mode even though other accent tokens are.
- **Signal Teal Figure** (`--color-accent-figure`, #0B7285 light / #4FB8C4 dark): the decorative counterpart to Signal Teal — rotor inner ring, spine-tick dots, focus-visible outlines, wordmark mark. Free to brighten in dark mode for visibility since it never sits under white text.

### Neutral
- **Paper** (`--color-paper`, #F5F7F7 light / #0E1418 dark): page ground.
- **Paper Raised** (`--color-paper-raised`, #FFFFFF light / #141C21 dark): the spec table section, cert-panel-adjacent cards, contact form panel — anything reading as a "raised sheet" over the paper ground.
- **Ink** (`--color-ink`, #10151A light / #EDF2F2 dark): headings, primary text, rotor ring strokes.
- **Ink Soft** (`--color-ink-soft`, #4A5560): body copy, nav links.
- **Ink Faint** (`--color-ink-faint`, #5B6670 light / #7C8790 dark): footnotes, pending-value text, captions. (Corrected post-launch from an initial #7C8790 in light mode, which measured 3.4–3.7:1 against paper/paper-raised and failed the 4.5:1 floor — this token backs every "사양 확정 예정" honesty marker, so under-contrast here was a trust-load-bearing defect, not cosmetic. Caught by the finish-review pass.)
- **Line** / **Line Strong** (`--color-line` #D8DEDD, `--color-line-strong` #B7C1C0): hairline dividers, spine line, dimension circles, input borders.
- **Accent Ink** (`--color-accent-ink`, #063E46 light / #CFF0F1 dark): text set on `--color-accent-soft`; also the dim-line stroke color.
- **Accent Soft** (`--color-accent-soft`, #E4F1F1 light / #17383D dark): background for the workflow step's active tag pill.
- **Navy** sub-palette (`--color-navy` #0B1220, `--color-navy-ink` #E8EDF0, `--color-navy-ink-soft` #9FB0BA, `--color-navy-accent` #5FC9C9, `--color-navy-line` #26313F): scoped entirely to the certifications section, which inverts to a dark panel to visually separate "unconfirmed compliance" content from the rest of the paper-toned page.
- **Error** (`--color-error`, #B3261E): form validation only.

### Named Rules
**The Solid-Fill Accent Rule.** `--color-accent` is the only token allowed as a solid background carrying white text (buttons, filled tags). It never shifts between light/dark mode, precisely because dark-mode brightening would break white-text contrast. `--color-accent-figure` is the token for everything decorative (strokes, rings, focus outlines) and is the one that gets to brighten in dark mode.

**The One Accent Rule.** Signal Teal is the only chromatic accent on the paper surface. The navy palette is not a second brand accent — it is confined to the certifications section as a distinct "pending compliance" zone and must not leak into other sections.

## Typography

**Display Font:** Space Grotesk (with Pretendard Variable as Korean fallback, since Space Grotesk has no Hangul glyphs)
**Body Font:** Pretendard Variable (with system sans fallback)
**Label/Mono Font:** IBM Plex Mono, set with tabular-nums wherever measurement or spec data appears

**Character:** A geometric, slightly technical display face paired with a clean variable body face and a monospace data face — the same three-role split an engineering datasheet uses for title block, body notes, and dimension callouts.

### Hierarchy
- **Display / H1** (700, `clamp(2.1rem, 1.5rem + 2.6vw, 3.6rem)`, 1.15, -0.02em): hero heading only.
- **Headline / H2** (600, `clamp(1.6rem, 1.3rem + 1.4vw, 2.3rem)`, 1.15, -0.02em): section headings.
- **Title / H3** (600, 1.15rem, 1.15): spine-item and workflow-step headings.
- **Body** (400, 16px base, 1.55, max-width 68ch via `--measure`): paragraph copy.
- **Mono/Label** (400–500, spec-table 0.94rem / rotor caption 0.82rem / workflow tag 0.72rem, tabular-nums): spec table values, rotor radius caption, dimension labels, workflow step tag pill.
- **Supporting text sizes** (Pretendard Variable, 400 unless noted): `lede` 1.05rem (section intros), `ui` 0.94rem (nav links, secondary buttons, table/workflow body text — also where 0.95/0.96rem literals were consolidated to keep the ramp to one step here), `small` 0.88rem (footnotes, form labels/status, footer text — 0.86rem was folded in here), `caption` 0.82rem (rotor caption, footer meta — set in mono, see above), `tag` 0.72rem/600 (the workflow step's one product-tag pill only). Base body and form-field text sit at 16px/1rem; nothing in the shipped CSS should introduce a new literal size outside this ramp without adding it here first.

### Named Rules
**The Tabular-Nums Rule.** Any element carrying measured or numeric data (`.spec-table`, `.pending-value`, `.rotor-caption`) is set in IBM Plex Mono with `font-variant-numeric: tabular-nums`, whether the value is a real number or the honest placeholder "사양 확정 예정." The mono treatment marks "this is spec data," independent of whether the data itself has arrived.

## Layout

Single max-width container model: `max-width: 1180px`, horizontal padding `clamp(1.25rem, 4vw, 3rem)` (`.section-inner`, `.hero-inner`, `.header-inner`). Vertical section rhythm is a single clamp step, `clamp(3.5rem, 7vw, 6rem)`, reused for principles/specs/workflow/certifications/contact; the hero uses a slightly tighter top/bottom clamp for its two-column layout.

The hero is two-column at ≥940px (`1.05fr 0.95fr`, copy left / rotor figure right) and stacks single-column below that — the copy-first, diagram-second order is preserved in both. The workflow diagram is a 4-column grid at ≥780px with a shared hairline connector (`::before`) running above the row; below 780px it stacks to one column and the connector line is dropped rather than reflowed. The contact section is a `0.9fr 1.1fr` two-column grid at ≥900px (copy left, form right), single column below. Navigation collapses to a hamburger-triggered `.mobile-nav` panel below 860px.

## Elevation & Depth

Flat by design: no `box-shadow` is used anywhere in the stylesheet. Depth and grouping are conveyed entirely through hairline 1px borders (`--color-line` / `--color-line-strong`) and background-tone shifts (`--color-paper` vs `--color-paper-raised`), consistent with the blueprint/datasheet world where sheets are distinguished by outline and tone, not cast shadow. The sticky header uses a translucent `color-mix` background with `backdrop-filter: blur` for legibility over scrolled content — the one non-flat surface treatment, and it is functional (readability) rather than decorative.

### Named Rules
**The No-Shadow Rule.** Structure is drawn, not lit. Every visual boundary in this system is a hairline rule or a background-tone step; box-shadow is reserved for none of the current components and should not be introduced to fake elevation.

## Shapes

Corners are sharp and minimal: `--radius-sm` (3px) on buttons, inputs, the skip-link and nav-toggle; `--radius-md` (6px) on larger panel containers (cert-panel, contact-form). Nothing uses fully rounded/pill corners except two small functional exceptions — the scrollbar thumb and the workflow/spine dot markers and the workflow-tag pill — which are circles/pills by nature (a status dot, a tag), not a soft-rounding trend applied to boxes. Dividers are always 1px hairlines, never thick rules. No drop-shadow, no gradient fills — the only non-flat fill is the `color-mix` translucency on the sticky header.

## Components

### Buttons
- **Shape:** sharp-cornered (`--radius-sm`, 3px), padding `0.85rem 1.5rem`.
- **Primary (`.btn-accent`):** solid `--color-accent` fill, white text. Hover brightens via `filter: brightness(1.15)` rather than swapping to a second token — this keeps the hover state correct in both light and dark mode without needing its own contrast-checked color. Active state scales to 0.98.
- **Ghost (`.btn-ghost`):** transparent background, `--color-line-strong` border, `--color-ink` text; hover darkens the border to `--color-ink`. Used for the secondary hero CTA ("개요 살펴보기") and never carries the accent color.
- **Disabled:** 0.5 opacity, no transform.

### Spec Table (signature component)
Plain two-column definition table (`th` = label in body font, `td` = value in IBM Plex Mono, tabular-nums), hairline row dividers, no zebra striping, no rounded cells. Unresolved values render as `.pending-value` (italic, `--color-ink-faint`) reading "사양 확정 예정" instead of an invented number — this is a durable convention, not a temporary placeholder style: any future real spec still uses the same table shape, and any future unconfirmed spec still uses `.pending-value` rather than a fabricated figure.

### Spine List / Leader-Line Motif (signature component)
The "설계 원칙" list is a vertical hairline spine (`.spine-line`) with small circular ticks (`.spine-tick`, filled with `--color-accent-figure`) marking each item, echoing the hero rotor's dimension line and the workflow diagram's connector line — one leader-line grammar reused across three surfaces. See Layout/Motion for the reveal behavior.

### Rotor Diagram (signature component)
Inline authored SVG: a static baseplate + dashed dimension circle, a rotating group (outer ring in `--color-ink`, inner ring in `--color-accent-figure`, six slot circles, a filled hub) that spins continuously via CSS animation, and one dimension line with perpendicular ticks in `--color-accent-ink`. No shipping raster imagery is used for this or any icon in the current build — every graphic is inline SVG.

### Workflow Diagram
Ordered list of 4 steps as a horizontal grid (≥780px) with a shared hairline connector line above the row; each step has a circular outline dot (filled solid teal for the active/"Rhea" step) and, on the active step only, a small mono-set pill tag (`.workflow-tag`) naming the product. This tag is a status/product marker tied to one specific step, not a decorative kicker pattern to be reused above arbitrary headings elsewhere.

### Certifications Panel
The only section that inverts to the navy sub-palette, visually setting "pending compliance information" apart from the rest of the paper-toned page. A single hairline-bordered panel (`--radius-md`) states that certification status is unconfirmed, with no certification names or badges invented in the interim.

### Contact Form
Hairline-bordered raised panel (`--radius-md`), stacked label/input rows, `--radius-sm` inputs with `--color-line-strong` borders. Focus shifts the border to `--color-accent-figure`. Validation errors only appear via `:user-invalid` (post-interaction) or after a submit attempt sets `.was-validated` — an untouched required field is never shown as an error on load.

### Motion
- **Rotor rotation:** continuous `linear` 22s rotation (`--dur-slow` family) on the rotor's spinning group; disabled entirely under `prefers-reduced-motion: reduce`.
- **Scroll-reveal-as-progressive-enhancement.** Every reveal target (`.spine`, `[data-reveal-root]` workflow list, header) is fully visible by default in CSS with no opacity/transform hiding. JavaScript only adds a `.js-reveal` class to a root once it has confirmed `IntersectionObserver` exists and it is actually observing that element; only `.js-reveal` roots get the hide-then-`.is-visible`-reveal transition. **This is a durable convention future edits must preserve: a script failure, block, or missing browser API must never hide real content — content hidden by JS mistake is a defect, not an acceptable degrade.** `prefers-reduced-motion: reduce` also force-clears all reveal transforms/opacity to visible.

## Do's and Don'ts

### Do:
- **Do** keep `--color-accent` reserved for solid fills carrying white text, and use `--color-accent-figure` for every decorative stroke/icon/focus-ring instance instead.
- **Do** render any unresolved spec, certification, or contact value as `.pending-value` (italic, `--color-ink-faint`, "확정 예정" language) rather than a placeholder number — this is a content-honesty convention, not a stopgap to remove later.
- **Do** keep new reveal-animated sections visible-by-default in CSS and gate the hide/reveal transition behind a JS-added `.js-reveal` class, exactly as `.spine` and `[data-reveal-root]` do.
- **Do** set any measured or dimensional value in IBM Plex Mono with tabular-nums, whether the value is real or pending.
- **Do** draw structure with 1px hairline rules and background-tone steps (paper vs. paper-raised); never introduce box-shadow to imply elevation.

### Don't:
- **Don't** brighten `--color-accent` for dark mode — it backs white button text and a brighter teal fails contrast; brighten `--color-accent-figure` instead.
- **Don't** apply soft/large corner radii (the consumer 12px+ style) anywhere; the system caps at `--radius-md` (6px).
- **Don't** invent spec numbers, certification names, or badges before the real spec sheet/certificates arrive — the certifications panel and spec table must keep stating "확정 예정" honestly.
- **Don't** promote the workflow step's single product tag pill into a general kicker/eyebrow pattern above headings elsewhere in the system — it exists once, tied to the active workflow step, not as a reusable heading decoration.
- **Don't** add drop shadows, gradients, glyph icon fonts, or system display faces; every icon in this build is inline authored SVG and headings use Space Grotesk/Pretendard, not a system font stack.
