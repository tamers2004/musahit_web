import { ArrowLeft, GraduationCap, Headphones, MonitorSmartphone, Phone } from 'lucide-react'
import { services } from '@/data/services'
import { company } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SpotlightLink } from '@/components/ui/SpotlightLink'

const supportPoints = [
  { icon: Headphones, label: 'HELP DESK טלפוני' },
  { icon: MonitorSmartphone, label: 'שליטה מרחוק' },
  { icon: GraduationCap, label: 'הדרכה וליווי' },
]

export function ServicesSection() {
  return (
    <Section id="services" className="relative border-t border-line bg-white">
      <SectionHeading
        index="03"
        eyebrow="השירות שלנו"
        title="לא רק תוכנה — גם ליווי, הדרכה ותמיכה"
        description="צוות מנוסה ומיומן עומד לרשות הלקוחות שישה ימים בשבוע, עם מרכז תמיכה, מרכז הדרכה וליווי אישי."
        action={
          <ButtonLink to="/services" variant="ghost" className="btn-icon-move">
            כל השירותים
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05}>
            <SpotlightLink
              to={service.to}
              className="card card-hover flex h-full flex-col p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/15 bg-brand-50 text-brand-600">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{service.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                לפרטים
                <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
              </span>
            </SpotlightLink>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950 p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-brand-500/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow-dark">תמיכה אנושית, בעברית</span>
              <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">
                צוות מנוסה עומד לרשותכם שישה ימים בשבוע
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                תמיכה טלפונית ושליטה מרחוק, הדרכה ראשונית והסמכת עובדים — כדי שהמערכת תעבוד
                חלק בכל יום עבודה.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {supportPoints.map((point) => {
                  const IconComponent = point.icon
                  return (
                    <span
                      key={point.label}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/75"
                    >
                      <IconComponent className="h-4 w-4 text-signal" aria-hidden="true" />
                      {point.label}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={company.phoneHref} className="btn-white whitespace-nowrap" dir="ltr">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">{company.phone}</span>
              </a>
              <ButtonLink to="/support" variant="outlineWhite">
                מרכז תמיכה
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
