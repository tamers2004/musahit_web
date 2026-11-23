import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  className?: string
  containerClassName?: string
  children: ReactNode
  bleed?: boolean
  style?: CSSProperties
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  bleed,
  style,
}: SectionProps) {
  return (
    <section id={id} className={cn('section', className)} style={style}>
      {bleed ? children : <div className={cn('container-page', containerClassName)}>{children}</div>}
    </section>
  )
}
