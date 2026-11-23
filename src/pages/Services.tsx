import { CheckCircle2 } from 'lucide-react'
import { services } from '@/data/services'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Icon } from '@/components/ui/Icon'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Services() {
  return (
    <>
      <Seo
        title="השירות שלנו"
        description="מרכז תמיכה HELP DESK, הדרכות והשתלמויות, שירות וליווי אישי והטמעת מערכות — שישה ימים בשבוע."
      />
      <PageHero
        eyebrow="השירות שלנו"
        title="ליווי מקצועי לאורך כל הדרך"
        description="צוות מנוסה ומיומן עומד לרשות הלקוחות שישה ימים בשבוע, עם תמיכה טלפונית, שליטה מרחוק, הדרכה והטמעה."
      >
        <ButtonLink to="/contact">צרו קשר</ButtonLink>
        <ButtonLink to="/support" variant="ghost">
          מרכז תמיכה
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="card flex h-full flex-col p-6 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-white">{service.name}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">{service.short}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.description.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink to={service.to} variant="soft" className="mt-6 self-start">
                  לפרטים
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
