import type { ImageAsset } from '@/data/imageAssets'
import { images } from '@/data/imageAssets'

export type NewsItem = {
  slug: string
  title: string
  excerpt: string
  category: string
  body: string[]
  image: ImageAsset
  visual: 'photo' | 'browser'
  to?: string
}

export const news: NewsItem[] = [
  {
    slug: 'vehicle-transport',
    title: 'מודול שינוע רכב',
    excerpt: 'מודול חדש לייעול שינוע רכבי לקוחות, מתכנון זמנים ועד אישור יציאה.',
    category: 'מודולים חדשים',
    image: images.vehicleTransport,
    visual: 'photo',
    body: [
      'מודול חדש לייעול שינוע רכבי לקוחות.',
      'המודול מאפשר רישום רכב לשינוע בזמן קביעת תור ללקוח, לוח תכנון זמנים לכל נהג, הפקת דוח שינוע לכל נהג יום לפני, קבלת התראה בפתיחת כרטיס העבודה ועדכון מונה ק״מ בזמן האיסוף.',
      'בסגירת כרטיס העבודה מתקבלת התראה לדיווח מונה ק״מ יציאה, וניתן להדפיס אישור יציאה עם סיום העבודה.',
      'המודול כולל גם איתור היסטוריית שינוע לרכב, הפקת דוחות בזמן אמת למצב השינוע וניהול רכב חלופי והשכרה.',
    ],
    to: '/modules/vehicle-transport',
  },
  {
    slug: 'vehicle-inspection-discount',
    title: 'עשר אחוז הנחה — בדיקות קניה לרכב',
    excerpt: 'מערכת ממוחשבת לבדיקות קניה לרכב, מותאמת לדרישות משרד התחבורה.',
    category: 'מבצעים',
    image: images.vehicleInspection2,
    visual: 'browser',
    body: [
      'מערכת ממוחשבת לבדיקות קניה לרכב, המותאמת למכוני בדיקות ולפי דרישות משרד התחבורה.',
      'המערכת כוללת עמדת משרד לפתיחת בדיקת קניה, עמדת בדיקה במכון וקריאת תוצאות ממכשור היצרן MAHA.',
      'ניתן להפיק ציון משוכלל לבדיקת הרכב כולל גרף מפורט, לשמור היסטוריית בדיקות ולהפיק העתקים.',
    ],
    to: '/products/vehicle-inspection',
  },
  {
    slug: 'mrm-catalog',
    title: 'מרמ קטלוג ומסחר',
    excerpt: 'מודול חדש לממשק למערכת מרמ Auto 3P Horizon.',
    category: 'מודולים חדשים',
    image: images.mrm,
    visual: 'browser',
    body: [
      'מודול חדש לממשק למערכת מרמ Auto 3P Horizon.',
      'המודול מחבר את עבודת המוסך לקטלוג ולמסחר, ומאפשר שילוב עם מערך החלפים.',
      'ניתן לעיין בפרטי המודול בעמוד ההרחבות והמודולים.',
    ],
    to: '/modules/mrm',
  },
  {
    slug: 'customer-club',
    title: 'מודול מועדון לקוחות',
    excerpt: 'מודול המתממשק למערכת של חברת SimplyClub.',
    category: 'מודולים חדשים',
    image: images.customerClub,
    visual: 'browser',
    body: [
      'מודול המתממשק למערכת של חברת SimplyClub.',
      'המודול מאפשר לשלב את מועדון הלקוחות עם מערך השירות של המוסך.',
      'ניתן לעיין בפרטי המודול בעמוד ההרחבות והמודולים.',
    ],
    to: '/modules/customer-club',
  },
]

export const getNewsItem = (slug?: string) => news.find((item) => item.slug === slug)
