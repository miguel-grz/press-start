import { Link, useLocation } from 'react-router'
import { useI18n } from '../i18n/I18nProvider'
import { LangToggle } from './LangToggle'

/** Thin aisle strip shared by every route; the catalog adds its own end-cap sign below it. */
export function Header() {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const onCatalog = pathname === '/'

  return (
    <header className="relative z-20 border-b-2 border-fixture-groove bg-fixture-deep">
      <a
        href="#main"
        className="font-label sr-only bg-dayglo-yellow px-3 py-2 text-ink focus:not-sr-only focus:absolute focus:left-2 focus:top-2"
      >
        {t.chrome.skipToContent}
      </a>
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6">
        {onCatalog ? (
          <span className="font-label text-sm text-fixture-ink/80">{t.catalog.aisle}</span>
        ) : (
          <Link
            to="/"
            viewTransition
            className="font-label group flex min-h-11 items-center gap-2 text-sm text-white no-underline"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-4 transition-transform group-hover:-translate-x-1"
            >
              <path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            {t.chrome.backToAisle}
          </Link>
        )}
        {!onCatalog && (
          <Link to="/" viewTransition className="font-sign text-2xl text-white no-underline">
            Press Start
          </Link>
        )}
        <LangToggle />
      </div>
    </header>
  )
}
