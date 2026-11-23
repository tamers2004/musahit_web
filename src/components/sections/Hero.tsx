import { ArrowLeft, CheckCircle2, MonitorSmartphone, Phone } from 'lucide-react'
import { company } from '@/data/site'
import { images } from '@/data/imageAssets'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { MediaCard } from '@/components/ui/MediaFrame'
import { SmartImage } from '@/components/ui/SmartImage'

const trustPoints = ['מעל 40 שנות ניסיון', 'תמיכה 6 ימים בשבוע', 'לקוחות מובילים בישראל']

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">אייל פתרונות תוכנה · מאז 1979</span>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            פתרונות תוכנה מתקדמים
            <span className="mt-2 block gradient-text">שמניעים עסקים קדימה.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">{company.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/products">
              גלו את הפתרונות שלנו
              <ArrowLeft className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              צרו קשר
            </ButtonLink>
            <a href={company.phoneHref} className="btn-ghost" dir="ltr">
              <Phone className="h-4 w-4 text-cyan-300" />
              {company.phone}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-8 rounded-full bg-cyan-500/10 blur-3xl" />
          <MediaCard
            image={images.musahitMonitor}
            priority
            className="relative rotate-1 transition-transform duration-500 hover:rotate-0"
          />

          <div className="glass absolute -top-4 right-4 flex items-center gap-2 rounded-2xl px-3 py-2 shadow-xl sm:-right-4">
            <SmartImage image={images.musachitLogo} className="h-4 w-auto" />
            <span className="text-xs font-semibold text-white">מוסכית 2020</span>
          </div>

          <div className="glass absolute -bottom-5 left-2 flex max-w-[15rem] items-start gap-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <MonitorSmartphone className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-white">מידע עדכני בכל מקום</span>
              <span className="mt-0.5 block text-[11px] leading-5 text-slate-400">
                מחשב, טאבלט וטלפון נייד
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
