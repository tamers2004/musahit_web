import { Mail, Phone } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { company } from '@/data/site'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Contact() {
  return (
    <>
      <Seo
        title="צרו קשר"
        description="צרו קשר עם אייל פתרונות תוכנה: טלפון, דוא״ל, כתובת ושעות פעילות, או מילוי טופס פנייה."
      />
      <PageHero
        eyebrow="צרו קשר"
        title="נשמח לעמוד לרשותכם"
        description="מלאו את הטופס, התקשרו או כתבו בדוא״ל ונחזור אליכם בהקדם בכל שאלה על מוסכית 2020, אופק פתרונות, מודולים ותהליכי הטמעה."
        aside={
          <div className="space-y-2.5">
            <a
              href={company.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-line bg-white/80 px-4 py-3 shadow-card backdrop-blur-sm transition-colors hover:border-brand-500/30"
              dir="ltr"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-ink-950 tabular-nums">{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 rounded-xl border border-line bg-white/80 px-4 py-3 shadow-card backdrop-blur-sm transition-colors hover:border-brand-500/30"
              dir="ltr"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-ink-950">{company.email}</span>
            </a>
          </div>
        }
      >
        <ButtonLink href={company.phoneHref} className="btn-icon-move">
          <Phone className="h-4 w-4" aria-hidden="true" />
          התקשרו אלינו
        </ButtonLink>
        <ButtonLink href={`mailto:${company.email}`} variant="ghost">
          כתבו לנו בדוא״ל
        </ButtonLink>
      </PageHero>

      <ContactCTA />
    </>
  )
}
