import { Component, lazy, Suspense, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useAccessibility } from '@/accessibility/AccessibilityContext'
import { cn } from '@/lib/utils'

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

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children
  }
}

type HeroCanvasProps = {
  className?: string
}

export function HeroCanvas({ className }: HeroCanvasProps) {
  const reduced = useReducedMotion()
  const { settings } = useAccessibility()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)')
    const update = () => setEnabled(media.matches && supportsWebGL())

    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const disabled = reduced || settings.features.disableAnimations || !enabled

  return (
    <div className={cn('pointer-events-none', className)} aria-hidden="true">
      {disabled ? null : (
        <SceneErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </SceneErrorBoundary>
      )}
    </div>
  )
}
