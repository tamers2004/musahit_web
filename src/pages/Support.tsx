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
      >
        <ButtonLink href={company.phoneHref}>
          <Phone className="h-4 w-4" />
          התקשרו לתמיכה
        </ButtonLink>
        <ButtonLink to="/contact" variant="ghost">
          פתיחת פנייה
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-white">{point.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{point.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="פרטי התמיכה"
            title="איך פונים אלינו?"
            description="ניתן להתקשר למשרד בשעות הפעילות או לשלוח פנייה דרך טופס יצירת הקשר. לצורך תמיכה מרחוק יינתן מענה על ידי הצוות."
          />
          <div className="card p-6 sm:p-8">
            <dl className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">טלפון</dt>
                <dd>
                  <a href={company.phoneHref} className="whitespace-nowrap font-semibold text-white" dir="ltr">
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">דוא״ל</dt>
                <dd>
                  <a href={`mailto:${company.email}`} className="font-semibold text-white" dir="ltr">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">שעות פעילות</dt>
                <dd className="font-semibold text-white">{company.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SmartImage
            image={images.supportHeadset}
            className="w-full rounded-3xl border border-white/10 object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="צוות התמיכה"
              title="אנשים אמיתיים מאחורי כל פנייה"
              description="צוות מנוסה ומיומן מעניק מענה טלפוני ושליטה מרחוק, שישה ימים בשבוע, בשעות הפעילות של המשרד."
            />
            <ButtonLink href={company.phoneHref} className="mt-6">
              <Phone className="h-4 w-4" />
              התקשרו לתמיכה
            </ButtonLink>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
