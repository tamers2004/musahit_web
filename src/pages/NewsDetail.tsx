import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getNewsItem, news } from '@/data/news'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ContactCTA } from '@/components/sections/ContactCTA'
import NotFound from '@/pages/NotFound'

export default function NewsDetail() {
  const { slug } = useParams()
  const item = getNewsItem(slug)

  if (!item) {
    return <NotFound />
  }

  const related = news.filter((entry) => entry.slug !== item.slug).slice(0, 3)

  return (
    <>
      <Seo title={item.title} description={item.excerpt} />
      <PageHero eyebrow={item.category} title={item.title} description={item.excerpt}>
        {item.to ? <ButtonLink to={item.to}>לעמוד הקשור</ButtonLink> : null}
        <ButtonLink to="/news" variant="ghost">
          כל העדכונים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="max-w-3xl">
          <div className="prose-he">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {item.to ? (
            <ButtonLink to={item.to} className="mt-8">
              קראו עוד
              <ArrowLeft className="h-4 w-4" />
            </ButtonLink>
          ) : null}
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.05}>
              <Link to={`/news/${entry.slug}`} className="card group flex h-full flex-col p-6">
                <span className="eyebrow w-fit">{entry.category}</span>
                <h3 className="mt-4 text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-700">
                  {entry.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{entry.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
