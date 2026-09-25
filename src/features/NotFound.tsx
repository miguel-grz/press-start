import { PillLink } from '../components/PillLink'
import { useI18n } from '../i18n/I18nProvider'

export function NotFound() {
  const { t } = useI18n()
  return (
    <main id="main" className="flex min-h-[70svh] items-center justify-center px-5 text-center">
      <div>
        <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)]">{t.notFound.heading}</h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg text-ink-2">{t.notFound.body}</p>
        <div className="mt-8">
          <PillLink to="/">{t.notFound.back}</PillLink>
        </div>
      </div>
    </main>
  )
}
