import { ArrowLeft } from 'lucide-react'
import { clientGroups, clientLogos } from '@/data/clients'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { LogoTile } from '@/components/ui/MediaFrame'
import { ImporterCards } from '@/components/clients/ImporterCards'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Clients() {
  return (
    <>
      <Seo
        title="הלקוחות שלנו"
        description="בין לקוחותינו יבואני רכב מהמובילים בישראל: דלק מוטורס (מאזדה, פורד, BMW), יוניון מוטורס (טויוטה, לקסוס) וטלקאר (קיה)."
      />
      <PageHero
        eyebrow="הלקוחות שלנו"
        title="לקוחות מובילים בישראל בוחרים באייל פתרונות תוכנה"
        description="מספר ההתקנות הגדול בישראל של מערכת מוסכית 2020 הקנה לחברה ניסיון רב ביישום מערכות לניהול מוסך ומרכזי שירות."
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              {clientGroups.length}
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">יבואני רכב מובילים</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              {clientLogos.length} מותגי רכב מופיעים באתר החברה
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/about" variant="ghost">
          אודותינו
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          index="01"
          eyebrow="יבואני רכב"
          title="מלקוחותינו"
          description="יבואני הרכב המובילים בישראל והמותגים שהם מייבאים, כפי שמופיעים באתר החברה."
        />
        <ImporterCards className="mt-8" />
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <SectionHeading
          index="02"
          eyebrow="מותגים"
          title="מותגי הרכב שאיתם אנו עובדים"
          description="מגוון מותגי הרכב המופיעים באתר החברה, בצבעי המקור שלהם."
          align="center"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((logo, index) => (
            <Reveal key={logo.name} delay={Math.min(index, 8) * 0.03}>
              <LogoTile image={logo.image} />
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center text-[10px] leading-5 text-muted/80">
          הלוגואים הם סימני המסחר של היצרנים בהתאמה ומוצגים לצורכי זיהוי בלבד.
        </p>
      </Section>

      <ContactCTA />
    </>
  )
}
