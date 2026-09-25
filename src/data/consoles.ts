import type { ConsoleEntry } from './types.ts'

/**
 * The catalog, in chronological order. Adding a console = one entry here,
 * one locale pair, one scene folder and its assets.
 * Years are marked `draft` until Phase 2/3 research lands in SOURCES.md.
 */
export const consoles = [
  {
    slug: 'atari-2600',
    name: 'Atari 2600',
    manufacturer: 'atari',
    generation: 2,
    releaseYear: 1977,
    colorway: { body: '#5b3a22', trim: '#161413', accent: '#e8702a' },
    factStatus: 'draft',
  },
  {
    slug: 'nes',
    name: 'Nintendo Entertainment System',
    manufacturer: 'nintendo',
    generation: 3,
    releaseYear: 1983,
    colorway: { body: '#bdbdb8', trim: '#3a3a3c', accent: '#c8102e' },
    factStatus: 'draft',
  },
  {
    slug: 'sega-genesis',
    name: 'Sega Genesis',
    manufacturer: 'sega',
    generation: 4,
    releaseYear: 1988,
    colorway: { body: '#121212', trim: '#34363a', accent: '#d0202a' },
    factStatus: 'draft',
  },
  {
    slug: 'snes',
    name: 'Super Nintendo Entertainment System',
    manufacturer: 'nintendo',
    generation: 4,
    releaseYear: 1990,
    colorway: { body: '#cfcfd4', trim: '#5b4a9b', accent: '#a79fd8' },
    factStatus: 'draft',
  },
  {
    slug: 'playstation',
    name: 'PlayStation',
    manufacturer: 'sony',
    generation: 5,
    releaseYear: 1994,
    colorway: { body: '#c4c3bd', trim: '#2a2a2a', accent: '#3b6fd4' },
    factStatus: 'draft',
  },
  {
    slug: 'nintendo-64',
    name: 'Nintendo 64',
    manufacturer: 'nintendo',
    generation: 5,
    releaseYear: 1996,
    colorway: { body: '#2a2a2e', trim: '#4a4a52', accent: '#1f9a48' },
    factStatus: 'draft',
  },
  {
    slug: 'playstation-2',
    name: 'PlayStation 2',
    manufacturer: 'sony',
    generation: 6,
    releaseYear: 2000,
    colorway: { body: '#121419', trim: '#1d3a8a', accent: '#3aa0ff' },
    factStatus: 'draft',
  },
  {
    slug: 'nintendo-switch',
    name: 'Nintendo Switch',
    manufacturer: 'nintendo',
    generation: 8,
    releaseYear: 2017,
    colorway: { body: '#2d2d30', trim: '#00b8e6', accent: '#ff4554' },
    factStatus: 'draft',
  },
] as const satisfies readonly ConsoleEntry[]

export type ConsoleSlug = (typeof consoles)[number]['slug']

export function getConsole(slug: string | undefined): ConsoleEntry | undefined {
  return consoles.find((c) => c.slug === slug)
}

export function getNeighbors(slug: string): { prev?: ConsoleEntry; next?: ConsoleEntry } {
  const i = consoles.findIndex((c) => c.slug === slug)
  return { prev: consoles[i - 1], next: consoles[i + 1] }
}
