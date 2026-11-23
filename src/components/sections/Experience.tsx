import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { aboutParagraphs, companyFacts, experiencePhotos } from '@/data/about'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'

export function Experience() {
  return (
    <Section className="border-t border-line">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <SectionHeading
            eyebrow="ניסיון ומובילות"
            title="בית תוכנה ותיק עם ניסיון שנבנה לאורך עשרות שנים"
            description={aboutParagraphs[1]}
          />
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{aboutParagraphs[2]}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {['ניסיון מקצועי', 'פתרונות מתקדמים', 'שירות ותמיכה', 'ליווי והדרכה'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink to="/about" variant="soft" className="mt-7">
            עוד על אייל פתרונות תוכנה
            <ArrowLeft className="h-4 w-4" />
          </ButtonLink>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal className="col-span-2">
            <div className="group relative overflow-hidden rounded-2xl border border-line">
              <SmartImage
                image={experiencePhotos[0]}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/75 to-transparent px-5 pb-4 pt-16 text-sm font-semibold text-white">
                מוסכים ומרכזי שירות בכל הארץ
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group h-full overflow-hidden rounded-2xl border border-line">
              <SmartImage
                image={experiencePhotos[1]}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col gap-4">
            <div className="group overflow-hidden rounded-2xl border border-line">
              <SmartImage
                image={experiencePhotos[2]}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="card flex flex-1 flex-col justify-center p-5">
              <span className="text-3xl font-bold text-brand-600">40+</span>
              <span className="mt-1 text-xs leading-5 text-muted">שנות ניסיון בפיתוח מערכות</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {companyFacts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 0.05}>
            <div className="card h-full p-6">
              <span className="block text-3xl font-bold text-ink-950 sm:text-4xl">{fact.value}</span>
              <span className="mt-2 block text-sm text-muted">{fact.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
