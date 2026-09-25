import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react'
import { ScrollTrigger } from '../motion/gsap'

/**
 * Tracks scroll progress (0–1) through `target` in a ref, so 3D scenes can read it
 * inside `useFrame` without re-rendering React on every scroll tick. `onProgress` is for DOM
 * code that needs to react (it should only set state when something actually changes).
 */
export function useScrollProgress(
  target: RefObject<HTMLElement | null>,
  onProgress?: (progress: number) => void,
): RefObject<number> {
  const progress = useRef(0)
  const callback = useRef(onProgress)
  useLayoutEffect(() => {
    callback.current = onProgress
  })

  useEffect(() => {
    const el = target.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        progress.current = self.progress
        callback.current?.(self.progress)
      },
    })
    return () => trigger.kill()
  }, [target])

  return progress
}
