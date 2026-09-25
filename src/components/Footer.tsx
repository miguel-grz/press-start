import { useI18n } from '../i18n/I18nProvider'
import { Wordmark } from './Wordmark'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <Wordmark className="text-ink" />
        <div className="max-w-[60ch] space-y-2 text-xs leading-relaxed text-muted">
          <p>{t.chrome.disclaimer}</p>
          <p>{t.chrome.photoCredit}</p>
        </div>
      </div>
    </footer>
  )
}
