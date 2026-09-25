import { Link } from 'react-router'
import { useI18n } from '../i18n/I18nProvider'

export function NotFound() {
  const { t } = useI18n()
  return (
    <main id="main" className="slatwall flex min-h-[70svh] items-center">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6">
        <h1 className="font-sign text-[clamp(4rem,12vw,9rem)] text-white">{t.notFound.heading}</h1>
        <p className="mt-6 max-w-[50ch] text-lg text-fixture-ink">{t.notFound.body}</p>
        <Link
          to="/"
          viewTransition
          className="font-label mt-8 inline-flex min-h-11 items-center bg-dayglo-yellow px-4 text-ink no-underline"
        >
          {t.chrome.backToAisle}
        </Link>
      </div>
    </main>
  )
}
