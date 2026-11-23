import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  index?: string
  title: ReactNode
  description?: ReactNode
  align?: 'start' | 'center'
  tone?: 'light' | 'dark'
  className?: string
  action?: ReactNode
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = 'start',
  tone = 'light',
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between',
        align === 'center' && 'sm:flex-col sm:items-center',
        className,
      )}
    >
      <div
        className={cn(
          'max-w-3xl',
          align === 'center' && 'mx-auto text-center',
        )}
      >
        <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
          {index ? (
            <span
              className={cn(
                'section-index tabular-nums',
                tone === 'dark' ? 'text-white/40' : 'text-muted/60',
              )}
            >
              {index}
            </span>
          ) : null}
          {eyebrow ? (
            <span className={tone === 'dark' ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>
          ) : null}
        </div>
        <h2
          className={cn(
            'mt-4 text-balance text-[2rem] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem]',
            tone === 'dark' ? 'text-white' : 'text-ink-950',
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              'mt-4 max-w-2xl text-[15px] leading-8 sm:text-base',
              align === 'center' && 'mx-auto',
              tone === 'dark' ? 'text-white/60' : 'text-muted',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
