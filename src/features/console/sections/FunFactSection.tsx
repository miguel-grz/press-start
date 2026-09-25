import { useState } from 'react'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'

const PUFFS_TO_REVEAL = 3

/** A small interaction: blow into the cartridge a few times before the myth is busted. */
export function FunFactSection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang].funFact
  const [puffs, setPuffs] = useState(0)
  const revealed = puffs >= PUFFS_TO_REVEAL

  return (
    <section aria-labelledby="funfact-title" className="px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 overflow-hidden rounded-[2.5rem] bg-btn-yellow px-6 py-14 sm:px-12 lg:grid-cols-2">
        <div>
          <h2 id="funfact-title" className="text-sm font-semibold text-ink/70">
            {t.console.sectionTitles.funFact}
          </h2>
          <p className="font-display mt-3 text-[clamp(2rem,4vw,3rem)]">{copy.question}</p>
          <div aria-live="polite">
            {revealed ? (
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink">
                {copy.answer}
                <Cite ids={data.profile.citations.funFact} />
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setPuffs((n) => n + 1)}
                className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-medium text-white transition-transform duration-200 active:scale-95"
              >
                {puffs === 0 ? copy.action : copy.again}
              </button>
            )}
          </div>
        </div>
        <div aria-hidden="true" className="relative mx-auto h-56 w-48">
          {/* A cartridge seen end-on, shaking with each puff. */}
          <div
            key={puffs}
            className={`absolute inset-x-4 top-6 bottom-0 rounded-xl bg-[#8f9095] shadow-[0_18px_30px_-16px_rgb(0_0_0/0.45)] ${puffs > 0 && !revealed ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}
          >
            <div className="absolute inset-x-5 top-5 h-24 rounded-md bg-[#f3f3f0]" />
            <div className="absolute inset-x-5 bottom-3 flex justify-between">
              {Array.from({ length: 9 }, (_, i) => (
                <span key={i} className={`h-5 w-1.5 rounded-sm ${revealed ? 'bg-[#7a5a3a]' : 'bg-[#c9a646]'}`} />
              ))}
            </div>
          </div>
          {puffs > 0 && !revealed && (
            <span
              key={`puff-${puffs}`}
              className="absolute -bottom-6 left-1/2 size-16 -translate-x-1/2 animate-[puff_0.8s_ease-out_forwards] rounded-full bg-white/80 blur-md"
            />
          )}
        </div>
      </div>
    </section>
  )
}
