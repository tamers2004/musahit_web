import { aboutGallery, aboutHighlights, aboutParagraphs, companyFacts } from '@/data/about'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function About() {
  return (
    <>
      <Seo
        title="אודותינו"
        description="אייל פתרונות תוכנה בע״מ נוסדה בשנת 1979 ומתמחה בתוכנות לניהול עסק ובמערכות לניהול מוסכים ומרכזי שירות."
      />
      <PageHero
        eyebrow="אודותינו"
        title="אייל פתרונות תוכנה — ניסיון של עשרות שנים בפיתוח מערכות"
        description={aboutParagraphs[0]}
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          המוצרים שלנו
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <div className="prose-he">
              {aboutParagraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {companyFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 0.08}>
                <div className="card h-full p-6">
                  <span className="block text-3xl font-black text-white">{fact.value}</span>
                  <span className="mt-2 block text-sm text-slate-400">{fact.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <SectionHeading
          eyebrow="בית התוכנה שלנו"
          title="חדשנות, פיתוח ומערכות בקנה מידה עולמי"
          description="לאורך השנים בית התוכנה יוזם ומוביל בפיתוח חידושים בענף ומשמש מקור השראה לכלל השוק."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {aboutHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.06}>
              <div className="card h-full p-6">
                <h3 className="text-lg font-bold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{highlight.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <SectionHeading
          eyebrow="מהשטח"
          title="תמונות מהעבודה שלנו"
          description="מוסכים, צוות ומשרד — תמונות מקוריות מאתר החברה."
          align="center"
        />
        <div className="mt-10">
          <ImageGallery items={aboutGallery} columns={3} />
        </div>
      </Section>

      <ClientsSection />
      <ContactCTA />
    </>
  )
}
