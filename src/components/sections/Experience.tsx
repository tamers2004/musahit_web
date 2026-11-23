import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'
import {
  aboutHighlights,
  aboutParagraphs,
  experiencePhotos,
} from '@/data/about'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'

const values = ['ניסיון מקצועי', 'פתרונות מתקדמים', 'שירות ותמיכה', 'ליווי והדרכה']

export function Experience() {
  return (
    <Section id="about" className="relative border-t border-line bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="אודותינו"
            title="בית תוכנה ותיק עם ניסיון שנבנה לאורך עשורים"
            description={aboutParagraphs[1]}
          />
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-muted">{aboutParagraphs[2]}</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {values.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink to="/about" variant="ghost" className="btn-icon-move mt-7">
            עוד על אייל פתרונות תוכנה
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Reveal className="col-span-2">
            <div className="group relative overflow-hidden rounded-2xl border border-line shadow-card">
              <SmartImage
                image={experiencePhotos[0]}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent px-5 pb-4 pt-16 text-sm font-bold text-white">
                מוסכים ומרכזי שירות בכל הארץ
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group relative overflow-hidden rounded-2xl border border-line shadow-card">
              <SmartImage
                image={experiencePhotos[1]}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent opacity-60" />
              <span className="absolute bottom-3 right-3 rounded-lg border border-white/20 bg-white/15 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                הצוות שלנו
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col gap-3 sm:gap-4">
            <div className="group overflow-hidden rounded-2xl border border-line shadow-card">
              <SmartImage
                image={experiencePhotos[2]}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-brand-500/15 bg-brand-50 p-4">
              <span className="text-3xl font-extrabold tracking-tight text-brand-700 tabular-nums sm:text-4xl">
                1979
              </span>
              <span className="mt-1 text-[11px] font-medium leading-5 text-brand-700/70">
                שנת ייסוד בית התוכנה
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {aboutHighlights.slice(0, 2).map((highlight, index) => (
          <Reveal key={highlight.title} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-surface-muted p-5 sm:p-6">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand-500/15 bg-white text-brand-600 shadow-card">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-base font-extrabold tracking-tight text-ink-950">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{highlight.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
