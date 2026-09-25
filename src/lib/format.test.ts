import { describe, expect, it } from 'vitest'
import { formatDate, formatNumber, formatPrice } from './format'

describe('format', () => {
  it('formats partial and full ISO dates', () => {
    expect(formatDate('1978', 'en')).toBe('1978')
    expect(formatDate('1982-10', 'en')).toBe('October 1982')
    expect(formatDate('1983-07-15', 'en')).toBe('July 15, 1983')
    expect(formatDate('1983-07-15', 'es')).toBe('15 de julio de 1983')
  })

  it('formats prices and numbers per language', () => {
    expect(formatPrice(179.99, 'USD', 'en')).toBe('$179.99')
    expect(formatPrice(14800, 'JPY', 'en')).toBe('¥14,800')
    expect(formatNumber(61.91, 'es', 2)).toBe('61,91')
  })
})
