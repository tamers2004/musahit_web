import { clientBrands, clientGroups } from '@/data/clients'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function ClientsSection() {
  return (
    <Section className="border-t border-white/5">
      <SectionHeading
        eyebrow="הלקוחות שלנו"
        title="מלקוחותינו המובילים בשוק הרכב בישראל"
        description="בין לקוחותינו יבואני רכב מהמובילים בישראל. מספר ההתקנות הגדול של מוסכית 2020 הקנה לחברה ניסיון רב ביישום מערכות לניהול מוסך."
        align="center"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clientGroups.map((group, index) => (
          <Reveal key={group.importer} delay={index * 0.06}>
            <div className="card flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="text-lg font-bold text-white">{group.importer}</span>
              <span className="mt-2 text-xs text-slate-400">{group.brands.join(' · ')}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {clientBrands.map((brand) => (
          <span
            key={brand}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300"
          >
            {brand}
          </span>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink to="/clients" variant="soft">
          עוד על הלקוחות שלנו
        </ButtonLink>
      </div>
    </Section>
  )
}
