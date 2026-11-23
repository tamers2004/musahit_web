import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'
import {
  aboutGallery,
  aboutHighlights,
  aboutParagraphs,
  companyFacts,
} from '@/data/about'
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
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              1979
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">שנת ייסוד בית התוכנה</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              מעל 40 שנות ניסיון בפיתוח מערכות תוכנה
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          המוצרים שלנו
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="הסיפור שלנו"
              title="בית תוכנה ישראלי שמלווה עסקים כבר עשורים"
            />
            <div className="prose-he mt-5">
              {aboutParagraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {['ניסיון מקצועי', 'פתרונות מתקדמים', 'שירות ותמיכה', 'ליווי והדרכה'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {companyFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 0.06}>
                <div className="card h-full p-5">
                  <span className="block text-2xl font-extrabold tracking-tight text-ink-950 tabular-nums sm:text-3xl">
                    {fact.value}
                  </span>
                  <span className="mt-1.5 block text-[11px] font-medium leading-5 text-muted">
                    {fact.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <SectionHeading
          index="02"
          eyebrow="בית התוכנה שלנו"
          title="חדשנות, פיתוח ומערכות בקנה מידה עולמי"
          description="לאורך השנים בית התוכנה יוזם ומוביל בפיתוח חידושים בענף ומשמש מקור השראה לכלל השוק."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 0.05}>
              <div className="card card-hover h-full p-5 sm:p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-500/15 bg-brand-50 text-brand-600">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink-950">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{highlight.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          index="03"
          eyebrow="מהשטח"
          title="תמונות מהעבודה שלנו"
          description="מוסכים, צוות ומשרד — תמונות מקוריות מאתר החברה."
          align="center"
        />
        <div className="mt-8">
          <ImageGallery items={aboutGallery} columns={3} />
        </div>
      </Section>

      <ClientsSection />
      <ContactCTA />
    </>
  )
}
