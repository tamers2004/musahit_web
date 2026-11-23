export const company = {
  name: 'אייל פתרונות תוכנה',
  legalName: 'אייל פתרונות תוכנה בע״מ',
  founded: 1979,
  tagline: 'פתרונות תוכנה מתקדמים שמניעים עסקים קדימה.',
  description:
    'עשרות שנות ניסיון בפיתוח מערכות תוכנה מתקדמות לניהול עסקים, מוסכים ומרכזי שירות.',
  phone: '03-9619611',
  phoneHref: 'tel:+97239619611',
  fax: '03-9624347',
  email: 'fd@eyalcomp.co.il',
  address: 'מרכז עזריאלי בניין B, הרוקמים 26, חולון',
  hours: 'א׳–ה׳ 08:00–16:30 · ו׳ 08:00–12:00',
  waze: 'https://www.waze.com/he/livemap/directions?latlng=32.0077569%2C34.8006392',
  facebook: 'https://www.facebook.com/eyalcomp2020',
  cardcom: 'https://www.cardcom.solutions/',
}

export type NavChild = { label: string; to: string; description?: string }
export type NavItem = { label: string; to: string; children?: NavChild[] }

export const navigation: NavItem[] = [
  { label: 'ראשי', to: '/' },
  {
    label: 'המוצרים שלנו',
    to: '/products',
    children: [
      { label: 'מוסכית 2020', to: '/products/musahit', description: 'ניהול מוסך ומרכזי שירות' },
      { label: 'בדיקת קניה לרכב', to: '/products/vehicle-inspection', description: 'מערכת למכוני בדיקה' },
      { label: 'אופק פתרונות', to: '/products/ofek', description: 'ניהול עסק ERP' },
      { label: 'SMSender', to: '/products/smsender', description: 'שליחת SMS בתפוצה' },
      { label: 'אישורית זהב', to: '/products/ishurit', description: 'סליקת אשראי' },
      { label: 'רישוי 2020', to: '/products/licensing', description: 'ניהול מכון רישוי' },
    ],
  },
  {
    label: 'הרחבות ומודולים',
    to: '/modules',
    children: [
      { label: 'מודול שינוע רכב', to: '/modules/vehicle-transport' },
      { label: 'מודול בר קוד', to: '/modules/barcode' },
      { label: 'מודול הזמנות לספקים', to: '/modules/supplier-orders' },
      { label: 'מודול הזמנות לקוחות', to: '/modules/customer-orders' },
      { label: 'סליקת אשראי', to: '/modules/payment' },
      { label: 'כל המודולים', to: '/modules' },
    ],
  },
  { label: 'השירות שלנו', to: '/services' },
  { label: 'אודותינו', to: '/about' },
  { label: 'הלקוחות שלנו', to: '/clients' },
  { label: 'מה חדש', to: '/news' },
  { label: 'צרו קשר', to: '/contact' },
]

export const footerLinks = [
  { label: 'אודותינו', to: '/about' },
  { label: 'המוצרים שלנו', to: '/products' },
  { label: 'הרחבות ומודולים', to: '/modules' },
  { label: 'מרכז תמיכה', to: '/support' },
  { label: 'הדרכות והשתלמויות', to: '/training' },
  { label: 'הלקוחות שלנו', to: '/clients' },
  { label: 'מה חדש', to: '/news' },
  { label: 'צרו קשר', to: '/contact' },
  { label: 'מדיניות פרטיות', to: '/privacy' },
]
