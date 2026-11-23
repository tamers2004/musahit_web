import { Seo } from '@/components/ui/Seo'
import { ButtonLink } from '@/components/ui/ButtonLink'

export default function NotFound() {
  return (
    <>
      <Seo title="הדף לא נמצא" description="הדף שחיפשתם אינו קיים." />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 grid-lines radial-fade opacity-70" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-500/10"
          aria-hidden="true"
        />

        <div className="container-page relative text-center">
          <span className="section-index">Error 404</span>
          <h1 className="mt-4 gradient-text text-7xl font-extrabold tracking-tight sm:text-8xl">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
            הדף שחיפשתם לא נמצא
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
            ייתכן שהקישור שגוי או שהעמוד הועבר. אפשר לחזור לדף הבית או לעבור לעמוד יצירת קשר.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">חזרה לדף הבית</ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              צרו קשר
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
