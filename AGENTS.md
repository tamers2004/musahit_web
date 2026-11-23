# AGENTS.md

## Project
- Hebrew RTL marketing site for אייל פתרונות תוכנה (Eyal Software Solutions). Static React/Vite app, no backend.
- Content source of truth: the original site (eyalcomp.co.il). Never invent features, stats, clients, certifications, testimonials, or contact details.
- Current direction: premium light SaaS design with controlled navy accents, a photo-first hero, a verified importer showcase, and full-color client logos. `plan.md` / `plan2.md` are historical briefs; use this file for current conventions.

## Commands
- `npm run dev` — Vite serves under the configured base: `http://localhost:5173/musahit_web/` (not `/`).
- `npm run build` — `tsc -b && vite build`; the real typecheck + build.
- `npm run lint` — only `tsc --noEmit`; root tsconfig is solution-style (`"files": []`), so it does NOT typecheck `src`. Verify with `npm run build` or `npx tsc -b`.
- `npm run preview` — serves `dist` at `http://localhost:4173/musahit_web/`.
- No test runner. Verify via build + route/asset checks.

## Deployment
- Push to `main` triggers `.github/workflows/deploy.yml` (GitHub Actions Pages); do not add another deploy workflow.
- Vite `base` is `/musahit_web/`; `src/main.tsx` derives the router `basename` from `import.meta.env.BASE_URL`. Keep navigation on `Link`/`NavLink`; do not hardcode or assume `/`.
- The workflow copies `dist/index.html` to `dist/404.html` for SPA fallback and adds `.nojekyll`. `dist/` and `node_modules/` are gitignored.

## Structure
- `src/App.tsx` defines routes (incl. legacy redirects); pages in `src/pages`; shared UI in `src/components/*`; content in `src/data/*`.
- Hero 3D: `src/three/HeroCanvas.tsx` handles WebGL/breakpoint/reduced-motion checks and lazy-loads `src/three/HeroScene.tsx`, a direct Three.js scene (no React Three Fiber). Node positions live in `src/three/heroNodes.ts`.
- `src/data/imageAssets.ts` eagerly maps every `src/assets/images/**` file (PNG/WebP/JPG/SVG) via `import.meta.glob` and throws on missing paths; width/height are hardcoded for CLS. Add an entry there, then render via `SmartImage`.
- Official manufacturer logos are stored locally in `src/assets/images/clients/`; importer/brand relationships live in `src/data/clients.ts`.
- `images.eyalLogoWhite` is the white logo for dark backgrounds; do not place it on white.

## Hero / 3D rules
- The real Musachit screenshot is the dominant hero visual and must stay completely clear. Never place an opaque 3D canvas, glow, or overlay over it.
- The Three.js renderer must use `alpha: true` and a transparent clear color. 3D nodes/lines sit around the photo, not on top of it. No central glowing core, torus rings, large particle fields, or fast spin.
- The 3D scene is desktop-only (`min-width: 1280px`), lazy-loaded, DPR-capped, and paused offscreen/when the tab is hidden. Mobile/reduced-motion/WebGL-unavailable users get the clean photo only.
- Keep the photo in a solid white frame above the canvas (`z-10` vs `z-0`), and keep product chips below the canvas with enough spacing for the node ring.

## Design / conventions
- Tokens: brand `#1D6FF2`, ink `#070D1A`, navy accents `#07101F`, surface `#FFFFFF` / `#F6F8FC`, borders `#E2E8F2`, signal `#35CFD9`.
- Reuse the tokens and component classes in `tailwind.config.js` / `src/index.css` (`.btn-*`, `.card`, `.panel-dark`, `.field`, `.eyebrow`, `.client-logo`). Avoid reintroducing generic templates or heavy dark full-screen sections.
- Client logos must always display in their original full color by default: `filter: none; opacity: 1`. Hover may scale only; never change logo colors. The accessibility menu's intentional grayscale/invert toggles must keep working (its rules are more specific).
- Importer relationships are verified: דלק מוטורס = Mazda/Ford/BMW; יוניון מוטורס = Toyota/Lexus; טלקאר = Kia (Daihatsu is historical and intentionally omitted). Do not re-add the duplicate לקסוס מוטורס importer card.
- Heebo + full RTL; wrap phone/email/Latin product names with `dir="ltr"` as needed.
- Keep copy/content in `src/data/*`; no ad-hoc styles.
- Accessibility menu lives in `src/accessibility/*`: provider applies `a11y-*` classes/vars + filters to `<html>`, widget has all toggles, keyboard/Escape/ARIA, `localStorage` restore, reduced-motion respect. Keep it functional.
- `ContactForm` validates in-browser only and offers a prefilled `mailto:` fallback; do not claim a server submission.
- Every nav item/button must resolve to a real route; legacy aliases live in `App.tsx`. TS is strict with `noUnusedLocals`/`noUnusedParameters`; alias `@/*` -> `src/*`.
