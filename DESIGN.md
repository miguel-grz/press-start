---
name: PRESS START
description: Old consoles presented like flagship products, on light ground with face-button colour blocks.
colors:
  canvas: '#f5f5f7'
  surface: '#ffffff'
  ink: '#1d1d1f'
  ink-2: '#424245'
  muted: '#5f5f65'
  line: '#d2d2d7'
  link: '#0a5bd3'
  btn-red: '#d9262c'
  btn-yellow: '#f6bf26'
  btn-green: '#2fb56a'
  btn-blue: '#2f6bff'
  soft-red: 'color-mix(in oklab, #d9262c 12%, white)'
  soft-yellow: 'color-mix(in oklab, #f6bf26 22%, white)'
  soft-green: 'color-mix(in oklab, #2fb56a 15%, white)'
  soft-blue: 'color-mix(in oklab, #2f6bff 12%, white)'
typography:
  display:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2.9rem, 7.5vw, 6rem)'
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  display-console:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(3rem, 7vw, 5.5rem)'
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  headline:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)'
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  title:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: '-0.035em'
  lede:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'Geist Variable, ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.43
  data:
    fontFamily: 'Geist Mono Variable, ui-monospace, monospace'
    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '-0.025em'
  data-inline:
    fontFamily: 'Geist Mono Variable, ui-monospace, monospace'
    fontSize: '0.875rem'
    fontWeight: 400
rounded:
  pill: '9999px'
  block: '2.5rem'
  tile: '1.75rem'
  inner: '1rem'
  pixel: '3px'
spacing:
  gutter: '1.25rem'
  gutter-wide: '2rem'
  grid-gap: '1.25rem'
  tile-pad: '1.75rem'
  tile-pad-wide: '2.25rem'
  section: '5rem'
  section-wide: '7rem'
  container: '80rem'
components:
  pill-primary:
    backgroundColor: '{colors.btn-red}'
    textColor: '{colors.surface}'
    rounded: '{rounded.pill}'
    padding: '0 1.5rem'
    height: '3rem'
  pill-secondary:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '0 1.5rem'
    height: '3rem'
  pill-inverse:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '0 1.5rem'
    height: '3rem'
  pill-action:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.surface}'
    rounded: '{rounded.pill}'
    padding: '0 1.5rem'
    height: '3rem'
  chip-filter:
    textColor: '{colors.ink-2}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '0 1rem'
    height: '2.5rem'
  chip-filter-active:
    backgroundColor: '{colors.btn-red}'
    textColor: '{colors.surface}'
    rounded: '{rounded.pill}'
    padding: '0 1rem'
    height: '2.5rem'
  feature-block-red:
    backgroundColor: '{colors.btn-red}'
    textColor: '{colors.surface}'
    rounded: '{rounded.block}'
  feature-block-blue:
    backgroundColor: '{colors.btn-blue}'
    textColor: '{colors.surface}'
    rounded: '{rounded.block}'
  feature-block-yellow:
    backgroundColor: '{colors.btn-yellow}'
    textColor: '{colors.ink}'
    rounded: '{rounded.block}'
  tile-green:
    backgroundColor: '{colors.btn-green}'
    textColor: '{colors.ink}'
    rounded: '{rounded.tile}'
    padding: '{spacing.tile-pad}'
  tile-soft:
    backgroundColor: '{colors.soft-blue}'
    textColor: '{colors.ink}'
    rounded: '{rounded.tile}'
    padding: '{spacing.tile-pad}'
  tile-surface:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.tile}'
    padding: '{spacing.tile-pad}'
  badge-disputed:
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '0.125rem 0.5rem'
---

# Design System: PRESS START

## Overview

**Creative North Star: "The Flagship Showroom"**

Every console, from the 1977 Atari 2600 to the 2017 Switch, is shown the way a maker shows this year's flagship: a cut-out studio photo on a big, light, rounded stage, with generous air and one confident sentence. The ground is a near-white canvas; the colour arrives in whole blocks, never in trims. Nintendo's official site sets the colour temperament (bold rounded fields in the four face-button hues, playful demos); Apple's product pages set the motion (scroll-scrubbed reveals, expo ease-out, soft hover lifts).

Each console also owns a colour. A single custom property, its accent, tints that console's hero, its lineup card, its neighbour cards and its data marks, so a page reads as that machine's page without any per-page stylesheet. The four brand hues sign the site as a whole (wordmark dots, CTA, verdict, legacy, feature blocks); the console accent signs the machine.

Density is low and deliberate: one heading scale per section, figures shown once and drawn as what they mean, sources cited inline. The user rejected an earlier dark "store aisle" direction as too heavy and too blue; the light ground is a confirmed commitment, and the direction refuses dark neon retro, pixel fonts and card-grid catalogs.

**Key Characteristics:**

- Light neutral ground (canvas and white) with ink text; colour lives in large rounded blocks.
- Four face-button hues as the brand signature; a per-console accent as the page's own colour.
- One family, Geist, in two cuts: tight display at weight 650, Mono only for figures, dates and data.
- Big, concentric rounding: blocks, tiles, inner panels, pills.
- Flat at rest; soft lift and scale on hover; expo ease-out everywhere.
- Motion enhances content that is already in the DOM; reduced motion gets the finished state.

## Colors

A cool Apple-grade neutral ground carrying four saturated toy-controller hues and one tint per console.

### Primary

- **Face-Button Red** (btn-red): the brand's lead voice. Primary pill CTA (with a red under-glow), active filter chip, the console page's verdict block, the first legacy tile, the selected hardware hotspot.
- **Face-Button Blue** (btn-blue): the system's functional blue. Focus ring, caret, form accent, the home closing block, the processor spec tile, idle hotspots, selection tint.

### Secondary

- **Face-Button Yellow** (btn-yellow): the fun-fact block, the second legacy tile, the "Disputed" badge fill (at 25%) and the "researching" status dot.
- **Face-Button Green** (btn-green): the third legacy tile and grass in the drawn pixel landscape.

### Tertiary: the per-console colorway

Each console record carries a colorway `{ body, trim, accent }`, exposed to CSS as `--cw-body`, `--cw-trim`, `--cw-accent` on the page root and on every card that stands for a console (lineup tile, footer neighbour, mini-timeline stop, timeline dot). Surfaces never name a console hex; they mix the nearest accent with white in OKLab:

- **Tint** (accent 11% into white): quiet console-owned panels, such as the hardware hotspot detail.
- **Tint Bold** (accent 42%): the colour that owns the block. Console heroes, "researching" heroes, lineup cards, previous/next neighbour cards.
- **Raw accent** (`--cw-accent` at full strength): data marks only. Sales bars, origin timeline rail fill and milestone dots, lit sprite cells, timeline and mini-timeline dots, the 3D Game Pak label band.

### Neutral

- **Showroom Canvas** (canvas): page ground, header glass (75% with blur), footer.
- **Studio White** (surface): data panels (launch, sales), people cards, active media step, secondary pills, active language button.
- **Graphite Ink** (ink): all headings and body on light and tinted ground; the action pill fill; the current mini-timeline stop.
- **Soft Graphite** (ink-2): ledes, supporting copy, navigation links.
- **Quiet Grey** (muted): dates, captions, notes, citation numbers in the source list. Darkened from the planned #6e6e73 so small text holds contrast on canvas and soft fills.
- **Hairline** (line): footer rule and dividers inside data panels.
- **Source Blue** (link): source-list titles only.

### Named Rules

**The Colour Owns The Block Rule.** A brand hue or console tint fills an entire rounded block or tile. Colour is never applied as a side stripe, border accent or gradient text.

**The Fill Sets The Ink Rule.** Text colour is chosen per fill for contrast: white on red and blue; ink on yellow, green, soft fills and every console tint. White on green fails (about 2.7:1) and is never used; white on blue sits at the 4.5:1 floor, so keep text on blue at body size or larger.

**The Colorway Scope Rule.** Console colour comes only from the nearest `--cw-accent` scope, through Tint, Tint Bold, or raw accent for data marks. A new console needs a colorway entry, not new CSS.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui)
**Body Font:** Geist Variable
**Label/Mono Font:** Geist Mono Variable (with ui-monospace), for figures, dates, years and citation markers only

**Character:** A single contemporary grotesque doing all the talking: tight and heavy at display sizes, plain at reading sizes, with Mono as the instrument readout for anything counted or dated.

### Hierarchy

- **Display** (650, clamp(2.9rem, 7.5vw, 6rem), 1.02, -0.035em): the home hero headline, max 14ch, centred.
- **Display Console** (650, clamp(3rem, 7vw, 5.5rem)): the console name in its hero. The console hook sits under it at 1.5rem to 1.875rem, weight 400, max 30ch.
- **Headline** (650, clamp(2.25rem, 5vw, 3.75rem)): every section heading on both pages, via the shared section frame, max 20ch. Block headings (closing, fun fact) scale nearby (clamp up to 4.5rem and 3rem).
- **Title** (650, 1.5rem): tile, game, legacy and hotspot headings; neighbour names at 1.5rem to 1.875rem; lineup names at 1.875rem.
- **Lede** (400, 1.125rem, 1.625): section ledes and tile bodies in ink-2, max 44 to 62ch.
- **Body** (400, 1rem): running copy; `text-wrap: pretty` on paragraphs, `balance` on h1 to h3.
- **Label** (500, 0.875rem): chip and nav text, spec-tile labels, sales captions. Sentence case.
- **Data** (Mono 500, clamp(2.25rem, 4vw, 3.25rem), line-height 1): spec figures, with units in sans at 0.45em. Inline Mono at 0.875rem carries years, dates, prices and region figures.

### Named Rules

**The Heading Stands Alone Rule.** No kicker, eyebrow or small uppercase label above a heading. The heading is the first thing in its block; context goes in the lede below it.

**The Mono Means Data Rule.** Geist Mono appears only where the content is a number, a date, a year or a citation. Never for prose or headings.

**The Wordmark Is The Only Tracked Caps.** Wide-tracked uppercase (0.14em) belongs to the PRESS START wordmark; the EN/ES toggle is the only other caps text, as language codes.

## Layout

A centred 80rem container with 1.25rem gutters (2rem from 640px). Sections breathe at 5rem vertical padding (7rem from 640px). Grids use a 1.25rem gap. Feature bento grids run on 6 columns at desktop: two half-width tiles over three third-width tiles (inside-preview, games, specs). Heroes on console pages split 5fr text / 7fr photo and fill the viewport minus the 4rem header on large screens.

Full-bleed colour appears two ways: console heroes and the media stage run edge to edge; feature blocks (verdict, fun fact, closing) sit inset by 1rem to 2rem inside the container as rounded islands. Horizontal rows (lineup, timeline) scroll with hidden scrollbars and snap, with their leading padding aligned to the container edge. Breakpoints are Tailwind's defaults (640, 768, 1024px); on mobile, bento grids collapse to one column and the header drops its centre nav.

## Elevation & Depth

Flat at rest. Depth comes from the photos themselves (cut-out consoles with a drop shadow or a soft radial floor) and from glass chrome, not from card shadows. Shadows appear as a response to state (hover lift, active step, pressed toggle) or on floating chrome.

### Shadow Vocabulary

- **Hover lift** (`0 28px 48px -24px rgb(0 0 0 / 0.3)`): lineup cards on hover, with a -0.5rem rise and a slight tilt.
- **Floating chrome** (`0 10px 30px -12px rgb(0 0 0 / 0.25)`): the sticky mini-timeline pill.
- **Active panel** (`0 8px 24px -12px rgb(0 0 0 / 0.2)`): the current media step.
- **Hairline lift** (`0 1px 3px rgb(0 0 0 / 0.1–0.12)`): secondary pill, active language button.
- **Red glow** (`0 8px 20px -8px` in btn-red): the primary pill only.
- **Product drop** (`drop-shadow 0 40px 40px rgb(0 0 0 / 0.25)`): the console photo in its hero.

### Named Rules

**The Flat Until Touched Rule.** Tiles and blocks carry no resting shadow. Lift is earned by hover, focus or being the active step.

**The Glass Chrome Rule.** Chrome that floats over content (header, mini-timeline) is translucent with backdrop blur and a 6% black hairline.

## Shapes

Big, soft, concentric rounding. Rounded islands (2.5rem) hold tiles (1.75rem), tiles hold inner panels and list cards (1rem), and every control is a full pill. Small drawn matrices use near-square cells (3px) or dots so the pixel reads as a pixel. The four-dot 2 × 2 grid of the face buttons is the recurring brand mark, at 7px in the wordmark and 1.25rem on the closing block.

## Components

### Buttons (pills)

- **Shape:** full pill, 3rem minimum height, 1.5rem horizontal padding, 0.95rem medium text.
- **Primary:** face-button red with white text and a red under-glow; hover brightens 10%.
- **Secondary:** white with ink text and a hairline lift. **Inverse:** white on a colour block. **Action:** ink with white text, for in-page interactions (fun fact).
- **States:** 300ms expo ease-out on colour and filter; press scales to 0.97; global focus ring is 2px btn-blue at 3px offset.

### Chips

- **Filter chips:** 2.5rem pills, 5% black fill, ink-2 text; hover deepens to 9%. Selected fills btn-red with white text, exposed as `aria-pressed`.
- **Segmented toggle (EN/ES):** a 5% black pill track holding two pills; the pressed one becomes white with a hairline lift.
- **Round icon buttons:** 2.5rem circles, 6% black fill, inline SVG chevrons.

### Cards / Containers

- **Console card** (lineup, footer neighbours): Tint Bold of its own accent, 1.75rem radius, 1.75rem padding, ink text, cut-out photo. Hover rises and scales the photo to 1.04 over 500 to 700ms. It is the shared view-transition element into the console hero.
- **Feature tile:** soft brand fill (red, blue, yellow, green) or white, 1.75rem radius, 1.75rem to 2.25rem padding, title plus ink-2 body, then a live demo pinned to the bottom.
- **Colour block:** full brand hue at 2.5rem radius for the page's loud moments (verdict red, fun fact yellow, closing blue). Verdict points sit in 20% black inner cards.
- **Data panel:** white tile with hairline dividers for launch prices and sales.

### Navigation

- **Header:** sticky 4rem glass bar; wordmark left, Consoles and Timeline centred as pill links (ink-2, 5% black on hover), language toggle right. A skip link appears on focus.
- **Mini-timeline:** a floating glass pill at the bottom of console pages, one stop per console in release order, each with its accent dot and Mono year; the current stop is an ink pill.
- **Footer nav:** previous and next consoles as tinted cards with arrow nudges on hover.

### Spec Tiles (signature)

Six-column bento of figures, each Mono numeral counted up once on scroll (the final value is in the DOM from the start) and paired with a drawing of its meaning: the resolution as a pixel landscape on the console's own 8 × 8 grid, the palette as a dot matrix with on-screen colours lit in ink, sprites as a cell matrix with per-line sprites lit in the console accent. Processor takes a full blue block with white text.

### Citations and "Disputed"

- **Cite:** a superscript Mono marker at 0.6em, in brackets, numbered in reading order across the page and linking to the matching entry in the sources list. It inherits the surrounding text colour, so it works on every fill.
- **Disputed:** a small pill (0.7rem, semibold, ink on yellow at 25%) placed beside a figure whose sources disagree.
- **Sources list:** two columns of Mono `[n]` numbers, Source Blue titles, ink-2 details.

### Motion

- **Easing:** expo ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for entrances, hovers and view transitions; quart in-out reserved for symmetric moves.
- **Scroll:** Lenis smooth scroll on GSAP's ticker; ScrollTrigger reveals (hero stagger and parallax, bars growing from the left, rails filling, lit cells popping in); a pinned 3D Game Pak stage for physical media.
- **Page travel:** the console photo travels from lineup card to hero as a 0.7s view transition.
- **Loops:** small original CSS demos (cartridge insert, disc spin, platform hop, hotspot ping) with abstract shapes only.
- **Reduced motion:** GSAP and Lenis never start; CSS animations and transitions collapse to 0.01ms; the shared-element transition falls back to the root cross-fade; the pinned media stage becomes a static block; the 3D scene renders still.

## Do's and Don'ts

### Do:

- **Do** keep the ground light: canvas #f5f5f7 and white, with ink #1d1d1f.
- **Do** give colour a whole rounded block: 2.5rem islands, 1.75rem tiles.
- **Do** tint console-owned surfaces from `--cw-accent` (Tint Bold for heroes and console cards, Tint for quiet panels, raw accent for data marks).
- **Do** pair white text with red and blue, ink text with yellow, green, soft fills and tints.
- **Do** draw a spec as what it means (grid, matrix, bar) next to its number.
- **Do** cite every figure inline and flag disagreeing sources with the Disputed pill.
- **Do** ship content in its final state in the DOM and let motion be an enhancement that reduced motion skips.

### Don't:

- **Don't** put a kicker, eyebrow or small uppercase label above a heading.
- **Don't** add hero-metric strips; a figure appears once, in the section that explains it.
- **Don't** set white text on btn-green or on any console tint.
- **Don't** hard-code a console's hex in a component; read the colorway scope.
- **Don't** go dark, neon or pixel-font retro; the rejected "store aisle" direction stays rejected.
- **Don't** use box art, screenshots or sprites; illustrations are original abstract shapes.
- **Don't** give tiles a resting shadow.
