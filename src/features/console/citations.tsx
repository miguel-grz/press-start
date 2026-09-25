import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { ConsoleProfile } from '../../data/profiles/types'
import { sources, type SourceId } from '../../data/sources'

/** Every source id in the profile, in reading order, de-duplicated. */
export function collectSources(profile: ConsoleProfile): SourceId[] {
  const found = new Set<SourceId>()
  const walk = (node: unknown) => {
    if (Array.isArray(node)) node.forEach(walk)
    else if (node && typeof node === 'object') {
      for (const [key, value] of Object.entries(node)) {
        if (key === 'sources' && Array.isArray(value)) value.forEach((id: SourceId) => found.add(id))
        else walk(value)
      }
    }
  }
  walk(profile)
  Object.values(profile.citations).forEach((ids) => ids.forEach((id) => found.add(id)))
  return [...found]
}

const CitationContext = createContext<SourceId[]>([])

export function CitationProvider({ profile, children }: { profile: ConsoleProfile; children: ReactNode }) {
  const order = useMemo(() => collectSources(profile), [profile])
  return <CitationContext value={order}>{children}</CitationContext>
}

export function useSourceList(): SourceId[] {
  return useContext(CitationContext)
}

/** Superscript source markers linking to the page's source list; they take the surrounding text colour. */
export function Cite({ ids }: { ids: readonly SourceId[] | undefined }) {
  const order = useContext(CitationContext)
  if (!ids?.length) return null
  return (
    <sup className="ml-0.5 font-mono text-[0.6em] font-normal tracking-normal">
      [
      {ids.map((id, i) => {
        const n = order.indexOf(id) + 1
        return (
          <span key={id}>
            {i > 0 && ','}
            <a href={`#source-${n}`} title={sources[id].title} className="text-current no-underline hover:underline">
              {n}
            </a>
          </span>
        )
      })}
      ]
    </sup>
  )
}

/** Visible flag for figures whose sources disagree. */
export function Uncertain({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-flex items-center rounded-full bg-btn-yellow/25 px-2 py-0.5 align-middle text-[0.7rem] font-semibold tracking-normal text-ink">
      {label}
    </span>
  )
}
