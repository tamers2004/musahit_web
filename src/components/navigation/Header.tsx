import { useEffect, useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowLeft, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company, navigation } from '@/data/site'
import { moduleCategories, modules } from '@/data/modules'
import { products } from '@/data/products'
import { images } from '@/data/imageAssets'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'
import { Icon } from '@/components/ui/Icon'
import { SmartImage } from '@/components/ui/SmartImage'
import { ScrollProgress } from '@/components/navigation/ScrollProgress'

function isItemActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

function ProductMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-5 p-4 lg:grid-cols-[1fr_17rem]">
      <div>
        <div className="flex items-center justify-between gap-4 px-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            מערכות לניהול עסק
          </span>
          <Link
            to="/products"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
          >
            כל המוצרים
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-2 grid gap-0.5 sm:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-muted"
            >
              <span className="h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-line bg-surface-muted">
                <SmartImage
                  image={product.image}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="min-w-0 pt-0.5">
                <span className="block text-[13px] font-bold text-ink-950 group-hover:text-brand-700">
                  {product.name}
                </span>
                <span className="mt-0.5 block truncate text-[11px] text-muted">
                  {product.tagline}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950 p-4 text-white">
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative">
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-signal">
            מערכת הדגל
          </span>
          <h3 className="mt-2 text-lg font-extrabold leading-tight">מוסכית 2020</h3>
          <p className="mt-1.5 text-[11px] leading-5 text-white/65">
            ניהול מוסך ומרכזי שירות לרכב, מהצעת מחיר ועד סגירת כרטיס העבודה.
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white">
            <SmartImage image={images.musahitMonitor} className="h-auto w-full object-cover" />
          </div>
          <Link
            to="/products/musahit"
            onClick={onNavigate}
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-200 hover:text-white"
          >
            לפרטים על מוסכית
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ModulesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-5 p-4 lg:grid-cols-[1fr_13rem]">
      <div>
        <div className="flex items-center justify-between gap-4 px-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
            הרחבות לפי צורכי העסק
          </span>
          <Link
            to="/modules"
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
          >
            כל המודולים
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-2 grid gap-x-4 gap-y-3 sm:grid-cols-2">
          {moduleCategories.map((category) => (
            <div key={category.id} className="rounded-xl p-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                {category.label}
              </p>
              <div className="mt-1.5 space-y-0.5">
                {modules
                  .filter((module) => module.category === category.id)
                  .slice(0, 3)
                  .map((module) => (
                    <Link
                      key={module.slug}
                      to={`/modules/${module.slug}`}
                      onClick={onNavigate}
                      className="group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-surface-muted"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-brand-500/15 bg-brand-50 text-brand-600">
                        <Icon name={module.icon} className="h-3 w-3" />
                      </span>
                      <span className="truncate text-[12px] font-semibold text-ink-800 group-hover:text-brand-700">
                        {module.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface-muted p-4">
        <div>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-500/15 bg-white text-brand-600 shadow-card">
            <Icon name="layers" className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-sm font-extrabold text-ink-950">מודולים שמתרחבים איתכם</h3>
          <p className="mt-1.5 text-[11px] leading-5 text-muted">
            שינוע רכב, בר קוד, הזמנות, סליקה, SMS, CRM, תורים, מדדים ועוד.
          </p>
        </div>
        <Link
          to="/modules"
          onClick={onNavigate}
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-ink-900 shadow-card transition-colors hover:text-brand-700"
        >
          לעיון בכל המודולים
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const { pathname } = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return

    const timer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    window.setTimeout(() => mobileTriggerRef.current?.focus(), 0)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpenMenu(null)
    }
  }

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && openMenu) {
      event.preventDefault()
      setOpenMenu(null)
      const trigger = event.currentTarget.querySelector<HTMLElement>('a')
      trigger?.focus()
    }
  }

  return (
    <header className={cn('fixed inset-x-0 top-0', mobileOpen ? 'z-[90]' : 'z-50')}>
      <div
        className={cn(
          'relative border-b transition-all duration-300',
          scrolled
            ? 'border-line/80 bg-white/[0.92] shadow-[0_16px_50px_-32px_rgba(7,13,26,0.42)] backdrop-blur-xl'
            : 'border-transparent bg-white/70 backdrop-blur-lg',
        )}
      >
        <div className="container-page">
          <div
            className={cn(
              'flex items-center justify-between gap-3 transition-all duration-300',
              scrolled ? 'h-16' : 'h-[4.75rem]',
            )}
          >
            <div className="flex min-w-0 items-center gap-3 xl:gap-6">
              <Logo />

              <nav className="hidden items-center gap-0.5 xl:flex" aria-label="ניווט ראשי">
                {navigation.map((item) => {
                  const active = isItemActive(pathname, item.to)
                  const hasMenu = Boolean(item.children)
                  const isOpen = openMenu === item.to && hasMenu
                  const menuId = `mega-${item.to.replace(/\//g, '')}`

                  return (
                    <div
                      key={item.to}
                      className="relative"
                      onMouseEnter={() => hasMenu && setOpenMenu(item.to)}
                      onMouseLeave={() => hasMenu && setOpenMenu(null)}
                      onFocus={() => hasMenu && setOpenMenu(item.to)}
                      onBlur={handleBlur}
                      onKeyDown={handleMenuKeyDown}
                    >
                      <NavLink
                        to={item.to}
                        aria-haspopup={hasMenu ? 'true' : undefined}
                        aria-expanded={hasMenu ? isOpen : undefined}
                        aria-controls={hasMenu ? menuId : undefined}
                        className={cn(
                          'inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[13px] font-bold transition-colors xl:text-sm',
                          active
                            ? 'bg-brand-50/80 text-brand-700'
                            : 'text-ink-700 hover:bg-surface-muted hover:text-ink-950',
                        )}
                      >
                        {item.label}
                        {hasMenu ? (
                          <ChevronDown
                            className={cn(
                              'h-3.5 w-3.5 transition-transform duration-200',
                              isOpen && 'rotate-180',
                            )}
                            aria-hidden="true"
                          />
                        ) : null}
                      </NavLink>

                      {isOpen ? (
                        <div
                          id={menuId}
                          className={cn(
                            'absolute right-0 top-full z-50 mt-3 overflow-hidden rounded-2xl border border-line bg-white shadow-float',
                            item.to === '/products' ? 'w-[45rem]' : 'w-[42rem]',
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 border-l border-t border-line bg-white"
                          />
                          {item.to === '/products' ? (
                            <ProductMegaMenu onNavigate={() => setOpenMenu(null)} />
                          ) : (
                            <ModulesMegaMenu onNavigate={() => setOpenMenu(null)} />
                          )}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </nav>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={company.phoneHref}
                className="group hidden items-center gap-2 rounded-xl border border-line/80 bg-white/60 px-3 py-2 text-sm font-bold text-ink-900 transition-colors hover:border-brand-500/30 hover:bg-brand-50 hover:text-brand-700 lg:inline-flex"
                dir="ltr"
              >
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-white">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap tabular-nums">{company.phone}</span>
              </a>

              <Link
                to="/contact"
                className="btn-primary hidden px-4 py-2.5 text-[13px] sm:inline-flex"
              >
                צרו קשר
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </Link>

              <button
                ref={mobileTriggerRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/70 text-ink-900 transition-colors hover:border-brand-500/30 hover:bg-brand-50 xl:hidden"
                aria-label="פתיחת תפריט ניווט"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {scrolled ? <ScrollProgress /> : null}
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[95] xl:hidden">
          <div
            className="absolute inset-0 bg-ink-950/45 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden="true"
          />

          <div
            ref={panelRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-nav-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-[27rem] flex-col bg-white shadow-float"
          >
              <div className="flex h-[4.75rem] shrink-0 items-center justify-between border-b border-line px-5">
                <Logo />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={closeMobile}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink-900 transition-colors hover:bg-surface-muted"
                  aria-label="סגירת תפריט"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <h2 id="mobile-nav-title" className="sr-only">
                תפריט ניווט
              </h2>

              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-3">
                <ul className="space-y-0.5">
                  {navigation.map((item) => {
                    const active = isItemActive(pathname, item.to)
                    const expanded = mobileSection === item.to
                    return (
                      <li key={item.to} className="border-b border-line/70 last:border-b-0">
                        <div className="flex items-center">
                          <Link
                            to={item.to}
                            className={cn(
                              'flex-1 py-3.5 text-[15px] font-bold',
                              active ? 'text-brand-600' : 'text-ink-950',
                            )}
                          >
                            {item.label}
                          </Link>
                          {item.children ? (
                            <button
                              type="button"
                              className="grid h-10 w-10 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-muted hover:text-ink-900"
                              aria-label={`הצגת ${item.label}`}
                              aria-expanded={expanded}
                              onClick={() => setMobileSection(expanded ? null : item.to)}
                            >
                              <ChevronDown
                                className={cn(
                                  'h-4 w-4 transition-transform',
                                  expanded && 'rotate-180',
                                )}
                                aria-hidden="true"
                              />
                            </button>
                          ) : null}
                        </div>
                        {item.children && expanded ? (
                          <div className="mb-3 ms-1 border-s border-line ps-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-brand-700"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="shrink-0 border-t border-line bg-surface-muted p-5">
                <Link to="/contact" className="btn-primary w-full">
                  צרו קשר
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="btn-ghost mt-2 w-full whitespace-nowrap bg-white"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  <span className="tabular-nums">{company.phone}</span>
                </a>
                <p className="mt-3 text-center text-[11px] leading-5 text-muted">
                  {company.hours}
                </p>
              </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
