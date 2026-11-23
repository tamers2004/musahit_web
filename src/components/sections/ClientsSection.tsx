import { clientGroups, clientLogos } from '@/data/clients'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { LogoTile } from '@/components/ui/MediaFrame'

export function ClientsSection() {
  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="הלקוחות שלנו"
        title="מלקוחותינו המובילים בשוק הרכב בישראל"
        description="בין לקוחותינו יבואני רכב מהמובילים בישראל. מספר ההתקנות הגדול של מוסכית 2020 הקנה לחברה ניסיון רב ביישום מערכות לניהול מוסך."
        align="center"
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {clientLogos.slice(0, 8).map((logo, index) => (
          <Reveal key={logo.name} delay={index * 0.04}>
            <LogoTile image={logo.image} />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {clientGroups.map((group) => (
          <span
            key={group.importer}
            className="rounded-full border border-line bg-surface-muted px-4 py-2 text-sm font-medium text-ink-700"
          >
            {group.importer}
          </span>
        ))}
      </div>

      <div className="mt-8 text-center">
        <ButtonLink to="/clients" variant="soft">
          עוד על הלקוחות שלנו
        </ButtonLink>
      </div>
    </Section>
  )
}
