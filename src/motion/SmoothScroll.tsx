import 'lenis/dist/lenis.css'
import { useEffect, type ReactNode } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Lenis smooth scroll driven by the GSAP ticker so ScrollTrigger and Lenis share one clock.
 * Both libraries load after first paint to keep them off the critical path. Scrolling stays
 * native on touch, route scroll positions are left to React Router's ScrollRestoration,
 * and reduced-motion users get plain scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    let cleanup: (() => void) | undefined
    let cancelled = false

    void Promise.all([import('lenis'), import('./gsap')]).then(([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
      if (cancelled) return
      const lenis = new Lenis({ lerp: 0.12 })
      lenis.on('scroll', ScrollTrigger.update)
      const tick = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      cleanup = () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [reduced])

  return children
}
