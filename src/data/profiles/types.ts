import type { SourceId } from '../sources'

/** A figure plus the sources that back it. `uncertain` figures are shown with a visible flag. */
export interface Fact<T> {
  value: T
  sources: readonly SourceId[]
  uncertain?: boolean
}

export type Region = 'JP' | 'NA' | 'EU'
export type SalesRegion = 'japan' | 'americas' | 'other'

export interface Release {
  region: Region
  /** ISO date, or just the year when only the year is reliable. */
  date: string
  /** Name the console was sold under in that region. */
  name: string
}

export interface Price {
  region: Region
  amount: number
  currency: 'JPY' | 'USD'
}

export type GameMechanic = 'platformer' | 'adventure' | 'exploration' | 'rpg' | 'flight'

export interface Game {
  id: string
  /** Official title, shown as text only. */
  title: string
  /** Year of first release in any region. */
  year: number
  mechanic: GameMechanic
  sources: readonly SourceId[]
}

export interface Hotspot {
  id: string
  /** Position on the console photo, in % of its width and height. */
  x: number
  y: number
}

/** Language-neutral facts about a console. Numbers live here; prose lives in the copy. */
export interface ConsoleProfile {
  releases: readonly Fact<Release>[]
  launchPrices: readonly Fact<Price>[]
  /** Lifetime hardware units, in millions. */
  unitsSold: Fact<{ total: number; byRegion: Record<SalesRegion, number> }>
  /** Lifetime software units, in millions. */
  softwareSold: Fact<number>
  specs: {
    cpu: Fact<{ name: string; mhz: number }>
    ram: Fact<{ kb: number }>
    vram: Fact<{ kb: number }>
    resolution: Fact<{ width: number; height: number }>
    colors: Fact<{ onScreen: number; palette: number }>
    sprites: Fact<{ total: number; perLine: number }>
    media: Fact<{ name: string; pins: number }>
  }
  /** Key dates for the origin timeline; each id has matching copy. */
  timeline: readonly Fact<{ id: string; date: string }>[]
  games: readonly Game[]
  hotspots: readonly Hotspot[]
  /** Sources for prose claims in the copy, keyed by the copy block they back. */
  citations: Partial<Record<CitedBlock, readonly SourceId[]>>
}

export type CitedBlock =
  'origin' | 'hardware' | 'media' | 'verdict0' | 'verdict1' | 'verdict2' | 'legacy0' | 'legacy1' | 'legacy2' | 'funFact'

export interface ProfileCopy {
  hook: string
  alsoKnownAs?: string
  verdict: { summary: string; points: readonly string[] }
  origin: { intro: string; timeline: Record<string, string>; people: readonly { name: string; role: string }[] }
  hardware: { intro: string; hotspots: Record<string, { title: string; body: string }> }
  media: { intro: string; steps: readonly { title: string; body: string }[]; note: string }
  games: Record<string, string>
  launch: { intro: string; priceNote?: string }
  legacy: readonly [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }]
  funFact: { question: string; action: string; again: string; answer: string }
}

export interface ConsoleProfileModule {
  profile: ConsoleProfile
  copy: Record<'en' | 'es', ProfileCopy>
}
