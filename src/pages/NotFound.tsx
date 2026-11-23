import { Seo } from '@/components/ui/Seo'
import { ButtonLink } from '@/components/ui/ButtonLink'

export default function NotFound() {
  return (
    <>
      <Seo title="הדף לא נמצא" description="הדף שחיפשתם אינו קיים." />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 grid-bg radial-fade opacity-60" />
        <div className="container-page relative text-center">
          <span className="gradient-text text-7xl font-black sm:text-8xl">404</span>
          <h1 className="mt-4 text-3xl font-bold text-ink-950 sm:text-4xl">הדף שחיפשתם לא נמצא</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted">
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
