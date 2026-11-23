import { useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getNewsItem, news } from '@/data/news'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
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
        {item.to ? (
          <ButtonLink to={item.to} className="btn-icon-move">
            לעמוד הקשור
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        ) : null}
        <ButtonLink to="/news" variant="ghost">
          כל העדכונים
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface-muted shadow-card">
              <SmartImage image={item.image} priority className="h-auto w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="prose-he mt-8">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {item.to ? (
            <ButtonLink to={item.to} className="btn-icon-move mt-8">
              קראו עוד
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          ) : null}
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">עדכונים נוספים</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
              עוד מהחידושים שלנו
            </h2>
          </div>
          <ButtonLink to="/news" variant="ghost" className="btn-icon-move shrink-0">
            כל העדכונים
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.05}>
              <SpotlightLink
                to={`/news/${entry.slug}`}
                className="card card-hover flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/8] overflow-hidden bg-surface-muted">
                  <SmartImage
                    image={entry.image}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-600">
                    {entry.category}
                  </span>
                  <h3 className="mt-1.5 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                    {entry.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-muted">{entry.excerpt}</p>
                </div>
              </SpotlightLink>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
