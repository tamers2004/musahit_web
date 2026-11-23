import { ArrowLeft, CheckCircle2, GraduationCap, Headphones, MonitorSmartphone, Phone } from 'lucide-react'
import { services } from '@/data/services'
import { company } from '@/data/site'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

const supportPoints = [
  { icon: Headphones, title: 'HELP DESK טלפוני', text: 'מענה טלפוני מצוות מנוסה ומיומן.' },
  { icon: MonitorSmartphone, title: 'שליטה מרחוק', text: 'פתרון מהיר של תקלות ושאלות מרחוק.' },
  { icon: GraduationCap, title: 'הדרכה והסמכה', text: 'הדרכה ראשונית והסמכת עובדים חדשים.' },
]

export default function Services() {
  return (
    <>
      <Seo
        title="השירות שלנו"
        description="מרכז תמיכה HELP DESK, הדרכות והשתלמויות, שירות וליווי אישי והטמעת מערכות — שישה ימים בשבוע."
      />
      <PageHero
        eyebrow="השירות שלנו"
        title="ליווי מקצועי לאורך כל הדרך"
        description="צוות מנוסה ומיומן עומד לרשות הלקוחות שישה ימים בשבוע, עם תמיכה טלפונית, שליטה מרחוק, הדרכה והטמעה."
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              6
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">ימי תמיכה בשבוע</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              תמיכה טלפונית · שליטה מרחוק · הדרכה
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/support" variant="ghost">
          מרכז תמיכה
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <article className="card flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand-500/15 bg-brand-50 text-brand-600">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-line bg-surface-muted px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted">{service.short}</p>
                <ul className="mt-4 space-y-2.5">
                  {service.description.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] leading-6 text-ink-700">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink to={service.to} variant="ghost" className="mt-6 self-start">
                  לפרטים
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line pb-0">
        <div className="panel-dark p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow-dark">מרכז התמיכה שלנו</span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                תמיכה אנושית, בעברית, שישה ימים בשבוע
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">
                מרכז תמיכה HELP DESK המבוסס על תמיכה טלפונית ובשליטה מרחוק, עם צוות מנוסה
                ומיומן העומד לרשות הלקוחות.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {supportPoints.map((point) => {
                  const IconComponent = point.icon
                  return (
                    <div
                      key={point.title}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5"
                    >
                      <IconComponent className="h-4 w-4 text-signal" aria-hidden="true" />
                      <span className="mt-2 block text-[12px] font-bold text-white">{point.title}</span>
                      <span className="mt-1 block text-[11px] leading-5 text-white/50">
                        {point.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2.5">
              <a href={company.phoneHref} className="btn-white whitespace-nowrap" dir="ltr">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">{company.phone}</span>
              </a>
              <ButtonLink to="/support" variant="outlineWhite">
                מרכז תמיכה
              </ButtonLink>
              <ButtonLink to="/training" variant="outlineWhite">
                הדרכות והשתלמויות
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
