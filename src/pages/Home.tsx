import { Seo } from '@/components/ui/Seo'
import { company } from '@/data/site'
import { Hero } from '@/components/sections/Hero'
import { MusachitSpotlight } from '@/components/sections/MusachitSpotlight'
import { ProductsShowcase } from '@/components/sections/ProductsShowcase'
import { AdditionalSolutions } from '@/components/sections/AdditionalSolutions'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { Experience } from '@/components/sections/Experience'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Seo title="מוסכית 2020 ופתרונות ניהול עסק" description={company.description} />
      <Hero />
      <ProductsShowcase />
      <MusachitSpotlight />
      <AdditionalSolutions />
      <ServicesSection />
      <Experience />
      <ClientsSection />
      <NewsSection />
      <ContactCTA />
    </>
  )
}
