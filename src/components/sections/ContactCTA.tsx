import { ArrowLeft, Clock, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { company } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'

const contactItems = [
  {
    icon: MapPin,
    label: 'כתובת',
    value: company.address,
    href: company.waze,
    external: true,
  },
  { icon: Phone, label: 'טלפון', value: company.phone, href: company.phoneHref, ltr: true },
  { icon: Mail, label: 'דוא״ל', value: company.email, href: `mailto:${company.email}`, ltr: true },
  { icon: Printer, label: 'פקס', value: company.fax, ltr: true },
  { icon: Clock, label: 'שעות פעילות', value: company.hours },
]

export function ContactCTA() {
  return (
    <Section id="contact" className="relative border-t border-line bg-surface-muted">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        <Reveal>
          <div className="panel-dark h-full p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="eyebrow-dark">צרו קשר</span>
              <h2 className="mt-4 text-balance text-[1.85rem] font-extrabold leading-[1.12] tracking-tight sm:text-3xl lg:text-[2.15rem]">
                בואו למצוא את הפתרון המתאים לעסק שלכם
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                נשמח לעמוד לרשותכם בכל שאלה על מוסכית 2020, אופק פתרונות, מודולים ותהליכי
                הטמעה.
              </p>

              <ul className="mt-6 space-y-4">
                {contactItems.map((item) => {
                  const IconComponent = item.icon
                  const content = (
                    <span className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-signal">
                        <IconComponent className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                          {item.label}
                        </span>
                        <span
                          className={`mt-0.5 block text-[13px] font-semibold text-white/85${item.ltr ? ' whitespace-nowrap tabular-nums' : ''}`}
                          dir={item.ltr ? 'ltr' : undefined}
                        >
                          {item.value}
                        </span>
                      </span>
                    </span>
                  )

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block rounded-lg transition-opacity hover:opacity-80"
                          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <a href={company.phoneHref} className="btn-white whitespace-nowrap" dir="ltr">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span className="tabular-nums">{company.phone}</span>
                </a>
                <a
                  href={company.waze}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-white"
                >
                  ניווט אלינו
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card h-full p-5 sm:p-7 lg:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-ink-950">שלחו לנו הודעה</h3>
                <p className="mt-1 text-xs leading-6 text-muted">נחזור אליכם בהקדם עם כל המידע.</p>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">
                זמינים 6 ימים בשבוע
              </span>
            </div>
            <div className="pt-5">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
