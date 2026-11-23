import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { products } from '@/data/products'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
import { cn } from '@/lib/utils'

export function ProductsShowcase() {
  return (
    <Section id="products" className="relative border-t border-line bg-white">
      <SectionHeading
        index="01"
        eyebrow="המוצרים שלנו"
        title="מערכות תוכנה לכל תהליכי העבודה בעסק"
        description="ממוסכית 2020 לניהול מוסך ומרכזי שירות, דרך אופק פתרונות לניהול עסק, ועד בדיקות קניה, רישוי, סליקה ו־SMS."
        action={
          <ButtonLink to="/products" variant="ghost" className="btn-icon-move">
            כל המוצרים
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:auto-rows-[15.5rem] lg:grid-cols-3">
        {products.map((product, index) => {
          const featured = index === 0
          return (
            <Reveal
              key={product.slug}
              delay={index * 0.04}
              className={cn(featured && 'sm:col-span-2 lg:row-span-2')}
            >
              <SpotlightLink
                to={`/products/${product.slug}`}
                className="card card-hover flex h-full flex-col overflow-hidden"
              >
                <div
                  className={cn(
                    'relative shrink-0 overflow-hidden bg-surface-muted',
                    featured ? 'aspect-[16/9] lg:flex-1 lg:aspect-auto' : 'aspect-[16/10]',
                  )}
                >
                  <SmartImage
                    image={product.image}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-ink-700 backdrop-blur-sm">
                    {product.latin ?? product.name}
                  </span>
                </div>

                <div className={cn('flex flex-col p-5', featured && 'lg:p-6')}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600">
                    {product.tagline}
                  </span>
                  <div className="mt-1.5 flex items-start justify-between gap-3">
                    <h3
                      className={cn(
                        'font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700',
                        featured ? 'text-xl sm:text-2xl' : 'text-base',
                      )}
                    >
                      {product.name}
                    </h3>
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-600 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:border-brand-500/30 group-hover:bg-brand-50">
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <p className={cn('mt-2 text-sm leading-7 text-muted', featured ? 'max-w-xl' : 'line-clamp-3')}>
                    {product.short}
                  </p>

                  {featured ? (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {product.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-[12px] leading-5 text-ink-700"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </SpotlightLink>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
