import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import Modules from '@/pages/Modules'
import ModuleDetail from '@/pages/ModuleDetail'
import Services from '@/pages/Services'
import Clients from '@/pages/Clients'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import Contact from '@/pages/Contact'
import Support from '@/pages/Support'
import Training from '@/pages/Training'
import Privacy from '@/pages/Privacy'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="modules" element={<Modules />} />
        <Route path="modules/:slug" element={<ModuleDetail />} />
        <Route path="services" element={<Services />} />
        <Route path="clients" element={<Clients />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="support" element={<Support />} />
        <Route path="training" element={<Training />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/about-us" element={<Navigate to="/about" replace />} />
      <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
      <Route path="/modolim" element={<Navigate to="/modules" replace />} />
      <Route path="/shinoha" element={<Navigate to="/modules/vehicle-transport" replace />} />
      <Route path="/musachit" element={<Navigate to="/products/musahit" replace />} />
      <Route path="/products/musachit" element={<Navigate to="/products/musahit" replace />} />
      <Route path="/buying-tests" element={<Navigate to="/products/vehicle-inspection" replace />} />
      <Route path="/ofek" element={<Navigate to="/products/ofek" replace />} />
      <Route path="/smsender" element={<Navigate to="/products/smsender" replace />} />
      <Route path="/aishurit" element={<Navigate to="/products/ishurit" replace />} />
      <Route path="/copy-of" element={<Navigate to="/products/licensing" replace />} />
      <Route path="/tutorials" element={<Navigate to="/training" replace />} />
      <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
    </Routes>
  )
}
