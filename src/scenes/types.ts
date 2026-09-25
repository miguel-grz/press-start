import type { RefObject } from 'react'
import type { Colorway } from '../data/types'

export interface SceneProps {
  colorway: Colorway
  /** Scroll progress through the console page, 0–1. Read it in `useFrame`, never in render. */
  progress: RefObject<number>
}
