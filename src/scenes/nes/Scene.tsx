import { ContactShadows, RoundedBox } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { CanvasTexture, SRGBColorSpace, Vector3, type Group, type Mesh, type MeshStandardMaterial } from 'three'
import { useReducedMotion } from '../../motion/useReducedMotion'
import type { SceneProps } from '../types'

const BODY = '#cfcfca'
const BASE = '#8e8e90'
const BLACK = '#232325'
const CART = '#8f9095'

/** 0–1 progress through [start, end] of the overall scroll, eased in and out. */
function segment(p: number, start: number, end: number): number {
  const x = Math.min(1, Math.max(0, (p - start) / (end - start)))
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2
}

/** Text-only Game Pak label drawn at runtime: no artwork, just type and the console's accent. */
function useLabelTexture(accent: string) {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 560
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f3f3f0'
      ctx.fillRect(0, 0, 512, 560)
      ctx.fillStyle = accent
      ctx.fillRect(0, 0, 512, 150)
      ctx.fillStyle = '#ffffff'
      ctx.font = '700 64px system-ui, sans-serif'
      ctx.fillText('GAME PAK', 36, 100)
      ctx.fillStyle = '#1d1d1f'
      ctx.font = '600 44px system-ui, sans-serif'
      ctx.fillText('PRESS START', 36, 250)
      ctx.fillStyle = '#6e6e73'
      ctx.font = '500 30px system-ui, sans-serif'
      ctx.fillText('72-pin · 1985', 36, 310)
    }
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    return texture
  }, [accent])
}

/**
 * The NES front-loader ritual, scrubbed by scroll: the door flips up, the Game Pak slides in,
 * is pressed down onto the pins, the door closes and the power light comes on.
 * A stylised build, not a replica.
 */
export default function NesScene({ colorway, progress }: SceneProps) {
  const reduced = useReducedMotion()
  const rig = useRef<Group>(null)
  const door = useRef<Group>(null)
  const cart = useRef<Group>(null)
  const led = useRef<Mesh>(null)
  const label = useLabelTexture(colorway.accent)
  const lookAt = useMemo(() => new Vector3(), [])
  const target = useMemo(() => new Vector3(), [])
  const scale = useThree((state) => Math.min(1.15, state.viewport.width / 5.2))

  useFrame(({ camera }, delta) => {
    const p = reduced ? 1 : progress.current
    const k = Math.min(1, delta * 8)

    const open = segment(p, 0.05, 0.25) - segment(p, 0.72, 0.84)
    const slide = segment(p, 0.22, 0.52)
    const press = segment(p, 0.55, 0.7)
    const power = segment(p, 0.86, 0.94)

    if (door.current) door.current.rotation.x += (open * 1.45 - door.current.rotation.x) * k
    if (cart.current) {
      cart.current.position.z += (3.4 - slide * 3.2 - cart.current.position.z) * k
      cart.current.position.y += (0.24 - press * 0.16 - cart.current.position.y) * k
    }
    if (led.current) {
      const material = led.current.material as MeshStandardMaterial
      material.emissiveIntensity += (power * 3 - material.emissiveIntensity) * k
    }
    if (rig.current) rig.current.rotation.y += (-0.5 + p * 0.35 - rig.current.rotation.y) * k

    camera.position.lerp(target.set(0.5, 2.1 - p * 0.5, 5.2 - p * 0.7), k)
    camera.lookAt(lookAt.set(0, 0.1, 0.6))
  })

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 6, 4]} intensity={1.7} />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} />

      <group ref={rig} scale={scale}>
        {/* Upper shell and darker base */}
        <RoundedBox args={[2.6, 0.5, 2.1]} radius={0.03} position={[0, 0.2, 0]}>
          <meshStandardMaterial color={BODY} roughness={0.7} />
        </RoundedBox>
        <RoundedBox args={[2.6, 0.42, 2.1]} radius={0.03} position={[0, -0.24, 0]}>
          <meshStandardMaterial color={BASE} roughness={0.75} />
        </RoundedBox>

        {/* Black column and top ribs on the right */}
        <mesh position={[0.78, 0, 1.0]}>
          <boxGeometry args={[0.46, 0.9, 0.14]} />
          <meshStandardMaterial color={BLACK} roughness={0.6} />
        </mesh>
        {Array.from({ length: 9 }, (_, i) => (
          <mesh key={i} position={[0.78, 0.46, 0.75 - i * 0.18]}>
            <boxGeometry args={[0.46, 0.02, 0.08]} />
            <meshStandardMaterial color="#bdbdb8" roughness={0.6} />
          </mesh>
        ))}

        {/* Dark slot behind the door */}
        <mesh position={[-0.42, 0.22, 1.052]}>
          <planeGeometry args={[1.5, 0.4]} />
          <meshStandardMaterial color="#141415" roughness={1} />
        </mesh>

        {/* Door, hinged along its top edge */}
        <group ref={door} position={[-0.42, 0.44, 1.07]}>
          <mesh position={[0, -0.22, 0]}>
            <boxGeometry args={[1.52, 0.44, 0.03]} />
            <meshStandardMaterial color="#dcdcd7" roughness={0.65} />
          </mesh>
          <mesh position={[-0.35, -0.2, 0.017]}>
            <planeGeometry args={[0.55, 0.05]} />
            <meshStandardMaterial color={colorway.accent} />
          </mesh>
        </group>

        {/* Power and reset buttons, power light, controller ports */}
        {[-1.0, -0.72].map((x) => (
          <mesh key={x} position={[x, -0.2, 1.06]}>
            <boxGeometry args={[0.22, 0.1, 0.04]} />
            <meshStandardMaterial color="#5c5c5f" roughness={0.5} />
          </mesh>
        ))}
        <mesh ref={led} position={[-1.18, -0.2, 1.06]}>
          <boxGeometry args={[0.05, 0.05, 0.02]} />
          <meshStandardMaterial color="#5a1010" emissive="#ff2a2a" emissiveIntensity={0} />
        </mesh>
        {[0.25, 0.45].map((x) => (
          <mesh key={x} position={[x, -0.26, 1.055]}>
            <boxGeometry args={[0.12, 0.2, 0.02]} />
            <meshStandardMaterial color="#2c2c2e" roughness={0.5} />
          </mesh>
        ))}

        {/* The Game Pak, lying flat, label up */}
        <group ref={cart} position={[-0.42, 0.24, 3.4]}>
          <RoundedBox args={[1.2, 0.2, 1.33]} radius={0.03}>
            <meshStandardMaterial color={CART} roughness={0.7} />
          </RoundedBox>
          <mesh position={[0, 0.101, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.95, 1.04]} />
            <meshStandardMaterial map={label} roughness={0.9} />
          </mesh>
        </group>

        <ContactShadows position={[0, -0.46, 0.6]} opacity={0.35} blur={2.4} scale={9} far={1.5} />
      </group>
    </>
  )
}
