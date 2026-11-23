import { ArrowLeft, CheckCircle2, Wrench } from 'lucide-react'
import { getProduct } from '@/data/products'
import { images } from '@/data/imageAssets'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { MediaCard } from '@/components/ui/MediaFrame'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { SmartImage } from '@/components/ui/SmartImage'

export function MusachitSpotlight() {
  const musahit = getProduct('musahit')
  if (!musahit) return null

  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent" />
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SmartImage image={images.musachitLogoWhite} className="h-6 w-auto" />
              <span className="eyebrow mt-4">
                <Wrench className="h-3.5 w-3.5" />
                מערכת הדגל
              </span>
              <h2 className="mt-4 text-balance text-3xl font-black text-white sm:text-4xl lg:text-[2.75rem]">
                מוסכית 2020 — מערכת לניהול מוסך ומרכזי שירות לרכב
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                מותאמת למוסכי מכונאות ופחחות, לרכב פרטי, משאיות ואופנועים, למיזוג אוויר לרכב
                ולעסקים הנותנים שירותי תיקונים. המערכת מחולקת ל־9 תפריטים עיקריים ומאפשרת מידע
                עדכני למנהלי עבודה מכל טלפון נייד וטאבלט.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/products/musahit">
                  לפרטים על מוסכית 2020
                  <ArrowLeft className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink to="/contact" variant="ghost">
                  לתיאום הדגמה
                </ButtonLink>
              </div>
            </div>

            <MediaCard image={musahit.image} />
          </div>

          <div className="relative mt-8">
            <ImageGallery items={musahit.gallery} columns={3} />
          </div>

          <div className="relative mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {musahit.features.slice(0, 6).map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-sm leading-6 text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
