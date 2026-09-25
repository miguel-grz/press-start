import { useEffect, useRef, type RefObject } from 'react'
import { ScrollTrigger } from '../motion/gsap'

/**
 * Tracks scroll progress (0–1) through `target` in a ref, so 3D scenes can read it
 * inside `useFrame` without re-rendering React on every scroll tick.
 */
export function useScrollProgress(target: RefObject<HTMLElement | null>): RefObject<number> {
  const progress = useRef(0)

  useEffect(() => {
    const el = target.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progress.current = self.progress
      },
    })
    return () => trigger.kill()
  }, [target])

  return progress
}
