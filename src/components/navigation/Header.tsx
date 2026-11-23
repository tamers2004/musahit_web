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
          ? 'border-white/10 bg-ink-950/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-transparent bg-ink-950/40 backdrop-blur-sm',
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="ניווט ראשי">
          {navigation.map((item) => (
            <div key={item.to} className="group relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive || isItemActive(pathname, item.to)
                      ? 'text-cyan-300'
                      : 'text-slate-300 hover:text-white',
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
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={(event) => event.currentTarget.blur()}
                        className="flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                      >
                        <span className="text-sm font-medium text-white">{child.label}</span>
                        {child.description ? (
                          <span className="mt-0.5 text-xs text-slate-400">{child.description}</span>
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
            className="hidden items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-white md:inline-flex"
            dir="ltr"
          >
            <Phone className="h-4 w-4 text-cyan-300" />
            {company.phone}
          </a>
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            צרו קשר
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/5 lg:hidden"
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
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="fixed inset-0 top-20 bg-black/50" onClick={() => setMobileOpen(false)} />
            <motion.nav
              className="relative max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-950 px-5 pb-8 pt-4"
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
                            active ? 'text-cyan-300' : 'text-slate-200',
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children ? (
                          <button
                            type="button"
                            className="grid h-10 w-10 place-items-center rounded-lg text-slate-300 hover:bg-white/5"
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
                        <div className="mb-2 ms-3 border-s border-white/10 ps-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white"
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

              <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5">
                <Link to="/contact" className="btn-primary w-full">
                  צרו קשר
                </Link>
                <a href={company.phoneHref} className="btn-ghost w-full" dir="ltr">
                  <Phone className="h-4 w-4" />
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
