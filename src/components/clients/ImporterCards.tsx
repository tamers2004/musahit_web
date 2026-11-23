import { clientGroups } from '@/data/clients'
import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

type ImporterCardsProps = {
  className?: string
}

export function ImporterCards({ className }: ImporterCardsProps) {
  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-3">
        {clientGroups.map((group, index) => (
          <Reveal key={group.importer} delay={index * 0.06}>
            <article className="card card-hover flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-600">
                    יבואן רכב
                  </span>
                  <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-ink-950">
                    {group.importer}
                  </h3>
                  <span
                    className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted"
                    dir="ltr"
                  >
                    {group.latin}
                  </span>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand-500/15 bg-brand-50 text-[11px] font-extrabold text-brand-700 tabular-nums">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-1 flex-wrap content-start justify-center gap-2">
                {group.brandLogos.map((brand) => (
                  <div
                    key={brand.latin}
                    className="group flex min-w-[5.5rem] max-w-[7.5rem] flex-1 basis-[30%] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white px-3 py-3 transition-[transform,border-color,box-shadow] duration-300 hover:border-brand-500/25 hover:shadow-card"
                  >
                    <SmartImage
                      image={brand.logo}
                      className="client-logo-image h-8 w-auto max-w-full object-contain filter-none opacity-100 transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      className="text-center text-[10px] font-semibold leading-4 text-ink-700"
                      dir={/^[A-Za-z]/.test(brand.name) ? 'ltr' : undefined}
                    >
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>

              {group.note ? (
                <p className="mt-4 border-t border-line pt-3 text-[10px] leading-5 text-muted">
                  {group.note}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-4 text-center text-[10px] leading-5 text-muted/80">
        הלוגואים הם סימני המסחר של היצרנים בהתאמה ומוצגים לצורכי זיהוי בלבד.
      </p>
    </div>
  )
}
