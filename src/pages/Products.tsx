import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { products } from '@/data/products'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProductVisual } from '@/components/products/ProductVisual'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Products() {
  return (
    <>
      <Seo
        title="המוצרים שלנו"
        description="מוסכית 2020, בדיקת קניה לרכב, אופק פתרונות, SMSender, אישורית זהב ורישוי 2020 — מערכות תוכנה לניהול עסק, מוסך ומרכזי שירות."
      />
      <PageHero
        eyebrow="המוצרים שלנו"
        title="מערכות תוכנה לניהול מוסך, מרכזי שירות ועסקים"
        description="מגוון פתרונות שנבנו לאורך עשרות שנים של ניסיון בתחום הרכב והניהול העסקי."
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          הרחבות ומודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.05}>
              <article className="card flex h-full flex-col p-5 sm:p-6">
                <ProductVisual product={product} className="mb-6" />
                <span className="eyebrow w-fit">{product.tagline}</span>
                <h2 className="mt-4 text-2xl font-bold text-ink-950">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{product.short}</p>

                <ul className="mt-5 space-y-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/products/${product.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  קראו עוד
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
