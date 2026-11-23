import { useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUp, CheckCircle2, Layers, MonitorSmartphone } from 'lucide-react'
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
import { SpotlightLink } from '@/components/ui/SpotlightLink'
import { ContactCTA } from '@/components/sections/ContactCTA'
import NotFound from '@/pages/NotFound'

const pageSections = [
  { id: 'overview', label: 'סקירה' },
  { id: 'features', label: 'יכולות עיקריות' },
  { id: 'gallery', label: 'מהמערכת' },
  { id: 'modules', label: 'הרחבות' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return <NotFound />
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)
  const hasGallery = product.gallery.length > 0

  return (
    <>
      <Seo title={product.name} description={product.short} />
      <PageHero
        eyebrow={product.tagline}
        title={product.name}
        description={product.short}
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
              {product.latin ?? product.name}
            </span>
            <span className="mt-2 block text-sm font-extrabold text-ink-950">
              {product.featured ? 'מערכת הדגל של החברה' : 'פתרון תוכנה מקצועי'}
            </span>
            <span className="mt-2 block text-[11px] leading-5 text-muted">
              לפרטים, הדגמה והתאמה לעסק — נשמח לעזור.
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          כל המוצרים
        </ButtonLink>
      </PageHero>

      <div className="sticky top-16 z-40 border-b border-line bg-white/[0.92] backdrop-blur-xl">
        <div className="container-page">
          <nav aria-label="ניווט בעמוד המוצר" className="no-scrollbar flex gap-1 overflow-x-auto py-2">
            {pageSections
              .filter((section) => section.id !== 'gallery' || hasGallery)
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="shrink-0 rounded-lg px-3 py-2 text-[12px] font-bold text-ink-700 transition-colors hover:bg-surface-muted hover:text-brand-700"
                >
                  {section.label}
                </a>
              ))}
          </nav>
        </div>
      </div>

      <Section id="overview" style={{ scrollMarginTop: '9.5rem' }}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-40">
              <ProductVisual product={product} priority />
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-line bg-surface-muted p-3">
                  <MonitorSmartphone className="h-4 w-4 text-brand-600" aria-hidden="true" />
                  <span className="mt-2 block text-[11px] font-bold leading-5 text-ink-900">
                    מידע עדכני בכל מקום
                  </span>
                </div>
                <div className="rounded-xl border border-line bg-surface-muted p-3">
                  <Layers className="h-4 w-4 text-brand-600" aria-hidden="true" />
                  <span className="mt-2 block text-[11px] font-bold leading-5 text-ink-900">
                    ניתן להרחבה במודולים
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading eyebrow="סקירה" title={`על ${product.name}`} />
            <div className="prose-he mt-5">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.features.slice(0, 4).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface-muted p-3.5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <span className="text-[12px] leading-5 text-ink-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/contact">לתיאום הדגמה</ButtonLink>
              <ButtonLink to="/modules" variant="ghost">
                הרחבות ומודולים
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id="features"
        className="border-t border-line bg-surface-muted"
        style={{ scrollMarginTop: '9.5rem' }}
      >
        <SectionHeading
          index="01"
          eyebrow="יכולות עיקריות"
          title={`מה כולל ${product.name}`}
          description="רשימת היכולות כפי שהיא מופיעה במערכת ובאתר החברה."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.025}>
              <div className="flex h-full items-start gap-2.5 rounded-xl border border-line bg-white p-4 shadow-card">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <span className="text-[12px] leading-6 text-ink-700">{feature}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {hasGallery ? (
        <Section id="gallery" style={{ scrollMarginTop: '9.5rem' }}>
          <SectionHeading
            index="02"
            eyebrow="מהמערכת"
            title="תמונות וצילומי מסך"
            description="צילומי מסך ותמונות מקוריות מתוך המוצר ומהאתר של החברה."
          />
          <div className="mt-8">
            <ImageGallery items={product.gallery} columns={3} />
          </div>
        </Section>
      ) : null}

      <Section
        id="modules"
        className="border-t border-line bg-surface-muted"
        style={{ scrollMarginTop: '9.5rem' }}
      >
        <SectionHeading
          index="03"
          eyebrow="הרחבות ומודולים"
          title="המודולים שמשלימים את המערכת"
          description="ניתן להרחיב את המערכת במודולים לתפעול, מכירות, שיווק וניהול בהתאם לצורכי העסק."
          action={
            <ButtonLink to="/modules" variant="ghost" className="btn-icon-move">
              כל המודולים
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredModules.slice(0, 3).map((module) => (
            <SpotlightLink
              key={module.slug}
              to={`/modules/${module.slug}`}
              className="card card-hover flex h-full flex-col p-5"
            >
              <ModuleGlyph module={module} size="md" />
              <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                {module.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{module.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                לפרטים
                <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
              </span>
            </SpotlightLink>
          ))}
        </div>
      </Section>

      {related.length ? (
        <Section className="border-t border-line">
          <SectionHeading eyebrow="עוד מהמוצרים" title="פתרונות נוספים" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <SpotlightLink
                key={item.slug}
                to={`/products/${item.slug}`}
                className="card card-hover flex h-full flex-col p-5"
              >
                <h3 className="text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{item.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                  קראו עוד
                  <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
                </span>
              </SpotlightLink>
            ))}
          </div>
        </Section>
      ) : null}

      <div className="border-t border-line bg-surface-muted py-10">
        <div className="container-page flex justify-center">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[11px] font-bold text-ink-700 shadow-card transition-colors hover:text-brand-700"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            חזרה לסקירה
          </a>
        </div>
      </div>

      <ContactCTA />
    </>
  )
}
