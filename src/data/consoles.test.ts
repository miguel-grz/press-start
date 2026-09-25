import { describe, expect, it } from 'vitest'
import { consoles } from './consoles'
import { GENERATIONS, MANUFACTURERS } from './types'

describe('console catalog data', () => {
  it('has unique, URL-safe slugs', () => {
    const slugs = consoles.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('is ordered chronologically', () => {
    const years = consoles.map((c) => c.releaseYear)
    expect(years).toEqual([...years].sort((a, b) => a - b))
  })

  it('uses known manufacturers and generations', () => {
    for (const c of consoles) {
      expect(MANUFACTURERS).toContain(c.manufacturer)
      expect(GENERATIONS).toContain(c.generation)
    }
  })

  it('defines colorways as hex colors', () => {
    for (const c of consoles) {
      for (const value of Object.values(c.colorway)) expect(value).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })
})
