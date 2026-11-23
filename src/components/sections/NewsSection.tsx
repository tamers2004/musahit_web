import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { news } from '@/data/news'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function NewsSection() {
  return (
    <Section className="border-t border-white/5">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="מה חדש"
          title="עדכונים, מודולים חדשים ומבצעים"
          description="הכירו את החידושים האחרונים במערכות אייל פתרונות תוכנה."
        />
        <ButtonLink to="/news" variant="soft" className="shrink-0">
          כל העדכונים
          <ArrowLeft className="h-4 w-4" />
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {news.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.06}>
            <Link to={`/news/${item.slug}`} className="card group flex h-full flex-col p-6">
              <span className="eyebrow w-fit">{item.category}</span>
              <h3 className="mt-4 text-lg font-bold text-white transition-colors group-hover:text-cyan-200">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{item.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                קראו עוד
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
