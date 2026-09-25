import { describe, expect, it } from 'vitest'
import { format } from './I18nProvider'
import { en } from './locales/en'
import { es } from './locales/es'

function keys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && v !== null ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  )
}

describe('i18n', () => {
  it('Spanish covers every English key', () => {
    expect(keys(es).sort()).toEqual(keys(en).sort())
  })

  it('keeps the same placeholders in both languages', () => {
    const placeholders = (s: string) => (s.match(/\{\w+\}/g) ?? []).sort()
    const flat = (obj: object): Record<string, string> =>
      Object.fromEntries(
        keys(obj).map((k) => [
          k,
          k.split('.').reduce<unknown>((o, p) => (o as Record<string, unknown>)[p], obj) as string,
        ]),
      )
    const esFlat = flat(es)
    for (const [key, value] of Object.entries(flat(en))) {
      expect(placeholders(esFlat[key] ?? ''), key).toEqual(placeholders(value))
    }
  })

  it('formats placeholders', () => {
    expect(format('{count} of {total}', { count: 3, total: 8 })).toBe('3 of 8')
  })
})
