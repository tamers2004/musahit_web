import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Cloud,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { company } from '@/data/site'
import { products } from '@/data/products'
import { images } from '@/data/imageAssets'
import { companyFacts } from '@/data/about'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { BrowserFrame } from '@/components/ui/MediaFrame'
import { HeroCanvas } from '@/three/HeroCanvas'

const trustPoints = [
  { icon: ShieldCheck, label: 'מעל 40 שנות ניסיון' },
  { icon: MonitorSmartphone, label: 'שירות 6 ימים בשבוע' },
  { icon: Sparkles, label: 'לקוחות מובילים בישראל' },
]

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F2F7FF_0%,#FFFFFF_68%)] pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-lines radial-fade opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[12%] h-[28rem] w-[38rem] rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[8%] h-64 w-72 rounded-full bg-signal/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          <div>
            <span className="eyebrow">מאז 1979 · בית תוכנה ישראלי</span>

            <h1
              id="hero-title"
              className="mt-5 text-balance text-[2.65rem] font-extrabold leading-[1.04] tracking-tightest text-ink-950 sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.15rem]"
            >
              הפתרונות החכמים
              <span className="mt-1 block gradient-text">שמניעים את העסק שלך קדימה</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-8 text-muted sm:text-base">
              אייל פתרונות תוכנה מפתחת ומספקת מערכות תוכנה מתקדמות לניהול מוסכים, מרכזי שירות
              ועסקים. עם ניסיון רב שנים, שירות מקצועי ופתרונות המותאמים לצרכים שלכם.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact" className="btn-icon-move">
                צור קשר
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/products" variant="ghost" className="btn-icon-move">
                המוצרים שלנו
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-bold text-ink-700 transition-colors hover:text-brand-700"
                dir="ltr"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-brand-600 shadow-card">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap tabular-nums">{company.phone}</span>
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              {trustPoints.map((point) => {
                const Icon = point.icon
                return (
                  <li
                    key={point.label}
                    className="flex items-center gap-2 text-[13px] font-medium text-ink-700"
                  >
                    <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                    {point.label}
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
              <div className="relative mx-auto max-w-[30rem]">
                <div
                  className="pointer-events-none absolute -inset-12 rounded-[3rem] bg-brand-500/[0.06] blur-3xl"
                  aria-hidden="true"
                />
                <div className="absolute -inset-x-10 -inset-y-16 z-0">
                  <HeroCanvas className="h-full w-full" />
                </div>

                <div className="relative z-10 rounded-2xl border border-line bg-white p-2 shadow-float sm:p-3">
                  <BrowserFrame
                    image={images.musahitUi}
                    label="Musachit 2020"
                    priority
                    className="rounded-xl border-0 shadow-none"
                  />

                  <span className="absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 shadow-card">
                    <SmartImage image={images.musachitLogo} className="h-3 w-auto" />
                    <span className="text-[9px] font-bold text-ink-950">2020</span>
                  </span>

                  <span className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-2.5 py-1.5 text-[10px] font-semibold text-ink-700 shadow-card backdrop-blur-sm">
                    <Cloud className="h-3 w-3 text-brand-500" aria-hidden="true" />
                    מקומי ובענן
                  </span>
                </div>
              </div>

              <div dir="rtl" className="mt-24 flex flex-wrap gap-1.5">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/products/${product.slug}`}
                    className="rounded-full border border-line bg-white/80 px-3 py-1.5 text-[11px] font-bold text-ink-700 transition-colors hover:border-brand-500/30 hover:bg-white hover:text-brand-700"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-14 sm:grid-cols-4">
          {companyFacts.map((fact) => (
            <div key={fact.label} className="bg-white/90 px-5 py-5 backdrop-blur-sm">
              <span className="block text-2xl font-extrabold tracking-tight text-ink-950 tabular-nums sm:text-3xl">
                {fact.value}
              </span>
              <span className="mt-1 block text-[11px] font-medium text-muted sm:text-xs">
                {fact.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
