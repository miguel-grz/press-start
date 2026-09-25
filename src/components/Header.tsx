import { Link } from 'react-router'
import { useI18n } from '../i18n/I18nProvider'
import { LangToggle } from './LangToggle'
import { Wordmark } from './Wordmark'

export function Header() {
  const { t } = useI18n()
  const navLink =
    'rounded-full px-3 py-2 text-sm text-ink-2 no-underline transition-colors hover:bg-black/[0.05] hover:text-ink'

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-canvas/75 backdrop-blur-xl backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {t.chrome.skipToContent}
      </a>
      <div className="mx-auto grid h-16 max-w-[80rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-8">
        <Link to="/" viewTransition aria-label={t.chrome.home} className="justify-self-start text-ink no-underline">
          <Wordmark />
        </Link>
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex gap-1">
            <li>
              <Link to={{ pathname: '/', hash: 'consoles' }} className={navLink}>
                {t.chrome.consoles}
              </Link>
            </li>
            <li>
              <Link to={{ pathname: '/', hash: 'timeline' }} className={navLink}>
                {t.chrome.timeline}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="col-start-3 justify-self-end">
          <LangToggle />
        </div>
      </div>
    </header>
  )
}
