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
      >
        <ButtonLink href={company.phoneHref}>התקשרו אלינו</ButtonLink>
        <ButtonLink href={`mailto:${company.email}`} variant="ghost">
          כתבו לנו בדוא״ל
        </ButtonLink>
      </PageHero>

      <ContactCTA />
    </>
  )
}
