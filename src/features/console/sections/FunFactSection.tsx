import { useState } from 'react'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'

const PUFFS_TO_REVEAL = 3

/** A small interaction: blow into the cartridge a few times before the myth is busted. */
export function FunFactSection({ data }: { data: ConsoleProfileModule }) {
  const { lang } = useI18n()
  const copy = data.copy[lang].funFact
  const [puffs, setPuffs] = useState(0)
  const revealed = puffs >= PUFFS_TO_REVEAL

  return (
    <section aria-labelledby="funfact-title" className="px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 overflow-hidden rounded-[2.5rem] bg-btn-yellow px-6 py-14 sm:px-12 lg:grid-cols-2">
        <div>
          <h2 id="funfact-title" className="font-display text-[clamp(2rem,4vw,3rem)]">
            {copy.question}
          </h2>
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
        <div aria-hidden="true" className="relative mx-auto h-64 w-56">
          {/* An NES Game Pak, connector end down, shaking with each puff. */}
          <div
            key={puffs}
            className={`absolute inset-x-0 top-0 bottom-6 rounded-[0.6rem] bg-[#8f9095] shadow-[0_22px_30px_-18px_rgb(0_0_0/0.5)] ${puffs > 0 && !revealed ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}
          >
            <div className="absolute inset-x-[9%] top-[7%] h-[52%] overflow-hidden rounded-[0.3rem] bg-[#f4f4f1]">
              <div className="h-[30%] bg-btn-red" />
              <div className="mx-[10%] mt-[12%] h-2 w-1/2 rounded-full bg-ink/80" />
              <div className="mx-[10%] mt-2 h-1.5 w-1/3 rounded-full bg-ink/30" />
            </div>
            <div className="absolute inset-x-[14%] top-[64%] flex flex-col gap-1.5">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="h-1 rounded-full bg-black/15" />
              ))}
            </div>
            <div className="absolute inset-x-[10%] -bottom-6 flex h-7 items-start justify-between rounded-b-md bg-[#1f5f3a] px-2 pt-1">
              {Array.from({ length: 14 }, (_, i) => (
                <span
                  key={i}
                  className={`h-4 w-1 rounded-[1px] transition-colors duration-700 ${revealed ? 'bg-[#6f5a3a]' : 'bg-[#d8b25a]'}`}
                />
              ))}
            </div>
          </div>
          {puffs > 0 && !revealed && (
            <span
              key={`puff-${puffs}`}
              className="absolute -bottom-10 left-1/2 size-20 -translate-x-1/2 animate-[puff_0.8s_ease-out_forwards] rounded-full bg-white/80 blur-md"
            />
          )}
        </div>
      </div>
    </section>
  )
}
