import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { company } from '@/data/site'

export default function Privacy() {
  return (
    <>
      <Seo
        title="מדיניות פרטיות"
        description="מדיניות הפרטיות של אתר אייל פתרונות תוכנה — איזה מידע נאסף, וכיצד פועל טופס יצירת הקשר בשלב זה."
      />
      <PageHero
        eyebrow="מדיניות פרטיות"
        title="מדיניות פרטיות"
        description="אנו מכבדים את פרטיות המשתמשים באתר. בעמוד זה מוסבר איזה מידע נאסף בפועל בגרסה הנוכחית של האתר."
      />

      <Section>
        <div className="prose-he max-w-3xl">
          <h2>מידע שנאסף באתר</h2>
          <p>
            האתר אינו כולל מערכת משתמשים, הרשמה, אימות או בסיס נתונים. בשלב זה לא נשמר מידע
            אישי בשרת ואין איסוף אנליטי או מעקב אחר גולשים.
          </p>

          <h2>טופס יצירת קשר</h2>
          <p>
            טופס יצירת הקשר באתר מבצע בדיקת תקינות בדפדפן בלבד. הנתונים שהזנתם אינם נשלחים
            לשרת, אינם נשמרים ואינם מועברים לצד שלישי. עם חיבור הטופס לשרת בעתיד, יעודכן עמוד
            זה בהתאם.
          </p>

          <h2>קישורים חיצוניים</h2>
          <p>
            האתר כולל קישורים לשירותים חיצוניים כגון Waze, פייסבוק ו־Cardcom. השימוש בשירותים
            אלו כפוף למדיניות הפרטיות של אותם שירותים.
          </p>

          <h2>גופנים</h2>
          <p>
            האתר טוען את הגופן Heebo משירות Google Fonts. טעינת הגופן עשויה ליצור פנייה לשרתי
            Google, בכפוף למדיניות הפרטיות שלהם.
          </p>

          <h2>יצירת קשר</h2>
          <p>
            לשאלות בנושא פרטיות ניתן לפנות אל {company.legalName} בדוא״ל{' '}
            <a href={`mailto:${company.email}`} dir="ltr">
              {company.email}
            </a>{' '}
            או בטלפון <span className="whitespace-nowrap" dir="ltr">{company.phone}</span>.
          </p>
        </div>
      </Section>
    </>
  )
}
