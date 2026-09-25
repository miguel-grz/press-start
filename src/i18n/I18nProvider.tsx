import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './locales/en'
import { es } from './locales/es'
import type { Dictionary, Lang } from './types'

const dictionaries: Record<Lang, Dictionary> = { en, es }
const STORAGE_KEY = 'press-start:lang'

interface I18nValue {
  lang: Lang
  t: Dictionary
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nValue | null>(null)

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode); the choice still applies for this visit.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang])
  return <I18nContext value={value}>{children}</I18nContext>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}

/** Replaces `{name}` placeholders in a dictionary string. */
export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(vars[key] ?? match))
}
