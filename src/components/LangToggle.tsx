import { useI18n } from '../i18n/I18nProvider'
import type { Lang } from '../i18n/types'

const LANGS: readonly Lang[] = ['en', 'es']

export function LangToggle() {
  const { lang, setLang, t } = useI18n()
  return (
    <div role="group" aria-label={t.chrome.language} className="flex">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className="font-label min-h-11 min-w-11 px-2 text-sm text-fixture-ink/70 transition-colors hover:text-white aria-pressed:bg-ticket aria-pressed:text-ink"
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
