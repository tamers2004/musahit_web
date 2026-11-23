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
    <Section className="relative">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SmartImage image={images.musachitLogo} className="h-6 w-auto" />
              <span className="eyebrow mt-4">
                <Wrench className="h-3.5 w-3.5" />
                מערכת הדגל
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-ink-950 sm:text-4xl lg:text-[2.6rem]">
                מוסכית 2020 — מערכת לניהול מוסך ומרכזי שירות לרכב
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                מותאמת למוסכי מכונאות ופחחות, לרכב פרטי, משאיות ואופנועים, למיזוג אוויר לרכב
                ולעסקים הנותנים שירותי תיקונים. המערכת מחולקת ל־9 תפריטים עיקריים ומאפשרת מידע
                עדכני למנהלי עבודה מכל טלפון נייד וטאבלט.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/products/musahit">
                  לפרטים נוספים
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
                className="flex items-start gap-2.5 rounded-xl border border-line bg-white px-3 py-2.5"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-sm leading-6 text-ink-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
