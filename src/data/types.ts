export const MANUFACTURERS = ['atari', 'nintendo', 'sega', 'sony'] as const
export type Manufacturer = (typeof MANUFACTURERS)[number]

export const GENERATIONS = [2, 3, 4, 5, 6, 8] as const
export type Generation = (typeof GENERATIONS)[number]

/** Era colors applied to the bay and the console page through CSS custom properties. */
export interface Colorway {
  /** Dominant body color of the hardware. */
  body: string
  /** Secondary trim color. */
  trim: string
  /** Signature accent (a button, a stripe, a light). */
  accent: string
}

/**
 * Catalog-level identity of a console. Kept small on purpose: the catalog loads every entry,
 * while the full profile (specs, sales, games, sources) is loaded per route.
 */
export interface ConsoleEntry {
  slug: string
  name: string
  manufacturer: Manufacturer
  generation: Generation
  /** Year of the first release in any region. */
  releaseYear: number
  colorway: Colorway
  /** Public-domain product photo on Wikimedia Commons, processed by `scripts/fetch-photos.ts`. */
  photo: { commonsFile: string; author: string }
  /** `draft` until every figure on the entry is backed by a source in SOURCES.md. */
  factStatus: 'draft' | 'sourced'
}

export const MANUFACTURER_NAMES: Record<Manufacturer, string> = {
  atari: 'Atari',
  nintendo: 'Nintendo',
  sega: 'Sega',
  sony: 'Sony',
}
