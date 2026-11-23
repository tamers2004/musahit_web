import type { ImgHTMLAttributes } from 'react'
import type { ImageAsset } from '@/data/imageAssets'
import { cn } from '@/lib/utils'

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> & {
  image: ImageAsset
  priority?: boolean
}

export function SmartImage({ image, priority, className, loading, decoding, ...props }: SmartImageProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={cn('block', className)}
      {...props}
    />
  )
}
