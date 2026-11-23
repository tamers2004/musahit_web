import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { moduleCategories, modules, type ModuleCategory } from '@/data/modules'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { FilterPills, type FilterItem } from '@/components/ui/FilterPills'
import { ModuleGlyph } from '@/components/ui/ModuleGlyph'
import { SpotlightLink } from '@/components/ui/SpotlightLink'

type FilterId = 'all' | ModuleCategory

export function AdditionalSolutions() {
  const [active, setActive] = useState<FilterId>('all')

  const filters: FilterItem[] = [
    { id: 'all', label: 'הכל', count: modules.length },
    ...moduleCategories.map((category) => ({
      id: category.id,
      label: category.label,
      count: modules.filter((module) => module.category === category.id).length,
    })),
  ]

  const visible = useMemo(() => {
    if (active === 'all') {
      return modules.filter((module) => module.featured).slice(0, 6)
    }
    return modules.filter((module) => module.category === active).slice(0, 6)
  }, [active])

  return (
    <Section id="modules" className="relative border-t border-line bg-surface-muted">
      <SectionHeading
        index="02"
        eyebrow="הרחבות ומודולים"
        title="פתרונות נוספים שמתרחבים יחד עם העסק"
        description="מודולים לשינוע רכב, בר קוד, הזמנות, סליקה, SMS, CRM, תורים, מדדים ועוד — בהתאמה לצורכי המוסך או העסק."
        action={
          <ButtonLink to="/modules" variant="ghost" className="btn-icon-move">
            כל המודולים
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        }
      />

      <div className="mt-8">
        <FilterPills
          items={filters}
          active={active}
          onChange={(id) => setActive(id as FilterId)}
          label="סינון מודולים לפי קטגוריה"
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((module, index) => {
          const categoryLabel = moduleCategories.find((category) => category.id === module.category)?.label
          return (
            <Reveal key={module.slug} delay={index * 0.04}>
              <SpotlightLink
                to={`/modules/${module.slug}`}
                className="card card-hover flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <ModuleGlyph module={module} size="md" />
                  <span className="rounded-full border border-line bg-surface-muted px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                    {categoryLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                  {module.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted">{module.short}</p>
                <ul className="mt-3 space-y-1.5">
                  {module.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[12px] leading-5 text-ink-700">
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                  לפרטים
                  <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
                </span>
              </SpotlightLink>
            </Reveal>
          )
        })}
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        מציג {visible.length} מודולים מתוך {modules.length} בסך הכול ·{' '}
        <Link to="/modules" className="font-bold text-brand-600 hover:text-brand-700">
          לכל המודולים
        </Link>
      </p>
    </Section>
  )
}
