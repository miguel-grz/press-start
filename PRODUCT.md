# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, Tailwind CSS, React Router (BrowserRouter with build-time per-route HTML shells), three.js via @react-three/fiber + drei, GSAP (ScrollTrigger, Flip) + Lenis. Static deploy to GitHub Pages via GitHub Actions at `miguel-grz.github.io/press-start/`. Chosen by the user in the project brief.

## Users

Primary: retro and video-game enthusiasts who want to explore consoles in depth. They come out of curiosity or nostalgia, stay to read, and will notice if a date, a spec or a sales figure is wrong.
Secondary: recruiters and tech leads looking at the project as a front-end portfolio piece. They visit briefly, mostly on desktop, and judge craft, performance and code quality.

## Product Purpose

PRESS START is an interactive catalog of video game consoles. The home page is the catalog. Each console opens its own page with its history (origin, specs, launch and sales, iconic games, legacy), told through a scroll-driven experience unique to that machine. Success means a fan finishes a console page, remembers how it felt, trusts its facts, and wants to open the next one.

## Positioning

Each console is told in its own hardware's language: its signature rendering trick, its physical ritual (inserting a cartridge, spinning a disc, detaching Joy-Cons) and its palette are the storytelling medium, not decoration. The facts are sourced and flagged when uncertain.

## Operating Context

- Browsing the catalog: filter by manufacturer or generation, search by name, and switch to a timeline view (1972 → today).
- Reading a console page: vertical scroll through 8 fixed sections: hero, origin, specs, launch & sales, 5 iconic games, legacy, fun fact, prev/next navigation.
- Bilingual: English primary, Spanish full translation, toggle persisted.
- Desktop and mobile. Mobile gets a lighter version of every effect.

## Capabilities and Constraints

- v1 consoles (8): Atari 2600, NES, Sega Genesis, SNES, PlayStation, Nintendo 64, PlayStation 2, Nintendo Switch. Phase 2 later: Game Boy, Dreamcast, Xbox, Wii, PS5.
- Data-driven: adding a console = one data entry + one scene component + assets.
- Console 3D models are procedural, stylized low-poly R3F builds with articulated parts, not trademark-exact replicas.
- 2D assets (card renders, textures, backdrops, parallax layers) are generated with Higgsfield. Credits are limited, so each batch is quoted before it runs and every prompt is logged in ASSETS.md.
- Performance: Lighthouse Performance ≥ 85 on desktop, 60fps on a mid-range laptop, no WebGL canvas per catalog card, and each console's assets load only on its route.
- Sound is optional, off by default, and uses only original or royalty-free audio.

## Brand Commitments

- Name: PRESS START.
- Unofficial, educational fan project. The footer disclaimer says trademarks belong to their owners.
- No official logos, box art, screenshots, or copyrighted music. Game titles appear as text only.

## Evidence on Hand

- No assets exist yet. Every fact must come from a web source logged in SOURCES.md. Nothing may be invented. Uncertain figures are flagged in the data and in the UI.

## Product Principles

1. The hardware tells its own story: every console page is built from its machine's native rendering and physical rituals.
2. Facts are earned: every figure is sourced, and uncertainty is shown rather than hidden.
3. Depth for fans, speed for everyone: rich exploration, but instant loads and no scroll traps.
4. One system, eight voices: a shared design system with each console's own palette and type feel.

## Accessibility & Inclusion

- Lighthouse Accessibility ≥ 95, keyboard-navigable catalog and pages, semantic HTML, alt text, and visible focus states.
- `prefers-reduced-motion` gets a graceful static fallback, and transitions become fades.
- No scroll-jacking that traps users. Pinned sections stay skippable.
