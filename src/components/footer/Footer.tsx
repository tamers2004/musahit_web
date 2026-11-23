import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { company, footerLinks } from '@/data/site'
import { products } from '@/data/products'
import { images } from '@/data/imageAssets'
import { Logo } from '@/components/ui/Logo'
import { SmartImage } from '@/components/ui/SmartImage'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="full" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{company.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={company.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line bg-white p-1.5 transition-colors hover:border-brand-500/40"
                aria-label="אייל פתרונות תוכנה בפייסבוק"
              >
                <SmartImage image={images.facebookButton} className="h-8 w-auto" />
              </a>
              <a
                href={company.waze}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-line bg-white p-1.5 transition-colors hover:border-brand-500/40"
                aria-label="ניווט אלינו באמצעות Waze"
              >
                <SmartImage image={images.wazeButton} className="h-8 w-auto" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-ink-950">המוצרים שלנו</h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-ink-950">קישורים חשובים</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-ink-950">צרו קשר</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={company.phoneHref}
                  className="whitespace-nowrap transition-colors hover:text-brand-600"
                  dir="ltr"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer className="h-4 w-4 shrink-0 text-brand-500" />
                <span dir="ltr">{company.fax}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-brand-600"
                  dir="ltr"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. כל הזכויות שמורות.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy" className="transition-colors hover:text-brand-600">
              מדיניות פרטיות
            </Link>
            <a
              href={company.cardcom}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-600"
            >
              סליקת אשראי — Cardcom
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
