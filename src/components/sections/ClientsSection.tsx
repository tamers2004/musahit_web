import { ArrowLeft } from 'lucide-react'
import { clientLogos } from '@/data/clients'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Marquee } from '@/components/ui/Marquee'
import { SmartImage } from '@/components/ui/SmartImage'
import { ImporterCards } from '@/components/clients/ImporterCards'

export function ClientsSection() {
  return (
    <Section id="clients" className="relative overflow-hidden border-t border-line bg-surface-muted">
      <SectionHeading
        index="05"
        eyebrow="הלקוחות שלנו"
        title="מלקוחותינו המובילים בשוק הרכב בישראל"
        description="בין לקוחותינו יבואני רכב מהמובילים בישראל. מספר ההתקנות הגדול של מוסכית 2020 הקנה לחברה ניסיון רב ביישום מערכות לניהול מוסך."
        align="center"
      />

      <ImporterCards className="mt-10" />

      <Reveal delay={0.05} className="mt-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-extrabold tracking-tight text-ink-950">עוד מותגי רכב</h3>
          <ButtonLink to="/clients" variant="ghost" className="btn-icon-move px-4 py-2 text-[12px]">
            כל הלקוחות והמותגים
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </ButtonLink>
        </div>
        <Marquee className="py-1">
          {clientLogos.map((logo) => (
            <span
              key={logo.name}
              className="client-logo group flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-4 shadow-card transition-colors hover:border-brand-500/20"
            >
              <SmartImage
                image={logo.image}
                className="filter-none h-auto max-h-10 w-auto max-w-full object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
              />
            </span>
          ))}
        </Marquee>
      </Reveal>

      <div className="mt-8 text-center">
        <ButtonLink to="/clients" variant="ghost" className="btn-icon-move">
          עוד על הלקוחות שלנו
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  )
}
