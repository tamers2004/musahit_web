import { Link } from 'react-router-dom'
import { company } from '@/data/site'
import { images } from '@/data/imageAssets'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'

type LogoProps = {
  className?: string
  variant?: 'mark' | 'full'
}

export function Logo({ className, variant = 'mark' }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('flex w-fit items-center gap-3 rounded-xl', className)}
      aria-label={`${company.name} — דף הבית`}
    >
      <span
        className={cn(
          'grid shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white shadow-card',
          variant === 'full' ? 'h-12 w-12 p-1.5' : 'h-11 w-11 p-1.5',
        )}
      >
        <SmartImage image={images.eyalMark} priority className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-bold text-ink-950',
            variant === 'full' ? 'text-xl' : 'text-base',
          )}
        >
          {company.name}
        </span>
        <span
          className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
          dir="ltr"
        >
          Eyal Software Solutions
        </span>
      </span>
    </Link>
  )
}
