import type { ModuleItem } from '@/data/modules'
import { Icon } from '@/components/ui/Icon'
import { SmartImage } from '@/components/ui/SmartImage'
import { cn } from '@/lib/utils'

type ModuleGlyphProps = {
  module: ModuleItem
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-10 w-10 p-1.5',
  md: 'h-12 w-12 p-2',
  lg: 'h-14 w-14 p-2.5',
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export function ModuleGlyph({ module, size = 'md', className }: ModuleGlyphProps) {
  if (module.iconImage) {
    return (
      <span
        className={cn(
          'grid shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white shadow-sm',
          sizes[size],
          className,
        )}
      >
        <SmartImage image={module.iconImage} className="h-full w-full object-contain" />
      </span>
    )
  }

  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300',
        sizes[size],
        className,
      )}
    >
      <Icon name={module.icon} className={iconSizes[size]} />
    </span>
  )
}
