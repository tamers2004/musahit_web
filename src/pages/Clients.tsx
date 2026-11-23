import { clientGroups, clientLogos } from '@/data/clients'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { LogoTile } from '@/components/ui/MediaFrame'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Clients() {
  return (
    <>
      <Seo
        title="הלקוחות שלנו"
        description="בין לקוחותינו יבואני רכב מהמובילים בישראל: דלק מוטורס, יוניון מוטורס, טלקאר ולקסוס מוטורס."
      />
      <PageHero
        eyebrow="הלקוחות שלנו"
        title="לקוחות מובילים בישראל בוחרים באייל פתרונות תוכנה"
        description="מספר ההתקנות הגדול בישראל של מערכת מוסכית 2020 הקנה לחברה ניסיון רב ביישום מערכות לניהול מוסך ומרכזי שירות."
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/about" variant="ghost">
          אודותינו
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="יבואני רכב"
          title="מלקוחותינו"
          description="רשימת היבואנים והמותגים כפי שמופיעה באתר החברה."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {clientGroups.map((group, index) => (
            <Reveal key={group.importer} delay={index * 0.06}>
              <div className="card flex h-full flex-col p-8">
                <h2 className="text-2xl font-bold text-white">{group.importer}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <SectionHeading
          eyebrow="מותגים"
          title="מותגי הרכב שאיתם אנו עובדים"
          description="היבואנים והמותגים המופיעים באתר החברה."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((logo, index) => (
            <Reveal key={logo.name} delay={index * 0.03}>
              <LogoTile image={logo.image} />
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
