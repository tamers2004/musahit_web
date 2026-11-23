import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { ImageAsset } from '@/data/imageAssets'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'

export type GalleryItem = ImageAsset & { caption?: string }

type ImageGalleryProps = {
  items: GalleryItem[]
  columns?: 2 | 3
  className?: string
  lightbox?: boolean
}

export function ImageGallery({ items, columns = 3, className, lightbox = true }: ImageGalleryProps) {
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const activeItem = active === null ? null : items[active]

  const close = () => setActive(null)
  const previous = () =>
    setActive((current) => (current === null ? current : (current + items.length - 1) % items.length))
  const next = () =>
    setActive((current) => (current === null ? current : (current + 1) % items.length))

  useEffect(() => {
    if (active === null) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') next()
      if (event.key === 'ArrowRight') previous()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active])

  return (
    <>
      <div
        className={cn(
          'columns-1 gap-4 sm:columns-2',
          columns === 3 && 'lg:columns-3',
          className,
        )}
      >
        {items.map((item, index) => {
          const content = (
            <>
              <span className="relative block overflow-hidden bg-white/[0.03]">
                <SmartImage
                  image={item}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {lightbox ? (
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                ) : null}
              </span>
              {item.caption ? (
                <span className="block px-4 py-3 text-xs leading-6 text-slate-400">{item.caption}</span>
              ) : null}
            </>
          )

          const classes =
            'group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-start'

          return lightbox ? (
            <button
              key={item.src}
              type="button"
              className={cn(classes, 'cursor-zoom-in')}
              onClick={() => setActive(index)}
              aria-label={`הצגת ${item.alt} בגודל מלא`}
            >
              {content}
            </button>
          ) : (
            <div key={item.src} className={classes}>
              {content}
            </div>
          )
        })}
      </div>

      {lightbox && activeItem
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.alt}
              onClick={close}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10 sm:right-8 sm:top-8"
                aria-label="סגירת תצוגה"
              >
                <X className="h-5 w-5" />
              </button>

              {items.length > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    previous()
                  }}
                  className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10 sm:right-8"
                  aria-label="התמונה הקודמת"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              ) : null}

              <figure
                className="max-h-[85vh] max-w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <SmartImage
                  image={activeItem}
                  priority
                  className="max-h-[78vh] w-auto max-w-full object-contain"
                />
                {activeItem.caption ? (
                  <figcaption className="border-t border-white/10 px-5 py-3 text-center text-sm text-slate-300">
                    {activeItem.caption}
                  </figcaption>
                ) : null}
              </figure>

              {items.length > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    next()
                  }}
                  className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-white transition-colors hover:bg-white/10 sm:left-8"
                  aria-label="התמונה הבאה"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
