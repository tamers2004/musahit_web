import { useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { news } from '@/data/news'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { FilterPills, type FilterItem } from '@/components/ui/FilterPills'
import { SmartImage } from '@/components/ui/SmartImage'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function News() {
  const [active, setActive] = useState('all')

  const categories = useMemo(
    () => Array.from(new Set(news.map((item) => item.category))),
    [],
  )

  const filters: FilterItem[] = [
    { id: 'all', label: 'הכל', count: news.length },
    ...categories.map((category) => ({
      id: category,
      label: category,
      count: news.filter((item) => item.category === category).length,
    })),
  ]

  const visible = active === 'all' ? news : news.filter((item) => item.category === active)

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
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
              {news.length}
            </span>
            <span className="mt-1 block text-xs font-medium text-muted">עדכונים אחרונים</span>
            <span className="mt-3 block h-px w-full bg-line" />
            <span className="mt-3 block text-[11px] leading-5 text-muted">
              מודולים חדשים, מבצעים ועדכוני מערכת
            </span>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/modules" variant="ghost">
          הרחבות ומודולים
        </ButtonLink>
      </PageHero>

      <Section>
        <FilterPills
          items={filters}
          active={active}
          onChange={setActive}
          label="סינון עדכונים לפי קטגוריה"
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {visible.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
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
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-xl font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h2>
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

      <ContactCTA />
    </>
  )
}
