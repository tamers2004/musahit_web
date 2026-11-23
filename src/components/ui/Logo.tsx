import { Link } from 'react-router-dom'
import { company } from '@/data/site'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/brand/LogoMark'

type LogoProps = {
  className?: string
  variant?: 'header' | 'footer'
  showEnglish?: boolean
}

export function Logo({ className, variant = 'header', showEnglish = true }: LogoProps) {
  const isFooter = variant === 'footer'

  return (
    <Link
      to="/"
      className={cn('group flex w-fit items-center gap-2.5 rounded-xl sm:gap-3', className)}
      aria-label={`${company.name} — דף הבית`}
    >
      <span
        className={cn(
          'relative grid shrink-0 place-items-center',
          isFooter ? 'h-11 w-11' : 'h-10 w-10 sm:h-11 sm:w-11',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-brand-500/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        />
        <LogoMark
          className={cn(
            'relative h-full w-full transition-transform duration-500 group-hover:scale-[1.06]',
            isFooter && 'drop-shadow-[0_8px_18px_rgba(29,111,242,0.35)]',
          )}
          gradientId={isFooter ? 'eyal-mark-gradient-footer' : 'eyal-mark-gradient-header'}
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            'font-extrabold tracking-tight',
            isFooter ? 'text-[15px] text-white' : 'text-[15px] text-ink-950 sm:text-base',
          )}
        >
          {company.name}
        </span>
        {showEnglish ? (
          <span
            className={cn(
              'mt-1 text-[8px] font-semibold uppercase leading-none tracking-[0.2em] sm:text-[9px]',
              isFooter ? 'text-white/50' : 'text-muted/80',
            )}
            dir="ltr"
          >
            Eyal Software Solutions
          </span>
        ) : null}
      </span>
    </Link>
  )
}
