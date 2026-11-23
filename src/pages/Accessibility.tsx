import { Accessibility, CheckCircle2, Keyboard, Mail, Phone } from 'lucide-react'
import { Seo } from '@/components/ui/Seo'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { company } from '@/data/site'

const adjustments = [
  'גרסה נגישה עם עיצוב מותאם',
  'ניווט מקלדת עם סימון פוקוס ברור',
  'ביטול אנימציות והבהובים',
  'ניגודיות גבוהה והיפוך צבעים',
  'גווני אפור וגופן קריא',
  'הגדלת טקסט וריווח טקסט',
  'קו תחתון לקישורים והדגשת כותרות',
  'הדגשת קישורים ולחצנים',
  'סמן עכבר גדול וסרגל קריאה',
]

export default function AccessibilityPage() {
  return (
    <>
      <Seo
        title="הצהרת נגישות"
        description="הצהרת הנגישות של אתר אייל פתרונות תוכנה, תפריט הנגישות, דרכי פנייה בנושא נגישות ומידע על התאמות האתר."
      />
      <PageHero
        eyebrow="נגישות"
        title="הצהרת נגישות"
        description="אתר אייל פתרונות תוכנה שואף להיות נגיש ונוח לשימוש עבור כלל המשתמשים, כולל אנשים עם מוגבלויות."
        aside={
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-sm">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Accessibility className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <span className="block text-sm font-extrabold text-ink-950">תפריט נגישות</span>
              <span className="mt-0.5 block text-[11px] text-muted">זמין בכל עמוד באתר</span>
            </div>
          </div>
        }
      >
        <ButtonLink to="/contact" className="btn-icon-move">
          פנייה בנושא נגישות
        </ButtonLink>
        <ButtonLink href={`mailto:${company.email}`} variant="ghost">
          <Mail className="h-4 w-4" aria-hidden="true" />
          דוא״ל
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="prose-he">
            <h2>המחויבות שלנו</h2>
            <p>
              אנו פועלים להתאים את האתר לעקרונות נגישות מקובלים, לרבות שימוש במבנה סמנטי,
              תוויות ARIA, ניווט מקלדת, ניגודיות צבעים ותמיכה בהעדפות מערכת כמו הקטנת אנימציות.
              האתר כולל תפריט נגישות צף המאפשר להתאים את תצוגת האתר באופן אישי.
            </p>

            <h2>התאמות הזמינות באתר</h2>
            <ul>
              {adjustments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>ניווט מקלדת</h2>
            <p>
              ניתן לנווט באתר באמצעות מקלדת: Tab למעבר בין רכיבים, Shift+Tab למעבר אחורה,
              Enter להפעלה ו־Escape לסגירת תפריטים וחלונות. בכל עמוד קיים קישור "דלג לתוכן
              הראשי" בראש העמוד.
            </p>

            <h2>מגבלות ידועות</h2>
            <p>
              ייתכנו רכיבים חיצוניים או תוכן מוטמע שאינם בשליטה מלאה של האתר. אנו ממשיכים
              לבדוק ולשפר את הנגישות באופן שוטף. אם נתקלתם בבעיה, נשמח לדעת כדי לתקן אותה.
            </p>

            <h2>פנייה בנושא נגישות</h2>
            <p>
              לשאלות, בקשות או דיווח על בעיית נגישות ניתן לפנות אל {company.legalName} בטלפון{' '}
              <a href={company.phoneHref} dir="ltr">
                {company.phone}
              </a>{' '}
              או בדוא״ל{' '}
              <a href={`mailto:${company.email}`} dir="ltr">
                {company.email}
              </a>
              . נשתדל לחזור אליכם בהקדם.
            </p>

            <p className="text-xs leading-6 text-muted/80">
              הצהרה זו מתארת את מאמצי הנגישות של האתר ואינה מהווה אישור, תעודה או בדיקת נגישות
              חיצונית. לבדיקה מקצועית ומקיפה יש להיעזר בגורם מוסמך.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line bg-surface-muted">
        <SectionHeading
          eyebrow="צריכים עזרה?"
          title="נשמח לעמוד לרשותכם"
          description="ניתן להתקשר או לכתוב לנו בכל שאלה על נגישות האתר או על השירות."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={company.phoneHref} className="btn-primary whitespace-nowrap" dir="ltr">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">{company.phone}</span>
          </a>
          <a href={`mailto:${company.email}`} className="btn-ghost">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {company.email}
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[11px] font-semibold text-muted shadow-card">
            <Keyboard className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            תפריט הנגישות זמין בפינה השמאלית התחתונה
          </span>
        </div>
      </Section>

      <Section className="border-t border-line py-10">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-xs text-muted">
          <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
          <span>האתר תומך בניווט מקלדת, בהעדפות reduced-motion ובתפריט נגישות מלא.</span>
        </div>
      </Section>
    </>
  )
}
