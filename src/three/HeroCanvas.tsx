import { lazy, Suspense, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const HeroScene = lazy(() => import('@/three/HeroScene'))

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
    )
  } catch {
    return false
  }
}

function FallbackVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-6 rounded-full border border-cyan-400/20" />
        <div className="absolute inset-12 rounded-full border border-cyan-400/15" />
        <div className="absolute inset-20 rounded-full border border-cyan-400/10" />
        <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-cyan-400/40 [animation-duration:18s]" />
        <div className="absolute inset-10 animate-[spin_26s_linear_infinite_reverse] rounded-full border border-transparent border-b-sky-400/30" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 shadow-glow" />
      </div>
    </div>
  )
}

export function HeroCanvas() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches
    setEnabled(wide && supportsWebGL())
  }, [])

  if (reduced || !enabled) {
    return <FallbackVisual />
  }

  return (
    <Suspense fallback={<FallbackVisual />}>
      <HeroScene />
    </Suspense>
  )
}
