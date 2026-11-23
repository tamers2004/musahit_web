import { GraduationCap, Users, BadgeCheck, Building2 } from 'lucide-react'
import { images } from '@/data/imageAssets'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { SmartImage } from '@/components/ui/SmartImage'
import { ContactCTA } from '@/components/sections/ContactCTA'

const trainingPoints = [  {
    icon: GraduationCap,
    title: 'הדרכה ראשונית',
    text: 'מתן הדרכה ראשונית ללקוחות חדשים במרכז ההדרכה של החברה.',
  },
  {
    icon: Users,
    title: 'הסמכת עובדים',
    text: 'הסמכה של עובדים חדשים, לצד ליווי לאורך תקופת ההטמעה.',
  },
  {
    icon: BadgeCheck,
    title: 'ללא עלות ללקוחות',
    text: 'ההסכמה וההדרכה נעשית ללא עלות ללקוחותינו במרכז ההדרכה.',
  },
  {
    icon: Building2,
    title: 'מרכז הדרכה',
    text: 'לחברה מרכז הדרכה ללקוחות חדשים ולעובדים חדשים.',
  },
]

export default function Training() {
  return (
    <>
      <Seo
        title="הדרכות והשתלמויות"
        description="מרכז הדרכה ללקוחות חדשים והסמכת עובדים חדשים, ללא עלות ללקוחות אייל פתרונות תוכנה."
      />
      <PageHero
        eyebrow="הדרכות והשתלמויות"
        title="מרכז הדרכה ללקוחות ולעובדים"
        description="לחברה מרכז הדרכה ללקוחות חדשים והסמכה של עובדים חדשים. ההסכמה וההדרכה נעשית ללא עלות ללקוחותינו."
      >
        <ButtonLink to="/contact">לתיאום הדרכה</ButtonLink>
        <ButtonLink to="/support" variant="ghost">
          מרכז תמיכה
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {trainingPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <Reveal key={point.title} delay={index * 0.06}>
                <div className="card h-full p-6 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand-500/20 bg-brand-50 text-brand-600">
                    <IconComponent className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-ink-950">{point.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{point.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="אפליקציית מוסכית לנייד"
          title="מידע עדכני בכל מקום"
          description="צילומי מסך מקוריים של אפליקציית מוסכית לנייד, כפי שמופיעים באתר החברה."
        />
        <div className="mt-6 flex items-center gap-4">
          <SmartImage image={images.appStore} className="h-9 w-auto" />
        </div>
        <div className="mt-10">
          <ImageGallery
            items={[
              images.trainingPhone1,
              images.trainingPhone2,
              images.trainingPhone3,
              images.trainingPhone4,
              images.trainingPhone5,
              images.trainingPhone6,
              images.trainingPhone7,
            ]}
            columns={3}
          />
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="מערכות בדיקה"
          title="צילומי מסך מהמערכות"
          description="דוגמאות מתוך מערכת בדיקת קניה לרכב."
        />
        <div className="mt-10">
          <ImageGallery
            items={[images.trainingDesktop1, images.trainingDesktop2, images.trainingDesktop3]}
            columns={3}
          />
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
