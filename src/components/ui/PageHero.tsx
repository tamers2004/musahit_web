import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, description, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/80 via-white to-white pb-14 pt-28 sm:pb-16 sm:pt-32',
        className,
      )}
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5">{eyebrow}</span>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] text-ink-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
