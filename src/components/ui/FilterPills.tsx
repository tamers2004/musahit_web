import { cn } from '@/lib/utils'

export type FilterItem = {
  id: string
  label: string
  count?: number
}

type FilterPillsProps = {
  items: FilterItem[]
  active: string
  onChange: (id: string) => void
  label: string
  className?: string
}

export function FilterPills({ items, active, onChange, label, className }: FilterPillsProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn('no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1', className)}
    >
      {items.map((item) => {
        const selected = active === item.id
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(item.id)}
            className={cn(
              'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-bold transition-colors',
              selected
                ? 'border-brand-500 bg-brand-500 text-white shadow-[0_10px_24px_-16px_rgba(29,111,242,0.9)]'
                : 'border-line bg-white text-ink-700 hover:border-brand-500/30 hover:bg-brand-50 hover:text-brand-700',
            )}
          >
            {item.label}
            {typeof item.count === 'number' ? (
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums',
                  selected ? 'bg-white/20 text-white' : 'bg-surface-muted text-muted',
                )}
              >
                {item.count}
              </span>
            ) : null}
          </button>
        )
      })}
    </div>
  )
}
