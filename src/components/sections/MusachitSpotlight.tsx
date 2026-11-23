import { ArrowLeft, CheckCircle2, MonitorSmartphone, Wrench, Layers } from 'lucide-react'
import { getProduct } from '@/data/products'
import { images } from '@/data/imageAssets'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SmartImage } from '@/components/ui/SmartImage'
import { BrowserFrame } from '@/components/ui/MediaFrame'
import { Reveal } from '@/components/ui/Reveal'

const highlights = [
  { icon: Wrench, label: '9 תפריטים ראשיים' },
  { icon: MonitorSmartphone, label: 'אפליקציה לנייד ולטאבלט' },
  { icon: Layers, label: 'מערכת מקומית ובענן' },
]

export function MusachitSpotlight() {
  const musahit = getProduct('musahit')
  if (!musahit) return null

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-[36rem] rounded-full bg-brand-500/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-72 rounded-full bg-signal/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <Reveal>
            <SmartImage image={images.musachitLogoWhite} className="h-5 w-auto" />
            <span className="eyebrow-dark mt-5">מערכת הדגל</span>
            <h2 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem]">
              מוסכית 2020 — מערכת לניהול מוסך ומרכזי שירות לרכב
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/60">
              מותאמת למוסכי מכונאות ופחחות, לרכב פרטי, משאיות ואופנועים, למיזוג אוויר לרכב
              ולעסקים הנותנים שירותי תיקונים. המערכת מחולקת ל־9 תפריטים עיקריים ומאפשרת מידע
              עדכני למנהלי עבודה מכל טלפון נייד וטאבלט.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {musahit.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-6 text-white/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/products/musahit" variant="white" className="btn-icon-move">
                לפרטים נוספים
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/contact" variant="outlineWhite">
                לתיאום הדגמה
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-brand-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-sm sm:p-3">
              <BrowserFrame
                image={musahit.image}
                label={musahit.latin ?? musahit.name}
                className="rounded-xl border-white/10 shadow-none"
              />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {highlights.map((highlight) => {
                  const Icon = highlight.icon
                  return (
                    <span
                      key={highlight.label}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-center"
                    >
                      <Icon className="h-4 w-4 text-signal" aria-hidden="true" />
                      <span className="text-[10px] font-semibold leading-4 text-white/65">
                        {highlight.label}
                      </span>
                    </span>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
