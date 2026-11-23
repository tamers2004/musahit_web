import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import * as THREE from 'three'

type SceneNode = {
  position: [number, number, number]
  size: number
  color: string
}

const sceneNodes: SceneNode[] = [
  { position: [1.9, 0.7, 0.2], size: 0.16, color: '#38bdf8' },
  { position: [1.2, -1.2, -0.4], size: 0.12, color: '#22d3ee' },
  { position: [-0.6, -1.5, 0.3], size: 0.14, color: '#06b6d4' },
  { position: [-1.9, -0.4, -0.2], size: 0.11, color: '#38bdf8' },
  { position: [-1.4, 1.2, 0.4], size: 0.15, color: '#22d3ee' },
  { position: [0.2, 1.7, -0.3], size: 0.1, color: '#67e8f9' },
  { position: [2.3, -0.6, -0.6], size: 0.09, color: '#818cf8' },
  { position: [-0.3, 0.3, 1.1], size: 0.08, color: '#38bdf8' },
]

const connections: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 3],
  [1, 4],
  [2, 5],
  [0, 7],
  [1, 7],
  [4, 7],
  [6, 0],
]

function Network() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08
  })

  const lines = useMemo(
    () =>
      connections.map(([from, to]) => ({
        points: [sceneNodes[from].position, sceneNodes[to].position] as [
          [number, number, number],
          [number, number, number],
        ],
      })),
    [],
  )

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#0891b2"
            wireframe
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.55}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={1.4} />
        </mesh>
      </Float>

      {sceneNodes.map((node, index) => (
        <Float key={index} speed={1.8 + index * 0.1} floatIntensity={0.8} rotationIntensity={0.2}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.1}
            />
          </mesh>
        </Float>
      ))}

      {lines.map((line, index) => (
        <Line
          key={index}
          points={line.points}
          color="#38bdf8"
          lineWidth={1}
          transparent
          opacity={0.28}
        />
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 6]} intensity={45} color="#22d3ee" />
      <pointLight position={[-5, -3, 4]} intensity={28} color="#6366f1" />
      <Network />
    </Canvas>
  )
}
