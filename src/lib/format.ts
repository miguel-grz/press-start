import type { Lang } from '../i18n/types'

const locale = (lang: Lang) => (lang === 'es' ? 'es-ES' : 'en-US')

/** Formats an ISO date that may be just a year (`1978`) or a year and month (`1982-10`). */
export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!m) return String(y)
  const date = new Date(Date.UTC(y ?? 0, m - 1, d ?? 1))
  return new Intl.DateTimeFormat(locale(lang), {
    year: 'numeric',
    month: 'long',
    ...(d ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  }).format(date)
}

export function formatPrice(amount: number, currency: 'JPY' | 'USD', lang: Lang): string {
  return new Intl.NumberFormat(locale(lang), { style: 'currency', currency }).format(amount)
}

export function formatNumber(value: number, lang: Lang, fractionDigits = 0): string {
  return new Intl.NumberFormat(locale(lang), {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)
}
