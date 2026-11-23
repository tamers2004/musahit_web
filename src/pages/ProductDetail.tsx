import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getProduct, products } from '@/data/products'
import { featuredModules } from '@/data/modules'
import { ModuleGlyph } from '@/components/ui/ModuleGlyph'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProductVisual } from '@/components/products/ProductVisual'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { ContactCTA } from '@/components/sections/ContactCTA'
import NotFound from '@/pages/NotFound'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return <NotFound />
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <Seo title={product.name} description={product.short} />
      <PageHero eyebrow={product.tagline} title={product.name} description={product.short}>
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          כל המוצרים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ProductVisual product={product} />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="סקירה" title={`על ${product.name}`} />
            <div className="prose-he mt-6">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="יכולות עיקריות"
          title={`מה כולל ${product.name}`}
          description="רשימת היכולות כפי שהיא מופיעה במערכת ובאתר החברה."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.03}>
              <div className="flex h-full items-start gap-2.5 rounded-xl border border-line bg-surface-muted p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-sm leading-6 text-ink-700">{feature}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {product.gallery.length ? (
        <Section className="border-t border-line">
          <SectionHeading
            eyebrow="מהמערכת"
            title="תמונות וצילומי מסך"
            description="צילומי מסך ותמונות מקוריות מתוך המוצר ומהאתר של החברה."
          />
          <div className="mt-10">
            <ImageGallery items={product.gallery} columns={3} />
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-line">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="הרחבות ומודולים"
            title="המודולים שמשלימים את המערכת"
            description="ניתן להרחיב את המערכת במודולים לתפעול, מכירות, שיווק וניהול בהתאם לצורכי העסק."
          />
          <ButtonLink to="/modules" variant="soft" className="shrink-0">
            כל המודולים
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredModules.slice(0, 3).map((module) => (
            <Link key={module.slug} to={`/modules/${module.slug}`} className="card group flex h-full flex-col p-6">
              <ModuleGlyph module={module} size="md" />
              <h3 className="mt-4 text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-600">
                {module.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{module.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                לפרטים
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {related.length ? (
        <Section className="border-t border-line">
          <SectionHeading eyebrow="עוד מהמוצרים" title="פתרונות נוספים" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to={`/products/${item.slug}`} className="card group p-6">
                <h3 className="text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-700">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  קראו עוד
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <ContactCTA />
    </>
  )
}
