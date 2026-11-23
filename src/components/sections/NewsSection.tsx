import { ArrowLeft } from 'lucide-react'
import { news } from '@/data/news'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { SpotlightLink } from '@/components/ui/SpotlightLink'

export function NewsSection() {
  return (
    <Section id="news" className="relative border-t border-line bg-white">
      <SectionHeading
        index="06"
        eyebrow="מה חדש"
        title="עדכונים, מודולים חדשים ומבצעים"
        description="הכירו את החידושים האחרונים במערכות אייל פתרונות תוכנה."
        action={
          <ButtonLink to="/news" variant="ghost" className="btn-icon-move">
            כל העדכונים
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {news.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.05}>
            <SpotlightLink
              to={`/news/${item.slug}`}
              className="card card-hover flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/8] overflow-hidden bg-surface-muted">
                <SmartImage
                  image={item.image}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-700 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{item.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                  קראו עוד
                  <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
                </span>
              </div>
            </SpotlightLink>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
