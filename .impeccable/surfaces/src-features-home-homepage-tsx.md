---
version: 1
slug: "src-features-home-homepage-tsx"
primary_target: "src/features/home/HomePage.tsx"
related_targets: ["src/features/console/ConsolePage.tsx"]
---

# Home + console pages — surface brief

Scope: the home route `/` (a preview of the whole site) and the console review pages `/console/:slug`, plus the global chrome (header, footer). This replaces the earlier "Game Aisle" direction, which the user rejected as too heavy and too blue.
Visitor mode: Experience (home also has a light Persuade job: make the visitor want to open a console).
Audience: retro fans first, recruiters second.
Job: understand what PRESS START is within seconds, see the lineup, preview what a console page offers, pick a console, then read its review-style deep dive.
Proof: real public-domain product photos, sourced facts, and original physical-media and game homages. No box art, screenshots or sprites.

## Direction contract

THESIS: Old consoles presented like flagship products: an Apple-grade product showcase for machines released between 1977 and 2017. The page is light, spacious and photo-led, with each console's page tinted by its own colorway. It refuses dark neon retro, pixel fonts, and the card-grid catalog.

OWN-WORLD: The ground stays light (#f5f5f7, white), with ink #1d1d1f and secondary text #6e6e73. The four face-button colors (red, yellow, green, blue) now carry whole blocks: feature tiles, CTA fills and section accents, in Nintendo's official-site spirit, with rounded and playful shapes. Each console gets a saturated tint of its accent that owns its tiles and hero. Type is Geist Variable: display at 600–700 with tight tracking, text at 400. Geist Mono is for specs and data only. Product tiles are large and rounded, with cut-out photos. Motion stays Apple-grade: scroll-scrubbed product reveals (scale, parallax, stagger) with expo ease-out, and springy hover lifts.

STORY: A fan lands and instantly reads this as a crafted museum of consoles. They see all eight in one lineup, preview what a console page holds (review, games, physical media, specs, timeline), pick one, and get a review they can trust and play with.

FIRST VIEWPORT: A translucent sticky header: wordmark with the 4 dots on the left, Consoles and Timeline in the center, EN/ES on the right. A centered large headline with one supporting line and two pill CTAs (Explore the consoles, See the timeline). Below them, a wide stage with the eight console photos in a staggered chronological row on a soft floor shadow, which spreads and parallaxes on scroll.

FORM: canon, the category standard (flagship product showcase) executed at full craft. The user took the standing exit in plain words ("moderno, lindo, limpio, profesional, colores claros, como una web de verdad"). References, re-weighted by the user: Nintendo official site first (color, playfulness), with Apple product-page motion and Awwwards polish. Seed key 517dcffe.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions
- Signature scroll moment per console, re-scoped to the review format and decided per console in Phases 2–3.
