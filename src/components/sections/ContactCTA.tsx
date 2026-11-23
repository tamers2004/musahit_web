import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { company } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ContactForm } from '@/components/forms/ContactForm'

const contactItems = [
  { icon: MapPin, label: 'כתובת', value: company.address, href: company.waze, external: true },
  { icon: Phone, label: 'טלפון', value: company.phone, href: company.phoneHref, ltr: true },
  { icon: Printer, label: 'פקס', value: company.fax, ltr: true },
  { icon: Mail, label: 'דוא״ל', value: company.email, href: `mailto:${company.email}`, ltr: true },
  { icon: Clock, label: 'שעות פעילות', value: company.hours },
]

export function ContactCTA() {
  return (
    <Section id="contact" className="border-t border-line bg-surface-muted">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="eyebrow">צרו קשר</span>
              <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
                בואו למצוא את הפתרון המתאים לעסק שלכם
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                נשמח לעמוד לרשותכם בכל שאלה על מוסכית 2020, אופק פתרונות, מודולים ותהליכי
                הטמעה.
              </p>

              <ul className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const IconComponent = item.icon
                  const content = (
                    <span className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand-500/20 bg-brand-50 text-brand-600">
                        <IconComponent className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">{item.label}</span>
                        <span
                          className={`mt-0.5 block text-sm font-medium text-ink-900${item.ltr ? ' whitespace-nowrap' : ''}`}
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
            </div>

            <div className="rounded-2xl border border-line bg-surface-muted p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
