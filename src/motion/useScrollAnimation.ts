import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion } from './useReducedMotion'

type GsapModule = typeof import('./gsap')

/**
 * Builds a GSAP/ScrollTrigger animation scoped to `scope` once GSAP has loaded.
 * Everything is reverted on unmount, and nothing runs for reduced-motion users:
 * content is laid out visible by default, so skipping the animation is the fallback.
 */
export function useScrollAnimation(scope: RefObject<HTMLElement | null>, build: (lib: GsapModule) => void): void {
  useEffect(() => {
    const el = scope.current
    if (!el || prefersReducedMotion()) return
    let revert: (() => void) | undefined
    let cancelled = false
    void import('./gsap').then((lib) => {
      if (cancelled) return
      const ctx = lib.gsap.context(() => build(lib), el)
      revert = () => ctx.revert()
    })
    return () => {
      cancelled = true
      revert?.()
    }
    // The animation is built once per mount; `build` is expected to be stable in intent.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope])
}
