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
    <Section id="contact" className="border-t border-white/5">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="eyebrow">צרו קשר</span>
              <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                אנא מלאו את הטופס ואנו ניצור עמכם קשר בהקדם
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-400">
                נשמח לעמוד לרשותכם בכל שאלה על מוסכית 2020, אופק פתרונות, מודולים ותהליכי
                הטמעה.
              </p>

              <ul className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const IconComponent = item.icon
                  const content = (
                    <span className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                        <IconComponent className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-500">{item.label}</span>
                        <span
                          className={`mt-0.5 block text-sm text-slate-200${item.ltr ? ' whitespace-nowrap' : ''}`}
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

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
