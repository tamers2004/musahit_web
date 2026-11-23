import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { news } from '@/data/news'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function News() {
  return (
    <>
      <Seo
        title="מה חדש"
        description="עדכונים, מודולים חדשים ומבצעים של אייל פתרונות תוכנה: שינוע רכב, בדיקות קניה, מרמ ומועדון לקוחות."
      />
      <PageHero
        eyebrow="מה חדש"
        title="עדכונים, מודולים חדשים ומבצעים"
        description="הכירו את החידושים האחרונים במערכות אייל פתרונות תוכנה."
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          הרחבות ומודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <article className="card flex h-full flex-col p-6 sm:p-8">
                <span className="eyebrow w-fit">{item.category}</span>
                <h2 className="mt-4 text-2xl font-bold text-ink-950">{item.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{item.excerpt}</p>
                <Link
                  to={`/news/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                >
                  קראו עוד
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
