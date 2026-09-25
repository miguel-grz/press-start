import type { ConsoleProfileModule } from './types'

// Each console's profile is its own chunk, loaded only when its page is visited.
const modules = import.meta.glob<{ default: ConsoleProfileModule }>('./*/index.ts')
const cache = new Map<string, Promise<ConsoleProfileModule | null>>()

/** Resolves a console's profile, or null while it is still being researched. Stable per slug, for `use()`. */
export function loadProfile(slug: string): Promise<ConsoleProfileModule | null> {
  let pending = cache.get(slug)
  if (!pending) {
    const load = modules[`./${slug}/index.ts`]
    pending = load ? load().then((m) => m.default) : Promise.resolve(null)
    cache.set(slug, pending)
  }
  return pending
}
