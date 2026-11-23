import { useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react'
import { getModule, modules } from '@/data/modules'
import { company } from '@/data/site'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ModuleGlyph } from '@/components/ui/ModuleGlyph'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { MediaCard } from '@/components/ui/MediaFrame'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
import { ContactCTA } from '@/components/sections/ContactCTA'
import NotFound from '@/pages/NotFound'

const transportWorkflow = [
  'רישום רכב לשינוע בזמן קביעת תור ללקוח',
  'תכנון זמנים לכל נהג',
  'התראה בפתיחת כרטיס העבודה ועדכון מונה ק״מ בזמן האיסוף',
  'התראה בסגירת כרטיס העבודה ודיווח מונה ק״מ יציאה',
  'הדפסת אישור יציאה עם סיום העבודה',
  'איתור היסטוריית שינוע והפקת דוחות בזמן אמת',
]

export default function ModuleDetail() {
  const { slug } = useParams()
  const module = getModule(slug)

  if (!module) {
    return <NotFound />
  }

  const related = modules.filter((item) => item.slug !== module.slug).slice(0, 3)

  return (
    <>
      <Seo title={module.name} description={module.short} />
      <PageHero
        eyebrow="הרחבות ומודולים"
        title={module.name}
        description={module.short}
        aside={
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <ModuleGlyph module={module} size="lg" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-brand-600">
                הרחבה למערכת
              </span>
              <span className="mt-1 block text-sm font-extrabold text-ink-950">
                זמין להתאמה לעסק
              </span>
            </div>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          כל המודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <Reveal>
            <div className="card p-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-brand-500/15 bg-brand-50 text-brand-600">
                <Icon name={module.icon} className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm leading-7 text-muted">{module.short}</p>
              <ButtonLink to="/contact" variant="soft" className="mt-6">
                לפרטים והתאמה
              </ButtonLink>
              <a
                href={company.phoneHref}
                className="mt-4 flex items-center gap-2 text-[12px] font-bold text-ink-700 transition-colors hover:text-brand-700"
                dir="ltr"
              >
                <Phone className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                <span className="tabular-nums">{company.phone}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading eyebrow="מה המודול כולל" title={module.name} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {module.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface-muted p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    aria-hidden="true"
                  />
                  <span className="text-[12px] leading-6 text-ink-700">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {module.image ? (
        <Section className="border-t border-line bg-surface-muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="מהמערכת"
              title={module.name}
              description="תמונה מקורית מתוך מערכת ניהול מוסך מוסכית 2020."
            />
            <MediaCard image={module.image} />
          </div>
          {module.gallery?.length ? (
            <div className="mt-10">
              <ImageGallery items={module.gallery} columns={3} />
            </div>
          ) : null}
        </Section>
      ) : null}

      {module.slug === 'vehicle-transport' ? (
        <Section className="border-t border-line">
          <SectionHeading
            eyebrow="תהליך העבודה"
            title="מהזמנת התור ועד אישור היציאה"
            description="המודול מלווה את תהליך השינוע לאורך כל שלביו, מהרישום הראשוני ועד לדוחות ולמעקב."
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {transportWorkflow.map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <li className="card flex h-full items-start gap-3 p-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-sm font-extrabold text-brand-700 tabular-nums">
                    {index + 1}
                  </span>
                  <span className="text-[12px] leading-6 text-ink-700">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>
      ) : null}

      <Section className="border-t border-line bg-surface-muted">
        <SectionHeading eyebrow="מודולים נוספים" title="הרחבות נוספות" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <SpotlightLink
              key={item.slug}
              to={`/modules/${item.slug}`}
              className="card card-hover flex h-full flex-col p-5"
            >
              <ModuleGlyph module={item} size="sm" />
              <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{item.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                לפרטים
                <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
              </span>
            </SpotlightLink>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
