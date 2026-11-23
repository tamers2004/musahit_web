export type ModuleIcon =
  | 'shopping-cart'
  | 'package'
  | 'printer'
  | 'barcode'
  | 'scan-line'
  | 'credit-card'
  | 'users'
  | 'message-square'
  | 'bell'
  | 'mail'
  | 'calendar-check'
  | 'calendar'
  | 'monitor'
  | 'clipboard-check'
  | 'bar-chart'
  | 'shield-check'
  | 'timer'
  | 'clock'
  | 'gift'
  | 'car'
  | 'wallet'
  | 'truck'
  | 'star'
  | 'database'

import type { ImageAsset } from '@/data/imageAssets'
import { images } from '@/data/imageAssets'

export type ModuleCategory = 'sales' | 'operations' | 'marketing' | 'management'

export type ModuleItem = {
  slug: string
  name: string
  short: string
  features: string[]
  icon: ModuleIcon
  iconImage?: ImageAsset
  image?: ImageAsset
  gallery?: ImageAsset[]
  category: ModuleCategory
  featured?: boolean
}

export const moduleCategories: { id: ModuleCategory; label: string; description: string }[] = [
  { id: 'sales', label: 'מכירות ורכש', description: 'הזמנות, ספקים, קופה ומסמכים.' },
  { id: 'operations', label: 'תפעול המוסך', description: 'שינוע, מלאי, תורים וזמן עבודה.' },
  { id: 'marketing', label: 'שיווק ושימור לקוחות', description: 'SMS, CRM, מועדון לקוחות וסקרים.' },
  { id: 'management', label: 'ניהול ובקרה', description: 'מדדים, SLA, התראות והתראות רכב.' },
]

export const modules: ModuleItem[] = [
  {
    slug: 'customer-orders',
    name: 'מודול הזמנות לקוחות',
    short:
      'הפקת הזמנה ממוחשבת ללקוח, מעקב אחר הזמנות שלא סופקו והצלבת הזמנות פתוחות לתעודת משלוח או לחשבונית.',
    features: [
      'הפקת הזמנה ממוחשבת ללקוח',
      'מעקב מסודר אחר הזמנות שלא סופקו',
      'הצלבת הזמנות פתוחות לתעודת משלוח או לחשבונית',
      'חיסכון בהקלדה כפולה ובניירת ידנית',
    ],
    icon: 'shopping-cart',
    iconImage: images.moduleCustomerMovements,
    category: 'sales',
    featured: true,
  },
  {
    slug: 'supplier-orders',
    name: 'מודול הזמנות לספקים',
    short:
      'הפקת הזמנה ממוחשבת לספק, מעקב אחר הזמנות שלא נתקבלו והצלבת הזמנות פתוחות לתעודת משלוח או לחשבונית.',
    features: [
      'הפקת הזמנה ממוחשבת לספק',
      'מעקב אחר הזמנות שלא נתקבלו',
      'הצלבת הזמנות פתוחות לתעודת משלוח או לחשבונית',
      'חיסכון בהקלדה כפולה ובניירת ידנית',
    ],
    icon: 'package',
    iconImage: images.moduleSuppliers,
    category: 'sales',
    featured: true,
  },
  {
    slug: 'checks',
    name: 'מודול הדפסת שיקים',
    short:
      'הדפסת שיק ממוחשב לספקים, תרגום מספרים למילים והצלבת תשלום מול חשבוניות פתוחות.',
    features: [
      'הדפסת שיק ממוחשב לספקים',
      'תרגום מספרים למילים',
      'הצלבת התשלום מול החשבוניות הפתוחות',
      'רישום התשלום בכרטיס הספק והעברה לתזרים',
    ],
    icon: 'printer',
    category: 'sales',
  },
  {
    slug: 'barcode',
    name: 'מודול בר קוד',
    short:
      'הדפסת מדבקות ברקוד לפריטים, איתור מהיר וניפוק חלפים לכרטיס העבודה באמצעות אקדח ברקוד.',
    features: [
      'הדפסת מדבקות ברקוד לפריטים לפי קבוצות',
      'איתור פריטים בזמן קליטת חשבונית ספק',
      'ניפוק חלפים לכרטיס העבודה באמצעות אקדח ברקוד',
      'הדפסת ברקוד בכותרת כרטיס העבודה לזיהוי מהיר',
    ],
    icon: 'barcode',
    iconImage: images.moduleBarcode,
    category: 'operations',
    featured: true,
  },
  {
    slug: 'document-scan',
    name: 'מודול סריקת מסמכים',
    short:
      'סריקה מהירה של כרטיסי עבודה, רישיונות רכב, טפסי קליטה והסכמים, וסיווגם לפי נושאים.',
    features: [
      'סריקה בעזרת סורקים בתקן TWIN',
      'סריקת כרטיסי עבודה, רישיונות רכב וטפסי קליטה',
      'סיווג מסמכים לפי נושאים',
      'סריקת עד 50 דפים בפעם אחת',
      'זיהוי הלקוח בזמן הסריקה באמצעות ברקוד',
    ],
    icon: 'scan-line',
    iconImage: images.moduleDocumentScan,
    category: 'operations',
  },
  {
    slug: 'payment',
    name: 'מודול חיוב כרטיסי אשראי',
    short:
      'חיוב כרטיסי אשראי בזמן אמת בהפקת חשבונית מס קבלה, ללא מכשיר חיצוני.',
    features: [
      'חיוב כרטיסי אשראי בזמן אמת בהפקת חשבונית מס קבלה',
      'קבלת אישור מחברות האשראי תוך שניות',
      'ללא צורך במכשיר חיצוני או בקו טלפון מיוחד',
      'בונוס של 5 כרטיסי עובד לניהול שעון נוכחות',
    ],
    icon: 'credit-card',
    iconImage: images.moduleCreditCard,
    category: 'sales',
    featured: true,
  },
  {
    slug: 'crm',
    name: 'מודול CRM',
    short:
      'מעקב אחר קשר עם הלקוח, תיעוד שיחות, תזכורות ומעקב הצעות מחיר.',
    features: [
      'ביצוע FOLLOW UP לחיזוק הקשר עם הלקוח',
      'תיעוד שיחות כולל תזכורת ליום ושעה',
      'מעקב הצעות מחיר ותזכורות אישיות',
      'רישום הערות בכרטיס העבודה',
    ],
    icon: 'users',
    iconImage: images.moduleCrm,
    category: 'marketing',
  },
  {
    slug: 'sms',
    name: 'מודול SMS',
    short:
      'שליחת הודעות SMS בתפוצה מהמחשב לטלפון הנייד, ככלי שיווקי ותפעולי.',
    features: [
      'שליחת אלפי הודעות SMS בלחיצה אחת',
      'זימון לקוח לטיפול ותזכורת לתור',
      'הודעה שהרכב מוכן',
      'המודול אינו בתשלום — התשלום עבור ההודעות בלבד',
    ],
    icon: 'message-square',
    iconImage: images.moduleSms,
    category: 'marketing',
    featured: true,
  },
  {
    slug: 'letters',
    name: 'מחולל חוזרים',
    short:
      'כלי לשליחת מכתבים בתפוצה, ניסוח מכתב אישי ושליפת נתונים לפי חתכים שונים.',
    features: [
      'שליחת מכתבים בתפוצה',
      'ניסוח מכתב אישי ללקוח',
      'שליפת נתונים לפי יום הולדת, מבצעים, הזמנה ועוד',
      'הדפסת מדבקות הכוללות את כתובת הלקוח',
    ],
    icon: 'mail',
    iconImage: images.moduleLetters,
    category: 'marketing',
  },
  {
    slug: 'alerts',
    name: 'מודול התראות',
    short:
      'הגדרת סוגי התראות לרכב ותקופות התראה, לניהול מועדוני לקוחות וציי רכב.',
    features: [
      'הגדרת סוג ההתראות לרכב ותקופת ההתראה',
      'התראות לגמר ביטוח, אישור תנועה, כושר הרמה ועוד',
      'התראה יומית בעת הכניסה למערכת',
      'מתאים לניהול מועדוני לקוחות וציי רכב',
    ],
    icon: 'bell',
    iconImage: images.moduleAlerts,
    category: 'management',
  },
  {
    slug: 'customer-reminders',
    name: 'מודול זימון לקוחות לטיפול',
    short:
      'מערכת זימון לקוחות בהתאם לזמן או לקילומטרים שעבר הרכב, ככלי שיווקי למרכז השירות.',
    features: [
      'זימון לקוחות בהתאם לזמן או לק״מ',
      'התבססות על היסטוריית הטיפולים של הרכב',
      'הגדלת כניסות הרכבים למרכז השירות',
      'הפעלה חודשית שוטפת',
    ],
    icon: 'calendar-check',
    iconImage: images.moduleCustomersForTreatment,
    category: 'marketing',
  },
  {
    slug: 'appointments',
    name: 'מודול הזמנת תורים',
    short:
      'מעקב מסודר אחר כניסות רכבים ותכנון יום העבודה הצפוי במרכז השירות.',
    features: [
      'מעקב אחר כניסות הרכבים',
      'תכנון מראש של יום העבודה',
      'תכנון כוח אדם וחלפים',
      'כלי ניהולי מרכזי למרכז השירות',
    ],
    icon: 'calendar',
    iconImage: images.moduleAppointments,
    category: 'operations',
  },
  {
    slug: 'waiting-screen',
    name: 'מערכת להקרנת מוזמנים',
    short:
      'הצגת המוזמנים והסטטוס שלהם על מסך גדול בקבלה, עם רענון אוטומטי.',
    features: [
      'הצגת המוזמנים שתואמו מראש',
      'הצגת סטטוס הטיפול: הגיע, בטיפול, מוכן',
      'רענון אוטומטי של הנתונים',
      'מסך גדול בקבלת מרכז השירות',
    ],
    icon: 'monitor',
    iconImage: images.moduleWaitingScreen,
    category: 'operations',
  },
  {
    slug: 'surveys',
    name: 'מערכת סקרים',
    short:
      'בדיקת שביעות רצון הלקוח מחוויית הביקור במוסך והפקת דוחות סטטיסטיים.',
    features: [
      'בדיקת שביעות רצון הלקוח',
      'דוחות סטטיסטיים על התפלגות לקוחות מרוצים',
      'הפניית לקוחות לא מרוצים להמשך טיפול',
      'זיהוי תחומים לשיפור',
    ],
    icon: 'clipboard-check',
    iconImage: images.moduleSurveys,
    category: 'management',
  },
  {
    slug: 'kpi-report',
    name: 'דוח מדדים למנהל',
    short:
      'ריכוז פעילות המוסך בלחיצת כפתור, כולל 7 מדדים עיקריים ודוחות מפורטים.',
    features: [
      'ריכוז פעילות המוסך בלחיצת כפתור',
      'מדדי כניסות, אחוז מוזמנים ועמידה בהתחייבות',
      'תקלות חוזרות, שביעות רצון ויעילות עובדים',
      'הכנסה ממוצעת מכניסה בתשלום',
      'מסופק ללא תשלום עם מודול SLA',
    ],
    icon: 'bar-chart',
    iconImage: images.moduleKpi,
    category: 'management',
  },
  {
    slug: 'sla',
    name: 'מודול SLA — התחייבות לקוח',
    short:
      'התחייבות לזמן ולמחיר, עריכת הצעת מחיר והפיכתה לטופס SLA עם מעקב בזמן אמת.',
    features: [
      'עריכת הצעת מחיר והפיכתה לטופס SLA',
      'קביעת זמן התחייבות לסיום העבודה',
      'הכנת החלפים הנדרשים והוראת איסוף למחסן',
      'התראה על חוסר במלאי',
      'דוחות עמידה ביעדי SLA',
    ],
    icon: 'shield-check',
    iconImage: images.moduleSla,
    category: 'management',
  },
  {
    slug: 'work-time',
    name: 'דיווח זמן עבודה בפועל',
    short:
      'דיווח זמן עבודה בפועל של עובדים והעברת כרטיס עובד בתחילת ובסיום העבודה.',
    features: [
      'דיווח זמן עבודה בפועל',
      'מעקב אחר העובד, הרכב והמחלקה בזמן אמת',
      'הפקת דוחות יעילות לפי כרטיס או עובד',
      'העברת כרטיס עובד בתחילת ובסיום עבודה',
    ],
    icon: 'timer',
    iconImage: images.moduleWorkTime,
    category: 'operations',
  },
  {
    slug: 'attendance',
    name: 'מודול נוכחות עובדים',
    short:
      'ניהול נוכחות העובדים באמצעות שעון עובדים או רישום ידני.',
    features: [
      'ניהול נוכחות באמצעות שעון עובדים',
      'אפשרות לרישום נוכחות ידני',
      'אספקת קורא מגנטי וכרטיסי עובדים',
      'מתאים ללקוחות מערכת אישורית',
    ],
    icon: 'clock',
    iconImage: images.moduleAttendance,
    category: 'operations',
  },
  {
    slug: 'kits',
    name: 'מודול קיטים ומבצעים',
    short:
      'תכנון חיוב טיפולים — עבודה וחלפים — בהתאם לסוג הרכב והדגם.',
    features: [
      'תכנון קיטים של עבודה וחלפים',
      'חיסכון בזמן בעריכת הצעת מחיר',
      'מניעת טעויות והספקה מהירה של חלפים',
      'תכנון קיטים במבצע והגדרת תוקף',
    ],
    icon: 'gift',
    iconImage: images.moduleKits,
    category: 'sales',
  },
  {
    slug: 'spare-vehicle-log',
    name: 'יומן רכב חליפי',
    short:
      'מעקב אחר מסירות והחזרות של רכב חלופי, כולל מונה קילומטרים ודוחות.',
    features: [
      'רישום תאריך ושעת מסירה והחזרה',
      'רישום מונה ק״מ במסירה ובהחזרה',
      'דיווח על כל הרכבים במרכז השירות',
      'דוח התראות ואיתורים',
    ],
    icon: 'car',
    iconImage: images.moduleCar,
    category: 'operations',
  },
  {
    slug: 'pos',
    name: 'מודול קופה',
    short:
      'ניהול מספר קופות, משמרות קופאים, מחירים כולל מע״מ וחיוב כרטיסי אשראי.',
    features: [
      'ניהול מערך של מספר קופות',
      'החלפת משמרת וסגירת קופה',
      'ניהול מחירים כולל מע״מ',
      'חיבור למערכת אישורית זהב לחיוב אשראי',
      'הפקת חשבונית, תעודת משלוח וחשבונית מרכזת',
    ],
    icon: 'wallet',
    iconImage: images.modulePos,
    category: 'sales',
  },
  {
    slug: 'vehicle-transport',
    name: 'מודול שינוע רכב',
    short:
      'מודול לייעול שינוע רכבי לקוחות, מתכנון זמנים ועד אישור יציאה והיסטוריית שינוע.',
    features: [
      'רישום רכב לשינוע בזמן קביעת תור ללקוח',
      'לוח תכנון זמנים לכל נהג',
      'הפקת דוח שינוע לכל נהג יום לפני',
      'התראה בפתיחת כרטיס העבודה ועדכון מונה ק״מ בזמן האיסוף',
      'התראה בסגירת כרטיס העבודה לדיווח מונה ק״מ יציאה',
      'הדפסת אישור יציאה עם סיום העבודה',
      'איתור היסטוריית שינוע לרכב',
      'הפקת דוחות בזמן אמת למצב השינוע',
      'ניהול רכב חלופי והשכרה',
    ],
    icon: 'truck',
    iconImage: images.moduleCar,
    image: images.vehicleTransport,
    gallery: [images.vehicleTransportMini, images.vehicleTransportDriver, images.musahitWorkOrder],
    category: 'operations',
    featured: true,
  },
  {
    slug: 'customer-club',
    name: 'מודול מועדון לקוחות',
    short: 'מודול המתממשק למערכת של חברת SimplyClub.',
    features: [
      'התממשקות למערכת SimplyClub',
      'ניהול מועדון לקוחות',
      'שילוב עם מערך השירות של המוסך',
    ],
    icon: 'star',
    image: images.customerClub,
    category: 'marketing',
  },
  {
    slug: 'mrm',
    name: 'מרמ קטלוג ומסחר',
    short: 'מודול חדש לממשק למערכת מרמ Auto 3P Horizon.',
    features: [
      'ממשק למערכת מרמ Auto 3P Horizon',
      'עבודה מול קטלוג ומסחר',
      'שילוב עם מערך החלפים של המוסך',
    ],
    icon: 'database',
    image: images.mrm,
    category: 'sales',
  },
]

export const featuredModules = modules.filter((module) => module.featured)

export const getModule = (slug?: string) => modules.find((module) => module.slug === slug)
