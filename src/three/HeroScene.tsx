import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { heroNodeVisuals } from '@/three/heroNodes'

function buildLineGeometry() {
  const points: number[] = []

  for (let index = 0; index < heroNodeVisuals.length; index += 1) {
    const current = heroNodeVisuals[index]
    const next = heroNodeVisuals[(index + 1) % heroNodeVisuals.length]
    points.push(...current.position, ...next.position)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
  return geometry
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
    } catch {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 0, 7.6)

    const group = new THREE.Group()
    scene.add(group)

    const sphereGeometry = new THREE.SphereGeometry(1, 24, 24)
    const nodes = heroNodeVisuals.map((node, index) => {
      const material = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.55,
        metalness: 0.35,
        roughness: 0.25,
      })
      const mesh = new THREE.Mesh(sphereGeometry, material)
      mesh.position.set(...node.position)
      mesh.scale.setScalar(node.size)
      group.add(mesh)
      return { material, phase: index * 0.9 }
    })

    const lineGeometry = buildLineGeometry()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x1d6ff2,
      transparent: true,
      opacity: 0.26,
    })
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial))

    scene.add(new THREE.AmbientLight(0xffffff, 1.1))
    const directional = new THREE.DirectionalLight(0xffffff, 2.2)
    directional.position.set(4, 6, 6)
    scene.add(directional)
    const accentLight = new THREE.PointLight(0x35cfd9, 18)
    accentLight.position.set(-6, -2, 4)
    scene.add(accentLight)

    const pointer = new THREE.Vector2(0, 0)
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    let visible = true
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { rootMargin: '120px' },
    )
    intersection.observe(container)

    let hidden = document.visibilityState === 'hidden'
    const onVisibility = () => {
      hidden = document.visibilityState === 'hidden'
    }
    document.addEventListener('visibilitychange', onVisibility)

    let lastWidth = 0
    let lastHeight = 0
    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (!width || !height) return

      lastWidth = width
      lastHeight = height
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()

    const clock = new THREE.Clock()
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)

      if (
        container.clientWidth &&
        container.clientHeight &&
        (container.clientWidth !== lastWidth || container.clientHeight !== lastHeight)
      ) {
        resize()
      }

      if (!visible || hidden) return

      const delta = Math.min(clock.getDelta(), 0.05)
      const elapsed = clock.elapsedTime
      group.rotation.y = Math.sin(elapsed * 0.18) * 0.1
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, pointer.y * 0.08, 2.5, delta)
      group.rotation.z = THREE.MathUtils.damp(group.rotation.z, -pointer.x * 0.04, 2.5, delta)
      group.position.y = Math.sin(elapsed * 0.6) * 0.04

      for (const node of nodes) {
        node.material.emissiveIntensity = 0.5 + Math.sin(elapsed * 1.2 + node.phase) * 0.08
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      intersection.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      sphereGeometry.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      for (const node of nodes) node.material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="h-full w-full" />
}
