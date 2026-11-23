import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/footer/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { BackToTop } from '@/components/layout/BackToTop'
import { AccessibilityWidget } from '@/accessibility/AccessibilityWidget'

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <ScrollToTop />
      <Header />
      <main key={pathname} id="main" className="page-enter flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <AccessibilityWidget />
    </div>
  )
}
