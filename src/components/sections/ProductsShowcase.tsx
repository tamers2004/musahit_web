import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { products } from '@/data/products'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProductVisual } from '@/components/products/ProductVisual'
import { cn } from '@/lib/utils'

export function ProductsShowcase() {
  return (
    <Section id="products" className="relative border-t border-white/5">
      <SectionHeading
        eyebrow="המוצרים שלנו"
        title="מערכות תוכנה שמכסות את כל תהליכי העבודה"
        description="ממוסכית 2020 לניהול מוסך ומרכזי שירות, דרך אופק פתרונות לניהול עסק, ועד בדיקות קניה, רישוי, סליקה ו־SMS."
      />

      <div className="mt-14 space-y-16 lg:space-y-24">
        {products.map((product, index) => (
          <div key={product.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={cn(index % 2 === 1 && 'lg:order-2')}>
              <ProductVisual product={product} />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="eyebrow">{product.tagline}</span>
              </div>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{product.name}</h3>
              <p className="mt-4 text-base leading-8 text-slate-400">{product.short}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  קראו עוד על {product.name}
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <ButtonLink to="/contact" variant="ghost" className="px-4 py-2 text-xs">
                  צרו קשר
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  )
}
