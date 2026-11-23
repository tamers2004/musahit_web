import { Outlet } from 'react-router-dom'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/footer/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { AccessibilityWidget } from '@/accessibility/AccessibilityWidget'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
