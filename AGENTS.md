# AGENTS.md

## Project
- Hebrew RTL marketing site for אייל פתרונות תוכנה (Eyal Software Solutions). Static React/Vite app, no backend.
- Content source of truth: the original site (eyalcomp.co.il). Never invent features, stats, clients, certifications, testimonials, or contact details.
- Specs: `plan2.md` (repo root) is the CURRENT V2 brief (premium white redesign + accessibility menu) and overrides `plan.md` on visual direction. `plan.md` remains authoritative for routes, page inventory, content rules, and architecture.
- V2 state: the white redesign and homepage (7 sections) are implemented; the accessibility provider, widget, and CSS live in `src/accessibility/*`. Keep content/routes intact when iterating.

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
- `src/App.tsx` defines routes (incl. legacy redirects); pages in `src/pages`; shared UI in `src/components/*`; content in `src/data/*`; 3D components in `src/three/*` exist but are not mounted (home hero uses product screenshots).
- `src/data/imageAssets.ts` eagerly maps every `src/assets/images/**` file via `import.meta.glob` and throws on missing paths; width/height are hardcoded for CLS. Add an entry there, then render via `SmartImage`.
- `images.eyalLogoWhite` is the white logo for dark backgrounds; do not place it on white.

## Design / conventions
- V2 palette: bg `#FFFFFF` / `#F7F9FC`, blue `#1769D2`, text `#172033` / `#687386`, borders `#E7ECF2`, tint `#EEF5FF`. Avoid dark full-screen sections, neon, heavy glass/3D.
- The light tokens are applied in `tailwind.config.js` (`brand`/`ink`/`muted`/`line`/`surface`) and `src/index.css` (`.btn-*`, `.card`, `.glass`, `.field`). Do not reintroduce cyan/slate/dark-section utilities or mix dark and white palettes.
- Accessibility menu (plan2 §9) lives in `src/accessibility/*`: provider applies `a11y-*` classes/vars + filters to `<html>`, widget has all toggles, keyboard/Escape/ARIA, `localStorage` restore, reduced-motion respect. Keep it functional, not cosmetic-only.
- Heebo + full RTL; wrap phone/email/Latin product names with `dir="ltr"` as needed.
- Keep copy/content in `src/data/*`; reuse existing Tailwind tokens/classes; no ad-hoc styles.
- TS is strict with `noUnusedLocals`/`noUnusedParameters` (unused imports break the build); alias `@/*` -> `src/*`.
- `ContactForm` validates in-browser only and sends/stores nothing; keep the UI disclaimer honest.
- Every nav item/button must resolve to a real route; legacy aliases live in `App.tsx`.