import { Link } from 'react-router-dom'
import {
  Accessibility,
  ArrowLeft,
  ArrowUp,
  Clock,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react'
import { company, footerLinks } from '@/data/site'
import { products } from '@/data/products'
import { images } from '@/data/imageAssets'
import { Logo } from '@/components/ui/Logo'
import { SmartImage } from '@/components/ui/SmartImage'

const quickLinks = footerLinks.filter((link) => link.to !== '/privacy')

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-signal/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-signal">
              Eyal Software Solutions
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">
              מוכנים לשדרג את העבודה בעסק?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/60">
              נשמח להכיר את הצרכים שלכם, להדגים את המערכת ולהתאים את הפתרון המדויק לעסק.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              צרו קשר
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={company.phoneHref}
              className="btn-outline-white whitespace-nowrap"
              dir="ltr"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="tabular-nums">{company.phone}</span>
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{company.description}</p>
            <p className="mt-4 text-xs leading-6 text-white/40">
              {company.legalName} · נוסדה בשנת {company.founded}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={company.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="אייל פתרונות תוכנה בפייסבוק"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                פייסבוק
              </a>
              <a
                href={company.waze}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-xl border border-white/10 bg-white px-2.5 transition-opacity hover:opacity-90"
                aria-label="ניווט אלינו באמצעות Waze"
              >
                <SmartImage image={images.wazeButton} className="h-6 w-auto" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">המוצרים שלנו</h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">קישורים חשובים</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">צרו קשר</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <a
                  href={company.waze}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-6 transition-colors hover:text-white"
                >
                  {company.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <a
                  href={company.phoneHref}
                  className="whitespace-nowrap tabular-nums transition-colors hover:text-white"
                  dir="ltr"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-white"
                  dir="ltr"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <span className="tabular-nums" dir="ltr">
                  {company.fax}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <span className="leading-6">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. כל הזכויות שמורות.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-white">
              מדיניות פרטיות
            </Link>
            <Link
              to="/accessibility"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Accessibility className="h-3.5 w-3.5" aria-hidden="true" />
              הצהרת נגישות
            </Link>
            <a
              href={company.cardcom}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              סליקת אשראי — Cardcom
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] font-semibold text-white/60 transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              לראש העמוד
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
