import type { Product } from '@/data/products'
import { BrowserFrame, MediaCard } from '@/components/ui/MediaFrame'
import { cn } from '@/lib/utils'

type ProductVisualProps = {
  product: Product
  className?: string
  priority?: boolean
}

export function ProductVisual({ product, className, priority }: ProductVisualProps) {
  if (product.visual === 'browser') {
    return (
      <BrowserFrame
        image={product.image}
        label={product.latin ?? product.name}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <div className={cn('relative', className)}>
      <MediaCard image={product.image} priority={priority} />
      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-900 shadow-card backdrop-blur-sm">
        {product.latin ?? product.name}
      </span>
    </div>
  )
}
