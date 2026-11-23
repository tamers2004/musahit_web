import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id?: string
  className?: string
  containerClassName?: string
  children: ReactNode
  bleed?: boolean
}

export function Section({ id, className, containerClassName, children, bleed }: SectionProps) {
  return (
    <section id={id} className={cn('section', className)}>
      {bleed ? children : <div className={cn('container-page', containerClassName)}>{children}</div>}
    </section>
  )
}
