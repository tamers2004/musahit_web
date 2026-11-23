import { Clock, Headphones, MonitorSmartphone, Phone } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { images } from '@/data/imageAssets'
import { company } from '@/data/site'
import { ContactCTA } from '@/components/sections/ContactCTA'

const supportPoints = [
  {
    icon: Headphones,
    title: 'HELP DESK טלפוני',
    text: 'מרכז תמיכה המבוסס על תמיכה טלפונית, עם צוות מנוסה ומיומן.',
  },
  {
    icon: MonitorSmartphone,
    title: 'שליטה מרחוק',
    text: 'מתן מענה מרחוק לצד תמיכה טלפונית, לפתרון מהיר של תקלות ושאלות.',
  },
  {
    icon: Clock,
    title: 'שישה ימים בשבוע',
    text: 'הצוות עומד לרשות הלקוחות שישה ימים בשבוע, בשעות הפעילות של המשרד.',
  },
]

export default function Support() {
  return (
    <>
      <Seo
        title="מרכז תמיכה"
        description="מרכז תמיכה HELP DESK טלפוני ושליטה מרחוק, שישה ימים בשבוע, עבור לקוחות אייל פתרונות תוכנה."
      />
      <PageHero
        eyebrow="מרכז תמיכה"
        title="תמיכה מקצועית, שישה ימים בשבוע"
        description="לחברה מרכז תמיכה HELP DESK המבוסס על תמיכה טלפונית ובשליטה מרחוק, עם צוות מנוסה ומיומן."
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              6
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">ימי תמיכה בשבוע</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              תמיכה טלפונית · שליטה מרחוק
            </span>
          </div>
        }
      >
        <ButtonLink href={company.phoneHref} className="btn-icon-move">
          <Phone className="h-4 w-4" aria-hidden="true" />
          התקשרו לתמיכה
        </ButtonLink>
        <ButtonLink to="/contact" variant="ghost">
          פתיחת פנייה
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Reveal key={point.title} delay={index * 0.05}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/15 bg-brand-50 text-brand-600">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-base font-extrabold tracking-tight text-ink-950">
                    {point.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{point.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="פרטי התמיכה"
            title="איך פונים אלינו?"
            description="ניתן להתקשר למשרד בשעות הפעילות או לשלוח פנייה דרך טופס יצירת הקשר. לצורך תמיכה מרחוק יינתן מענה על ידי הצוות."
          />
          <div className="card p-6 sm:p-7">
            <dl className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">טלפון</dt>
                <dd>
                  <a
                    href={company.phoneHref}
                    className="whitespace-nowrap font-bold text-ink-950 tabular-nums hover:text-brand-700"
                    dir="ltr"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">דוא״ל</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-bold text-ink-950 hover:text-brand-700"
                    dir="ltr"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">שעות פעילות</dt>
                <dd className="font-bold text-ink-950">{company.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SmartImage
            image={images.supportHeadset}
            className="w-full rounded-2xl border border-line object-cover shadow-card"
          />
          <div>
            <SectionHeading
              eyebrow="צוות התמיכה"
              title="אנשים אמיתיים מאחורי כל פנייה"
              description="צוות מנוסה ומיומן מעניק מענה טלפוני ושליטה מרחוק, שישה ימים בשבוע, בשעות הפעילות של המשרד."
            />
            <ButtonLink href={company.phoneHref} className="mt-6">
              <Phone className="h-4 w-4" aria-hidden="true" />
              התקשרו לתמיכה
            </ButtonLink>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
