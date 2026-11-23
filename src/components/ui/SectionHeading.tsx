import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'start' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'start', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? <span className="eyebrow mb-4">{eyebrow}</span> : null}
      <h2 className="text-balance text-3xl font-bold leading-tight text-ink-950 sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
