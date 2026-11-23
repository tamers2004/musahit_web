import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company, navigation } from '@/data/site'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

function isItemActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSection(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-line bg-white/95 shadow-[0_10px_30px_-22px_rgba(23,32,51,0.35)] backdrop-blur-md'
          : 'border-transparent bg-white/90 backdrop-blur-sm',
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="ניווט ראשי">
          {navigation.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive || isItemActive(pathname, item.to)
                      ? 'text-brand-600'
                      : 'text-ink-700 hover:bg-surface-muted hover:text-ink-950',
                  )
                }
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                ) : null}
              </NavLink>

              {item.children ? (
                <div className="invisible absolute start-0 top-full z-50 w-80 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-soft">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={(event) => event.currentTarget.blur()}
                        className="flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted"
                      >
                        <span className="text-sm font-medium text-ink-950">{child.label}</span>
                        {child.description ? (
                          <span className="mt-0.5 text-xs text-muted">{child.description}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-brand-500/40 hover:bg-brand-50 hover:text-brand-700 md:inline-flex"
            dir="ltr"
          >
            <Phone className="h-4 w-4 text-brand-500" />
            {company.phone}
          </a>
          <Link to="/contact" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            צרו קשר
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-900 transition-colors hover:bg-surface-muted xl:hidden"
            aria-label={mobileOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="fixed inset-0 top-[4.5rem] bg-ink-950/30"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="relative max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-4"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="ניווט לנייד"
            >
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const active = isItemActive(pathname, item.to)
                  const expanded = mobileSection === item.to
                  return (
                    <li key={item.to}>
                      <div className="flex items-center">
                        <Link
                          to={item.to}
                          className={cn(
                            'flex-1 rounded-lg px-3 py-3 text-base font-medium',
                            active ? 'text-brand-600' : 'text-ink-900',
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children ? (
                          <button
                            type="button"
                            className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-surface-muted"
                            aria-label={`הצגת ${item.label}`}
                            aria-expanded={expanded}
                            onClick={() => setMobileSection(expanded ? null : item.to)}
                          >
                            <ChevronDown
                              className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')}
                            />
                          </button>
                        ) : null}
                      </div>
                      {item.children && expanded ? (
                        <div className="mb-2 ms-3 border-s border-line ps-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-muted hover:text-ink-950"
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

              <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
                <Link to="/contact" className="btn-primary w-full">
                  צרו קשר
                </Link>
                <a
                  href={company.phoneHref}
                  className="btn-ghost w-full whitespace-nowrap"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  {company.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
