import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'
import { products } from '@/data/products'
import { company } from '@/data/site'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProductVisual } from '@/components/products/ProductVisual'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
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
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              6
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">מוצרי תוכנה מרכזיים</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              מעל 40 שנות ניסיון · תמיכה 6 ימים בשבוע
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          הרחבות ומודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04}>
              <SpotlightLink
                to={`/products/${product.slug}`}
                className="card card-hover flex h-full flex-col overflow-hidden p-4 sm:p-5"
              >
                <ProductVisual product={product} className="mb-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600">
                  {product.tagline}
                </span>
                <div className="mt-1.5 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700 sm:text-2xl">
                    {product.name}
                  </h2>
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-600 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:border-brand-500/30 group-hover:bg-brand-50">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted">{product.short}</p>

                <ul className="mt-4 space-y-2">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[12px] leading-5 text-ink-700">
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                  קראו עוד
                  <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
                </span>
              </SpotlightLink>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
              לא בטוחים מה מתאים לעסק שלכם?
            </h2>
            <p className="mt-1.5 text-sm leading-7 text-muted">
              נשמח להבין את הצרכים, להדגים את המערכת ולהמליץ על הפתרון המתאים.
            </p>
          </div>
          <a href={company.phoneHref} className="btn-primary whitespace-nowrap" dir="ltr">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">{company.phone}</span>
          </a>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
