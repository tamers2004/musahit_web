import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { moduleCategories, modules } from '@/data/modules'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Modules() {
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
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/products" variant="ghost">
          המוצרים שלנו
        </ButtonLink>
      </PageHero>

      {moduleCategories.map((category) => {
        const items = modules.filter((module) => module.category === category.id)
        if (!items.length) return null

        return (
          <Section key={category.id} className="border-t border-white/5 first:border-t-0">
            <div className="max-w-2xl">
              <span className="eyebrow">{category.label}</span>
              <p className="mt-4 text-base leading-8 text-slate-400">{category.description}</p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((module, index) => (
                <Reveal key={module.slug} delay={index * 0.04}>
                  <Link to={`/modules/${module.slug}`} className="card group flex h-full flex-col p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                      <Icon name={module.icon} className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-cyan-200">
                      {module.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{module.short}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      לפרטים
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Section>
        )
      })}

      <ContactCTA />
    </>
  )
}
