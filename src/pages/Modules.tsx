import { useMemo, useState } from 'react'
import { ArrowLeft, Search, X } from 'lucide-react'
import { moduleCategories, modules, type ModuleCategory } from '@/data/modules'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { FilterPills, type FilterItem } from '@/components/ui/FilterPills'
import { ModuleGlyph } from '@/components/ui/ModuleGlyph'
import { SpotlightLink } from '@/components/ui/SpotlightLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

type FilterId = 'all' | ModuleCategory

export default function Modules() {
  const [active, setActive] = useState<FilterId>('all')
  const [query, setQuery] = useState('')

  const filters: FilterItem[] = [
    { id: 'all', label: 'כל המודולים', count: modules.length },
    ...moduleCategories.map((category) => ({
      id: category.id,
      label: category.label,
      count: modules.filter((module) => module.category === category.id).length,
    })),
  ]

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return modules.filter((module) => {
      const matchesCategory = active === 'all' || module.category === active
      const matchesQuery =
        !term ||
        module.name.toLowerCase().includes(term) ||
        module.short.toLowerCase().includes(term) ||
        module.features.some((feature) => feature.toLowerCase().includes(term))
      return matchesCategory && matchesQuery
    })
  }, [active, query])

  const reset = () => {
    setActive('all')
    setQuery('')
  }

  return (
    <>
      <Seo
        title="הרחבות ומודולים"
        description="מודולים להרחבת מערכות אייל פתרונות תוכנה: שינוע רכב, בר קוד, הזמנות, סליקה, SMS, CRM, תורים, סקרים ועוד."
      />
      <PageHero
        eyebrow="הרחבות ומודולים"
        title="מודולים שמתאימים את המערכת בדיוק לעסק שלכם"
        description="מגוון הרחבות לתפעול, מכירות, שיווק וניהול — ניתן לבחור את המודולים המתאימים בהתאם לצורכי העסק."
        aside={
          <div className="rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div>
                <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
                  {modules.length}
                </span>
                <span className="mt-1 block text-xs font-medium text-muted">מודולים</span>
              </div>
              <span className="h-10 w-px bg-line" />
              <div>
                <span className="block text-3xl font-extrabold tracking-tight text-ink-950 tabular-nums">
                  {moduleCategories.length}
                </span>
                <span className="mt-1 block text-xs font-medium text-muted">קטגוריות</span>
              </div>
            </div>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          צרו קשר
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          המוצרים שלנו
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="חיפוש מודול או יכולת..."
                aria-label="חיפוש מודולים"
                className="field pe-10 ps-10"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute left-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-md text-muted transition-colors hover:bg-surface-muted hover:text-ink-900"
                  aria-label="ניקוי החיפוש"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              ) : null}
            </div>
            <p className="text-xs font-medium text-muted" role="status" aria-live="polite">
              מציג <span className="font-bold text-ink-900">{filtered.length}</span> מתוך{' '}
              {modules.length} מודולים
            </p>
          </div>

          <FilterPills
            items={filters}
            active={active}
            onChange={(id) => setActive(id as FilterId)}
            label="סינון מודולים לפי קטגוריה"
          />
        </div>

        {filtered.length ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((module, index) => {
              const categoryLabel = moduleCategories.find(
                (category) => category.id === module.category,
              )?.label
              return (
                <Reveal key={module.slug} delay={Math.min(index, 8) * 0.03}>
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
                    <h2 className="mt-4 text-base font-extrabold tracking-tight text-ink-950 transition-colors group-hover:text-brand-700">
                      {module.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-7 text-muted">{module.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-600">
                      לפרטים
                      <ArrowLeft className="h-3.5 w-3.5 directional-arrow" aria-hidden="true" />
                    </span>
                  </SpotlightLink>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-surface-muted p-10 text-center">
            <h2 className="text-lg font-extrabold text-ink-950">לא נמצאו מודולים מתאימים</h2>
            <p className="mt-2 text-sm text-muted">נסו לשנות את החיפוש או לבחור קטגוריה אחרת.</p>
            <button type="button" onClick={reset} className="btn-ghost mt-5">
              איפוס הסינון
            </button>
          </div>
        )}
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
              צריך מודול או התאמה מיוחדת?
            </h2>
            <p className="mt-1.5 text-sm leading-7 text-muted">
              נשמח להכיר את תהליכי העבודה בעסק ולבדוק את ההתאמה המדויקת.
            </p>
          </div>
          <ButtonLink to="/contact" className="btn-icon-move shrink-0">
            דברו איתנו
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
