# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, Tailwind CSS, React Router (BrowserRouter with build-time per-route HTML shells), three.js via @react-three/fiber + drei, GSAP (ScrollTrigger, Flip) + Lenis. Static deploy to GitHub Pages via GitHub Actions at `miguel-grz.github.io/press-start/`. Chosen by the user in the project brief.

## Users

Primary: retro and video game enthusiasts who want to explore consoles in depth. They come out of curiosity or nostalgia, stay to read, and will notice if a date, a spec or a sales figure is wrong.
Secondary: recruiters and tech leads looking at the project as a front-end portfolio piece. They visit briefly, mostly on desktop, and judge craft, performance and code quality.

## Product Purpose

PRESS START is an interactive catalog of video game consoles. The home page is the catalog. Each console opens its own page with its history (origin, specs, launch and sales, iconic games, legacy), told through a scroll-driven experience unique to that machine. Success means a fan finishes a console page, remembers how it felt, trusts its facts, and wants to open the next one.

## Positioning

Each console is told in its own hardware's language: its signature rendering trick, its physical ritual (inserting a cartridge, spinning a disc, detaching Joy-Cons) and its palette are the storytelling medium, not decoration. The facts are sourced and flagged when uncertain.

## Operating Context

- Home is a preview of the whole site, not a catalog grid. A hero introduces the project, a lineup lets you pick a console, previews show what every console page offers (review, iconic games, physical formats, specs), and a timeline preview spans 1977 → today.
- Console pages read like an interactive review. They cover the verdict and key facts, the origin story, the hardware (photo with hotspots and animated specs), physical media (how the cartridges or discs looked and loaded), 5 iconic games with small original animations, launch and sales, legacy, and a fun fact. Each page has its own signature scroll moment.
- Bilingual: English primary, Spanish full translation, toggle persisted.
- Desktop and mobile. Mobile gets a lighter version of every effect.

## Capabilities and Constraints

- v1 consoles (8): Atari 2600, NES, Sega Genesis, SNES, PlayStation, Nintendo 64, PlayStation 2, Nintendo Switch. Phase 2 later: Game Boy, Dreamcast, Xbox, Wii, PS5.
- Data-driven: adding a console = one data entry + one scene component + assets.
- Console imagery is real public-domain product photography (Evan-Amos collection on Wikimedia Commons), optimized to AVIF/WebP. Physical media (cartridges, discs, cases) and signature effects are built in code (R3F, SVG, shaders).
- Higgsfield is reserved for ambient or decorative assets where generation clearly beats code. Credits are limited, so each batch is quoted first and logged in ASSETS.md.
- Performance: Lighthouse Performance ≥ 85 on desktop, 60fps on a mid-range laptop, no WebGL canvas per catalog card, and each console's assets load only on its route.
- Sound is optional, off by default, and uses only original or royalty-free audio.

## Brand Commitments

- Name: PRESS START.
- Unofficial, educational fan project. The footer disclaimer says trademarks belong to their owners.
- No official logos as standalone artwork, no box art, no screenshots, no copied characters or sprites, and no copyrighted music. Game titles appear as text only. Physical game media are recreated with text-only labels, and game animations are original homages to each game's mechanic.
- Look and feel (user's words): modern, beautiful, clean, professional, light colors, "like a real website". The quality bar is Apple product pages, Nintendo and PlayStation official product pages, and Awwwards-level studio sites. This is a standing preference and it replaced the earlier "Game Aisle" store-shelf direction.

## Evidence on Hand

- Public-domain console photos by Evan-Amos (Wikimedia Commons) exist for all 8 v1 consoles, at 4–5K resolution on white backgrounds.
- Every fact must come from a web source logged in SOURCES.md. Nothing may be invented. Uncertain figures are flagged in the data and in the UI.

## Product Principles

1. The hardware tells its own story: every console page is built from its machine's native rendering and physical rituals.
2. Facts are earned: every figure is sourced, and uncertainty is shown rather than hidden.
3. Depth for fans, speed for everyone: rich exploration, but instant loads and no scroll traps.
4. One system, eight voices: a shared design system with each console's own palette and type feel.

## Accessibility & Inclusion

- Lighthouse Accessibility ≥ 95, keyboard-navigable catalog and pages, semantic HTML, alt text, and visible focus states.
- `prefers-reduced-motion` gets a graceful static fallback, and transitions become fades.
- No scroll-jacking that traps users. Pinned sections stay skippable.
