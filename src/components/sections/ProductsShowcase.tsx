import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'

export function ProductsShowcase() {
  return (
    <Section id="products" className="border-t border-line bg-surface-muted">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="המוצרים שלנו"
          title="מערכות תוכנה לכל תהליכי העבודה בעסק"
          description="ממוסכית 2020 לניהול מוסך ומרכזי שירות, דרך אופק פתרונות לניהול עסק, ועד בדיקות קניה, רישוי, סליקה ו־SMS."
        />
        <ButtonLink to="/products" variant="soft" className="shrink-0">
          כל המוצרים
          <ArrowLeft className="h-4 w-4" />
        </ButtonLink>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 0.04}>
            <Link
              to={`/products/${product.slug}`}
              className="card group flex h-full flex-col p-5"
            >
              <div className="overflow-hidden rounded-xl border border-line bg-white">
                <SmartImage
                  image={product.image}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-600">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{product.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                לפרטים נוספים
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
