import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getModule, modules } from '@/data/modules'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { MediaCard } from '@/components/ui/MediaFrame'
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
      <PageHero eyebrow="הרחבות ומודולים" title={module.name} description={module.short}>
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          כל המודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="card flex flex-col items-start p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                <Icon name={module.icon} className="h-6 w-6" />
              </span>
              <p className="mt-6 text-sm leading-7 text-slate-400">{module.short}</p>
              <ButtonLink to="/contact" variant="soft" className="mt-6">
                לפרטים והתאמה
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading eyebrow="מה המודול כולל" title={module.name} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {module.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="text-sm leading-6 text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {module.image ? (
        <Section className="border-t border-white/5">
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
        <Section className="border-t border-white/5">
          <SectionHeading
            eyebrow="תהליך העבודה"
            title="מהזמנת התור ועד אישור היציאה"
            description="המודול מלווה את תהליך השינוע לאורך כל שלביו, מהרישום הראשוני ועד לדוחות ולמעקב."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {transportWorkflow.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <li className="card flex h-full items-start gap-3 p-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-300">{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>
      ) : null}

      <Section className="border-t border-white/5">
        <SectionHeading eyebrow="מודולים נוספים" title="הרחבות נוספות" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} to={`/modules/${item.slug}`} className="card group flex h-full flex-col p-6">
              <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-200">
                {item.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{item.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                לפרטים
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
