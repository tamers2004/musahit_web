import type { ImageAsset } from '@/data/imageAssets'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'

type VisualProps = {
  image: ImageAsset
  className?: string
  imageClassName?: string
  priority?: boolean
  label?: string
}

export function BrowserFrame({ image, className, imageClassName, priority, label }: VisualProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-line bg-white shadow-soft',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-muted px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        {label ? (
          <span className="truncate text-[10px] font-semibold tracking-wide text-muted" dir="ltr">
            {label}
          </span>
        ) : null}
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-surface-muted">
        <SmartImage
          image={image}
          priority={priority}
          className={cn('h-full w-full object-cover object-top', imageClassName)}
        />
      </div>
    </div>
  )
}

export function MediaCard({ image, className, imageClassName, priority }: VisualProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-muted via-white to-white p-2 shadow-soft sm:p-2.5',
        className,
      )}
    >
      <div className="overflow-hidden rounded-xl bg-white">
        <SmartImage
          image={image}
          priority={priority}
          className={cn('h-auto w-full object-contain', imageClassName)}
        />
      </div>
    </div>
  )
}

export function PhoneMockup({ image, className, priority }: VisualProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[220px]', className)}>
      <div className="relative rounded-[2.25rem] border border-ink-950/10 bg-ink-950 p-2 shadow-float">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-white">
          <span className="absolute left-1/2 top-2 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-ink-950" />
          <SmartImage
            image={image}
            priority={priority}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}

export function LogoTile({ image, className }: { image: ImageAsset; className?: string }) {
  return (
    <div
      className={cn(
        'client-logo group flex h-24 items-center justify-center rounded-xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-soft',
        className,
      )}
    >
      <SmartImage
        image={image}
        className="filter-none max-h-12 w-auto max-w-full object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  )
}
