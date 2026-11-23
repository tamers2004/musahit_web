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
  if (variant === 'full') {
    return (
      <Link
        to="/"
        className={cn('inline-flex w-fit rounded-xl', className)}
        aria-label={`${company.name} — דף הבית`}
      >
        <SmartImage
          image={images.eyalLogoWhite}
          className="h-24 w-auto object-contain"
        />
      </Link>
    )
  }

  return (
    <Link
      to="/"
      className={cn('flex items-center gap-3 rounded-xl', className)}
      aria-label={`${company.name} — דף הבית`}
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/25 bg-white/[0.04] p-1.5 shadow-glow">
        <SmartImage image={images.eyalMark} priority className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-base font-bold text-white">{company.name}</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300/80" dir="ltr">
          Eyal Software Solutions
        </span>
      </span>
    </Link>
  )
}
