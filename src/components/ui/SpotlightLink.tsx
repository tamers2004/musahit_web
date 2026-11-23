import type { PointerEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type SpotlightLinkProps = {
  to: string
  className?: string
  children: ReactNode
  ariaLabel?: string
}

export function SpotlightLink({ to, className, children, ariaLabel }: SpotlightLinkProps) {
  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <Link
      to={to}
      onPointerMove={handlePointerMove}
      aria-label={ariaLabel}
      className={cn('spotlight-card group', className)}
    >
      {children}
    </Link>
  )
}
