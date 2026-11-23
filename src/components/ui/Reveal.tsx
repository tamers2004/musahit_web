import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useAccessibility } from '@/accessibility/AccessibilityContext'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  once?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  direction = 'up',
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion()
  const { settings } = useAccessibility()
  const reduced = prefersReduced || settings.features.disableAnimations

  if (reduced) {
    return <div className={cn(className)}>{children}</div>
  }

  const hidden =
    direction === 'left'
      ? { opacity: 0, x: -26 }
      : direction === 'right'
        ? { opacity: 0, x: 26 }
        : direction === 'none'
          ? { opacity: 0 }
          : { opacity: 0, y }

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
