# PRESS START

[![CI & deploy](https://github.com/miguel-grz/press-start/actions/workflows/deploy.yml/badge.svg)](https://github.com/miguel-grz/press-start/actions/workflows/deploy.yml)

**Live:** https://miguel-grz.github.io/press-start/

An interactive catalog of video game consoles, designed as the video game aisle of an old electronics store. Every console sits in a lit glass bay with a shelf tag and a pad of pull-tickets. Pull a ticket to open that console's own page, where the story is told through a scroll-driven experience built from the hardware's own rendering tricks and physical rituals.

> Work in progress: the project is built in phases. See the roadmap below.

## Stack

- Vite, React 19, TypeScript (strict), Tailwind CSS v4
- React Router (data router, lazy routes) with build-time HTML shells per route
- three.js through @react-three/fiber and drei: one canvas per console route
- GSAP (ScrollTrigger, Flip) and Lenis, loaded after first paint
- Vitest for the data and i18n contracts, ESLint and Prettier, GitHub Actions to GitHub Pages

## Architecture notes

- **Routing on GitHub Pages.** A small Vite plugin (`scripts/routeShells.ts`) writes a real `index.html` for every console route, with its own title and meta, and copies a `404.html` fallback. Deep links return HTTP 200 with clean URLs, with no hash routing and no redirect hack.
- **Data-driven.** `src/data/consoles.ts` is the typed catalog. Adding a console means adding a data entry, a locale pair, a scene in `src/scenes/<slug>/` and its assets.
- **Code splitting.** Each route is its own chunk, and three.js only downloads on console pages. Each console's scene will be a separate chunk.
- **Scroll to 3D without re-renders.** ScrollTrigger writes progress into a ref that the scene reads in `useFrame`.
- **Accessibility.** Semantic landmarks, a skip link, visible focus, and `prefers-reduced-motion`, which disables smooth scroll and turns shared-element transitions into fades.

## Development

```bash
pnpm install
pnpm dev
```

`pnpm build` type-checks and builds to `dist/`. `pnpm test`, `pnpm lint` and `pnpm format:check` run in CI.

## Roadmap

1. ✅ Scaffold, design system, routing, data model, placeholder catalog, CI deploy
2. NES vertical slice: sourced facts, generated assets, full scroll experience
3. The remaining seven consoles
4. Catalog polish: timeline view, hover previews, intro, sound, full i18n
5. Performance, accessibility and polish pass, final README

## Disclaimer

Unofficial, educational fan project. Not affiliated with or endorsed by any console maker. All trademarks belong to their respective owners. No official logos, box art, screenshots or copyrighted music are used.
