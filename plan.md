# Eyal Computers — Modern Website Redesign
## Project Implementation Plan

## 1. Project Overview

**Existing website:** https://www.eyalcomp.co.il/

**Reference pages:**
- https://www.eyalcomp.co.il/
- https://www.eyalcomp.co.il/shinoha
- https://www.eyalcomp.co.il/musachit
- https://www.eyalcomp.co.il/about-us
- https://www.eyalcomp.co.il/modolim
- https://www.eyalcomp.co.il/contact-us

### Main Objective

Build a completely redesigned, premium, modern website for Eyal Software Solutions (אייל פתרונות תוכנה בע"מ).

This is NOT a request to create a completely different company website.

The objective is to preserve the existing company's identity, products, services, information, Hebrew content, contact details, and business purpose while dramatically improving the design, user experience, navigation, and visual presentation.

The new website should feel like a modern international software company website in 2026.

**Important:** Do not simply copy the existing Wix layout and change its colors. Reimagine the entire experience.

---

## 2. Technology Stack

Use the following technologies:

- React
- Vite
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- @react-three/drei
- Framer Motion / Motion for animations
- Lucide React for icons
- React Router for navigation

Frontend only for Phase 1.

No backend, database, authentication, or server-side functionality.

Use clean, reusable components and maintainable architecture.

---

## 3. Design Direction

### Visual Identity

Create a sophisticated technology-oriented design.

The website should communicate:
- Professionalism
- Reliability
- Innovation
- Experience
- Advanced software solutions
- Business efficiency

### Suggested visual direction

- Premium dark navy / charcoal sections.
- Clean white and light-gray sections.
- Electric blue or cyan accent colors.
- Subtle gradients.
- Glassmorphism used selectively.
- Large, beautiful Hebrew typography.
- Modern cards with subtle borders and shadows.
- Generous whitespace.
- Smooth transitions.
- Beautiful product presentations.

Avoid:
- Old-fashioned corporate layouts.
- Excessive rounded cards.
- Generic template-looking websites.
- Too many gradients.
- Excessive animations.
- Huge empty sections.
- Cartoonish illustrations.

### Typography

Use a modern Hebrew-friendly font such as Heebo or Assistant.

The entire website must support proper RTL layout.

Hebrew is the primary language.

Ensure English product names, telephone numbers, emails, and technical terms display correctly inside RTL layouts.

---

## 4. Homepage

Create a premium landing page with the following sections.

### A. Navigation

Create a modern, responsive navigation bar.

Include:
- Company logo.
- ראשי
- המוצרים שלנו
- הרחבות ומודולים
- השירות שלנו
- אודותינו
- הלקוחות שלנו
- מה חדש
- צרו קשר

Requirements:
- Sticky navigation.
- Smooth scrolling where appropriate.
- Dropdown menus for products and modules.
- Mobile navigation drawer.
- Animated hover states.
- Clear contact CTA.
- Active page indication.

Every navigation item must lead somewhere meaningful.

### B. Hero Section

Create an impressive hero section.

Suggested Hebrew messaging:

**אייל פתרונות תוכנה**

"פתרונות תוכנה מתקדמים שמניעים עסקים קדימה."

Supporting text:

"עשרות שנות ניסיון בפיתוח מערכות תוכנה מתקדמות לניהול עסקים, מוסכים ומרכזי שירות."

CTA buttons:
- גלו את הפתרונות שלנו
- צרו קשר

Visual direction:

Create an impressive Three.js visual representing connected software systems, digital networks, automotive technology, or a sophisticated 3D abstract technology environment.

Possible elements:
- Floating 3D geometric structures.
- Animated connected nodes.
- Subtle particles.
- Interactive 3D elements.
- Depth and lighting effects.

The visual must be professional, not distracting.

Provide a graceful fallback for devices that cannot render WebGL.

### C. Company Experience

Create a section highlighting the company's experience and credibility.

Use the existing website as the source of truth for company history and statistics.

For example:
- נוסדה בשנת 1979.
- ניסיון של עשרות שנים.
- פתרונות תוכנה למגוון תחומים.
- לקוחות מובילים בישראל.

Do not invent customer numbers, installation counts, or other statistics.

### D. Our Products

Create an attractive product showcase.

Include the existing products:

1. מוסכית 2020
2. בדיקת קניה לרכב
3. אופק פתרונות
4. SMSender
5. אישורית זהב
6. רישוי 2020

Each product should have:
- Dedicated visual presentation.
- Product name.
- Existing description.
- Main features.
- Product image or illustrative visual.
- Learn more link.
- Contact CTA.

Use different layouts for different products instead of repeating identical cards.

### E. מוסכית 2020 Showcase

This is an especially important product.

Present it as a major software solution for garages and automotive service centers.

Highlight:
- Garage management.
- Work orders.
- Inventory management.
- Customer management.
- App and mobile accessibility.
- Vehicle reception.
- Appointment scheduling.
- Local and cloud-based operation.
- Reporting and business management.

Use attractive software mockups and dashboard-style presentations.

Do not invent actual application capabilities beyond those documented on the original website.

### F. Additional Solutions

Showcase:
- Vehicle transportation module.
- Vehicle inspection software.
- Credit card processing integration.
- SMS messaging.
- Business management software.
- Additional extensions and modules.

Each item should link to its own relevant page.

### G. Our Services

Create a professional section for:

- מרכז תמיכה
- הדרכות והשתלמויות
- שירות וליווי אישי
- הטמעת מערכות

Use attractive iconography and interactive layouts.

### H. Our Clients

Create a premium customer showcase.

Preserve the existing customer logos where available.

Use a responsive logo grid or elegant animated logo strip.

Do not invent customer logos or partnerships.

### I. What's New

Create a modern news and updates section.

Preserve existing updates and announcements from the original website.

Examples include:
- מודול שינוע רכב.
- בדיקות קניה לרכב.
- מודולים חדשים.
- עדכוני מוצרים.

Each announcement should have a dedicated detail page.

### J. Contact CTA

Create a visually impressive contact section.

Use this exact heading:

**אנא מלאו את הטופס ואנו ניצור עמכם קשר בהקדם**

Fields:
- שם מלא
- כתובת דוא"ל
- מספר טלפון
- נושא הפנייה
- כתבו לנו

Button:
**שליחת פנייה**

For Phase 1:
- Implement frontend form validation.
- Validate required fields.
- Validate email and phone formats.
- Display appropriate success/error UI states.
- Do not pretend that a message was actually sent.
- No backend integration yet.

### K. Footer

Create a professional footer containing:

- Company logo.
- Company description.
- Product navigation.
- Important links.
- Contact details.
- Address.
- Phone.
- Fax.
- Email.
- Business hours.
- Privacy policy.
- Copyright.

Preserve the original business contact information.

---

## 5. Dedicated Pages and Routing

Do not make this a single-page website where all the navigation items lead to the same section.

Build a real multi-page experience using React Router.

Every important page and product must have its own route.

Suggested structure:

### Main pages

- `/` — Homepage
- `/about` — אודותינו
- `/products` — המוצרים שלנו
- `/services` — השירות שלנו
- `/clients` — הלקוחות שלנו
- `/news` — מה חדש
- `/contact` — צרו קשר
- `/support` — מרכז תמיכה
- `/training` — הדרכות והשתלמויות

### Product pages

- `/products/musahit` — מוסכית 2020
- `/products/vehicle-inspection` — בדיקת קניה לרכב
- `/products/ofek` — אופק פתרונות
- `/products/smsender` — SMSender
- `/products/ishurit` — אישורית זהב
- `/products/licensing` — רישוי 2020

### Modules

- `/modules` — הרחבות ומודולים
- `/modules/vehicle-transport` — מודול שינוע רכב
- `/modules/barcode` — מודול ברקוד
- `/modules/supplier-orders` — הזמנות לספקים
- `/modules/customer-orders` — הזמנות לקוח
- `/modules/payment` — סליקת אשראי

The list is a starting point. Inspect the original website and identify additional important pages, modules, and links before finalizing the routing structure.

Preserve the original URL paths where practical, or provide appropriate redirects when hosting infrastructure allows it.

---

## 6. Dedicated Page: Vehicle Transportation

Reference:
https://www.eyalcomp.co.il/shinoha

Create a completely redesigned product page for:

**מודול שינוע רכב**

Keep the original functionality descriptions and business information.

Highlight:
- רישום רכב לשינוע בזמן קביעת תור ללקוח.
- לוח תכנון זמנים לכל נהג.
- הפקת דוחות שינוע.
- התראות בעת פתיחה וסגירה של כרטיס עבודה.
- עדכון מונה קילומטרים.
- הדפסת אישור יציאה.
- היסטוריית שינוע.
- ניהול רכבים חלופיים והשכרה.

Design this page with:
- Strong hero section.
- Vehicle transportation visual.
- Feature showcase.
- Workflow visualization.
- Modern screenshots/mockups.
- Contact CTA.

Use subtle animations to illustrate how the workflow operates.

---

## 7. Three.js and 3D Experience

Three.js should add real visual value.

Do not add random 3D objects just because the technology is available.

Use 3D selectively in:
- Homepage hero.
- Main product showcase.
- Software/network visualizations.
- Selected transitions and interactive demonstrations.

Possible ideas:
- Interactive 3D technology environment.
- Floating connected software nodes.
- Automotive-themed 3D scene.
- Animated abstract network.
- Interactive product presentation.

Performance requirements:
- Lazy-load 3D scenes.
- Optimize models and textures.
- Avoid unnecessary high-poly models.
- Respect reduced-motion preferences.
- Provide mobile-friendly alternatives.
- Avoid blocking page loading.
- Ensure the site works without WebGL.

The website must remain fast and usable even with all animations disabled.

---

## 8. Animations and Interactions

Use Motion / Framer Motion for:
- Smooth page transitions.
- Scroll reveal animations.
- Hover interactions.
- Navigation transitions.
- Product card interactions.
- Section entrances.
- Subtle parallax effects.

All interactive elements must actually work.

Examples:
- Dropdowns open and close.
- Navigation works.
- Buttons navigate to real pages.
- Forms validate.
- Mobile menu works.
- Cards navigate to the appropriate product pages.
- Contact buttons work.

Do not create decorative buttons that do nothing.

---

## 9. Responsive Design

The entire website must be fully responsive.

Test:
- Desktop.
- Laptop.
- Tablet.
- Mobile.

Special attention:
- Hebrew RTL alignment.
- Navigation on mobile.
- Three.js performance on mobile.
- Product cards.
- Contact forms.
- Footer layout.
- Text wrapping.

No horizontal overflow.

---

## 10. Project Architecture

Use a clean, scalable folder structure.

Suggested structure:

```text
src/
├── assets/
│   ├── images/
│   ├── logos/
│   └── models/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── footer/
│   ├── ui/
│   ├── products/
│   └── sections/
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Products/
│   ├── Services/
│   ├── Clients/
│   ├── News/
│   ├── Contact/
│   └── Modules/
├── three/
│   ├── scenes/
│   └── components/
├── data/
├── hooks/
├── lib/
├── styles/
├── App.tsx
└── main.tsx
```

Keep content and product information in reusable data structures instead of duplicating it across components.

---

## 11. SEO and Accessibility

Implement:
- Proper page titles.
- Meta descriptions.
- Semantic HTML.
- Accessible navigation.
- Keyboard navigation.
- Image alt attributes.
- Correct RTL metadata.
- Hebrew-friendly URLs where appropriate.
- Open Graph metadata.
- Sitemap.
- Robots.txt.

Use good accessibility practices and sufficient color contrast.

---

## 12. Important Business Content Rules

The existing website is the primary source of truth.

Before implementing:
1. Inspect the homepage.
2. Inspect all navigation items.
3. Inspect all product pages.
4. Inspect all module pages.
5. Inspect service and support pages.
6. Inspect all relevant links and CTAs.
7. Review available images, logos, and screenshots.
8. Document the existing content and relationships between pages.

Do not omit important existing information.

Do not invent:
- Product features.
- Customer relationships.
- Company statistics.
- Testimonials.
- Certifications.
- Business contact details.

Fix obvious spelling and formatting issues in Hebrew, without changing the original meaning.

Keep the original company name and brand identity.

---

## 13. Development Phases

### Phase 1 — Research and Planning

- Inspect the existing website.
- Build a complete list of pages and links.
- Identify reusable images and assets.
- Document existing products and features.
- Establish the design system.
- Finalize the page architecture.

### Phase 2 — Project Setup

- Initialize React + Vite + TypeScript.
- Configure Tailwind CSS.
- Install React Router.
- Install Motion.
- Install Three.js and React Three Fiber.
- Set up global RTL styles.
- Establish reusable design tokens.

### Phase 3 — Core Design

- Build navigation.
- Build footer.
- Build typography system.
- Build buttons and reusable UI components.
- Build responsive layouts.

### Phase 4 — Homepage

Implement all homepage sections.

Focus on creating an impressive first impression.

### Phase 5 — Internal Pages

Implement all product pages, modules, services, company information, clients, news, and contact pages.

Ensure every link leads to the correct destination.

### Phase 6 — 3D and Animations

Implement optimized Three.js scenes and subtle motion effects.

### Phase 7 — Quality Assurance

- Test every route.
- Test every button.
- Test every navigation item.
- Test all dropdowns.
- Test form validation.
- Test RTL.
- Test responsive behavior.
- Check browser console errors.
- Check loading performance.
- Check broken images and links.

### Phase 8 — Final Polish

Review the entire website as a real customer would.

Make sure the final result looks like one cohesive, premium product.

---

## 14. Definition of Done

The project is complete when:

- The website is completely redesigned.
- All important original content is preserved.
- All major pages have dedicated routes.
- All navigation links work.
- All product pages are implemented.
- The vehicle transportation page is redesigned.
- Contact form frontend validation works.
- 3D elements work and have fallbacks.
- Animations are smooth.
- RTL is correct throughout.
- Mobile and desktop layouts work.
- No broken navigation or dead buttons remain.
- No console errors remain.
- The application builds successfully.

---

## 15. Final Instructions to OpenCode

**This is a complete website redesign project, not a quick landing page.**

Do not start coding immediately.

First inspect the original website thoroughly and understand the company's business, products, services, and existing navigation.

Then create a detailed implementation checklist and execute the project phase by phase.

Prioritize excellent visual quality, functionality, maintainability, and performance.

Use your design judgment to create something significantly better than the existing website.

Do not ask me to approve every small design decision. Make professional decisions independently.

If some original content or functionality cannot be verified, document it rather than inventing information.

**The final result should look like a premium, modern software company website — not a redesigned Wix template.**