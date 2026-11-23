import { ArrowLeft, CheckCircle2, MonitorSmartphone, Phone } from 'lucide-react'
import { company } from '@/data/site'
import { images } from '@/data/imageAssets'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { MediaCard } from '@/components/ui/MediaFrame'
import { SmartImage } from '@/components/ui/SmartImage'

const trustPoints = ['מעל 40 שנות ניסיון', 'תמיכה 6 ימים בשבוע', 'לקוחות מובילים בישראל']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white pb-16 pt-28 sm:pb-24 sm:pt-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">אייל פתרונות תוכנה · מאז 1979</span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] text-ink-950 sm:text-5xl lg:text-6xl">
            הפתרונות החכמים
            <span className="mt-1 block text-brand-500">שמניעים את העסק שלך קדימה</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            אייל פתרונות תוכנה מפתחת ומספקת מערכות תוכנה מתקדמות לניהול מוסכים, מרכזי שירות
            ועסקים. עם ניסיון רב שנים, שירות מקצועי ופתרונות המותאמים לצרכים שלכם.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/products">
              גלו את הפתרונות שלנו
              <ArrowLeft className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              צרו קשר
            </ButtonLink>
            <a
              href={company.phoneHref}
              className="btn-ghost whitespace-nowrap"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-brand-500" />
              {company.phone}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle2 className="h-4 w-4 text-brand-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <MediaCard image={images.musahitMonitor} priority className="relative" />

          <div className="glass absolute -top-4 right-4 flex items-center gap-2 rounded-2xl px-3 py-2 sm:-right-4">
            <SmartImage image={images.musachitLogo} className="h-4 w-auto" />
            <span className="text-xs font-semibold text-ink-950">מוסכית 2020</span>
          </div>

          <div className="glass absolute -bottom-5 left-2 flex max-w-[15rem] items-start gap-3 rounded-2xl px-4 py-3 sm:-left-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-brand-500/20 bg-brand-50 text-brand-600">
              <MonitorSmartphone className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-ink-950">מידע עדכני בכל מקום</span>
              <span className="mt-0.5 block text-[11px] leading-5 text-muted">
                מחשב, טאבלט וטלפון נייד
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
