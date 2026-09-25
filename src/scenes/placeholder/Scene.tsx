import { RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'
import type { SceneProps } from '../types'

/** Stand-in game cartridge in the console's colorway, turned by scroll. Replaced per console. */
export default function PlaceholderScene({ colorway, progress }: SceneProps) {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    const p = progress.current
    const targetY = -0.6 + p * Math.PI * 1.2
    g.rotation.y += (targetY - g.rotation.y) * Math.min(1, delta * 6)
    g.position.y += (0.3 - p * 0.6 - g.position.y) * Math.min(1, delta * 6)
  })

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 4, 3]} intensity={1.6} />
      <directionalLight position={[-3, 1, -2]} intensity={0.5} />
      <group ref={group} rotation={[0.15, -0.6, 0]}>
        <RoundedBox args={[1.5, 1.8, 0.3]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color={colorway.trim} roughness={0.6} />
        </RoundedBox>
        <mesh position={[0, 0.25, 0.155]}>
          <planeGeometry args={[1.1, 0.9]} />
          <meshStandardMaterial color="#f4f4f6" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.5, 0.157]}>
          <planeGeometry args={[0.8, 0.08]} />
          <meshStandardMaterial color={colorway.accent} />
        </mesh>
      </group>
    </>
  )
}
