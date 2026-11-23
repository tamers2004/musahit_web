import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, description, children, aside, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] pb-14 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 grid-lines radial-fade opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-80 w-[36rem] rounded-full bg-brand-500/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-72 rounded-full bg-signal/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-balance text-[2.35rem] font-extrabold leading-[1.06] tracking-tight text-ink-950 sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            ) : null}
            {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
          </div>
          {aside ? <div className="shrink-0">{aside}</div> : null}
        </div>
      </div>
    </section>
  )
}
