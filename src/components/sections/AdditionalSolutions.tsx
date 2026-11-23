import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { featuredModules } from '@/data/modules'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ModuleGlyph } from '@/components/ui/ModuleGlyph'
import { SmartImage } from '@/components/ui/SmartImage'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function AdditionalSolutions() {
  return (
    <Section className="border-t border-line bg-surface-muted">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="הרחבות ומודולים"
          title="פתרונות נוספים שמתרחבים יחד עם העסק"
          description="מודולים לשינוע רכב, בר קוד, הזמנות, סליקה, SMS, CRM ועוד — בהתאמה לצורכי המוסך או העסק."
        />
        <ButtonLink to="/modules" variant="soft" className="shrink-0">
          כל המודולים
          <ArrowLeft className="h-4 w-4" />
        </ButtonLink>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredModules.map((module, index) => (
          <Reveal key={module.slug} delay={index * 0.06}>
            <Link to={`/modules/${module.slug}`} className="card group flex h-full flex-col p-5">
              {module.image ? (
                <div className="relative overflow-hidden rounded-xl border border-line bg-white">
                  <SmartImage
                    image={module.image}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <ModuleGlyph
                    module={module}
                    size="sm"
                    className="absolute bottom-2 right-2 shadow-card ring-1 ring-ink-950/5"
                  />
                </div>
              ) : (
                <ModuleGlyph module={module} size="md" />
              )}
              <h3 className="mt-5 text-lg font-bold text-ink-950 transition-colors group-hover:text-brand-600">
                {module.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">{module.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                לפרטים
                <ArrowLeft className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {featuredModules.map((module) => (
          <Link
            key={module.slug}
            to={`/modules/${module.slug}`}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-500/40 hover:text-brand-600"
          >
            {module.name}
          </Link>
        ))}
      </div>
    </Section>
  )
}
