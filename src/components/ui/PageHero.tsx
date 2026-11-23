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
    <section className={cn('relative overflow-hidden border-b border-white/5 pb-16 pt-32 sm:pb-20 sm:pt-36', className)}>
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5">{eyebrow}</span>
          <h1 className="text-balance text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{description}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
