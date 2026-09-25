import { useI18n } from '../i18n/I18nProvider'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t-2 border-fixture-groove bg-fixture-deep">
      <p className="mx-auto max-w-[90rem] px-4 py-8 text-sm leading-relaxed text-fixture-ink/80 sm:px-6">
        {t.chrome.disclaimer}
      </p>
    </footer>
  )
}
