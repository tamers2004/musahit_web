import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MarqueeProps = {
  children: ReactNode
  className?: string
}

export function Marquee({ children, className }: MarqueeProps) {
  return (
    <div dir="ltr" className={cn('marquee marquee-mask overflow-hidden', className)}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center gap-10 pe-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10 pe-10" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
