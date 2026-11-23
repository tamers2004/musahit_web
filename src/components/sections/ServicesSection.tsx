import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'

export function ServicesSection() {
  return (
    <Section className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative">
        <SectionHeading
          eyebrow="השירות שלנו"
          title="לא רק תוכנה — גם ליווי, הדרכה ותמיכה"
          description="צוות מנוסה ומיומן עומד לרשות הלקוחות שישה ימים בשבוע, עם מרכז תמיכה, מרכז הדרכה וליווי אישי."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <Link to={service.to} className="card group flex h-full flex-col p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-cyan-200">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{service.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  לפרטים
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
