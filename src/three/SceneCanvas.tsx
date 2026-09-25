import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState, type ReactNode } from 'react'
import { getDeviceTier } from '../lib/deviceTier'
import { useReducedMotion } from '../motion/useReducedMotion'

/**
 * The console route's WebGL canvas. Fills its positioned parent, is decorative for assistive
 * tech (all information lives in the DOM), and scales resolution by device tier and live FPS.
 */
export function SceneCanvas({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const [maxDpr, setMaxDpr] = useState(() => (getDeviceTier() === 'low' ? 1.25 : 2))

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, maxDpr]}
        frameloop={reduced ? 'demand' : 'always'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.8, 5], fov: 32 }}
      >
        <PerformanceMonitor onDecline={() => setMaxDpr(1)} />
        {children}
      </Canvas>
    </div>
  )
}
