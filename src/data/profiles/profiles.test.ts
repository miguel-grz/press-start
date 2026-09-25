import { describe, expect, it } from 'vitest'
import { consoles } from '../consoles'
import type { ConsoleProfileModule } from './types'

const modules = import.meta.glob<{ default: ConsoleProfileModule }>('./*/index.ts', { eager: true })
const profiles = Object.entries(modules).map(([path, m]) => [path.split('/')[1] ?? '', m.default] as const)

describe.each(profiles)('%s profile', (slug, { profile, copy }) => {
  it('belongs to a catalog console marked as sourced', () => {
    const entry = consoles.find((c) => c.slug === slug)
    expect(entry?.factStatus).toBe('sourced')
    expect(profile.releases[0]?.value.date.slice(0, 4)).toBe(String(entry?.releaseYear))
  })

  it.each(['en', 'es'] as const)('has %s copy for every game, milestone and hotspot', (lang) => {
    const c = copy[lang]
    for (const game of profile.games) expect(c.games[game.id], game.id).toBeTruthy()
    for (const { value } of profile.timeline) expect(c.origin.timeline[value.id], value.id).toBeTruthy()
    for (const spot of profile.hotspots) expect(c.hardware.hotspots[spot.id], spot.id).toBeTruthy()
  })

  it('cites at least one source for every figure', () => {
    const facts = [
      ...profile.releases,
      ...profile.launchPrices,
      profile.unitsSold,
      profile.softwareSold,
      ...Object.values(profile.specs),
      ...profile.timeline,
      ...profile.games,
    ]
    for (const fact of facts) expect(fact.sources.length).toBeGreaterThan(0)
  })

  it('lists exactly five iconic games, chronologically', () => {
    const years = profile.games.map((g) => g.year)
    expect(years).toHaveLength(5)
    expect(years).toEqual([...years].sort((a, b) => a - b))
  })

  it('keeps regional sales consistent with the worldwide total', () => {
    const { total, byRegion } = profile.unitsSold.value
    const sum = Object.values(byRegion).reduce((a, b) => a + b, 0)
    expect(sum).toBeCloseTo(total, 1)
  })
})
