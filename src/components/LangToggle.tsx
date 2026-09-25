import { useI18n } from '../i18n/I18nProvider'
import type { Lang } from '../i18n/types'

const LANGS: readonly Lang[] = ['en', 'es']

export function LangToggle() {
  const { lang, setLang, t } = useI18n()
  return (
    <div role="group" aria-label={t.chrome.language} className="flex rounded-full bg-black/[0.05] p-1">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className="min-h-9 min-w-11 rounded-full px-2.5 text-xs font-semibold tracking-wider text-muted transition-colors duration-300 hover:text-ink aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-[0_1px_3px_rgb(0_0_0/0.12)]"
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
