import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { company, footerLinks } from '@/data/site'
import { products } from '@/data/products'
import { images } from '@/data/imageAssets'
import { Logo } from '@/components/ui/Logo'
import { SmartImage } from '@/components/ui/SmartImage'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="container-page relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{company.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={company.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-1.5 transition-colors hover:border-cyan-400/40"
                aria-label="אייל פתרונות תוכנה בפייסבוק"
              >
                <SmartImage image={images.facebookButton} className="h-8 w-auto" />
              </a>
              <a
                href={company.waze}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-1.5 transition-colors hover:border-cyan-400/40"
                aria-label="ניווט אלינו באמצעות Waze"
              >
                <SmartImage image={images.wazeButton} className="h-8 w-auto" />
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
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
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
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white">צרו קשר</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-cyan-300" />
                <a href={company.phoneHref} className="hover:text-white" dir="ltr">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 shrink-0 text-cyan-300" />
                <span dir="ltr">{company.fax}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-cyan-300" />
                <a href={`mailto:${company.email}`} className="hover:text-white" dir="ltr">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. כל הזכויות שמורות.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="transition-colors hover:text-slate-300">
              מדיניות פרטיות
            </Link>
            <a
              href={company.cardcom}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-slate-300"
            >
              סליקת אשראי — Cardcom
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
