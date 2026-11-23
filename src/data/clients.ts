import type { ImageAsset } from '@/data/imageAssets'
import { images } from '@/data/imageAssets'

export type ClientGroup = {
  importer: string
  brands: string[]
}

export type ClientLogo = {
  name: string
  image: ImageAsset
}

export const clientGroups: ClientGroup[] = [
  { importer: 'דלק מוטורס', brands: ['מאזדה', 'פורד', 'BMW'] },
  { importer: 'יוניון מוטורס', brands: ['טויוטה'] },
  { importer: 'טלקאר', brands: ['דייהטסו', 'קיה'] },
  { importer: 'לקסוס מוטורס', brands: ['לקסוס'] },
]

export const clientLogos: ClientLogo[] = [
  { name: 'Audi', image: images.clientAudi },
  { name: 'Suzuki', image: images.clientSuzuki },
  { name: 'Volvo', image: images.clientVolvo },
  { name: 'Mercedes-Benz', image: images.clientMercedes },
  { name: 'Subaru', image: images.clientSubaru },
  { name: 'Kia', image: images.clientKia },
  { name: 'Chrysler', image: images.clientChrysler },
  { name: 'Porsche', image: images.clientPorsche },
  { name: 'Maserati', image: images.clientMaserati },
  { name: 'Dodge', image: images.clientDodge },
  { name: 'Hyundai', image: images.clientHyundai },
  { name: 'Skoda', image: images.clientSkoda },
  { name: 'Volkswagen', image: images.clientVolkswagen },
]

export const clientBrands = clientLogos.map((logo) => logo.name)
