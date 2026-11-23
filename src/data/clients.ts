import type { ImageAsset } from '@/data/imageAssets'
import { images } from '@/data/imageAssets'

export type ImporterBrand = {
  name: string
  latin: string
  logo: ImageAsset
}

export type ClientGroup = {
  importer: string
  latin: string
  brands: string[]
  brandLogos: ImporterBrand[]
  note?: string
}

export type ClientLogo = {
  name: string
  image: ImageAsset
}

export const clientGroups: ClientGroup[] = [
  {
    importer: 'דלק מוטורס',
    latin: 'Delek Motors',
    brands: ['מאזדה', 'פורד', 'BMW'],
    brandLogos: [
      { name: 'מאזדה', latin: 'Mazda', logo: images.clientMazda },
      { name: 'פורד', latin: 'Ford', logo: images.clientFord },
      { name: 'BMW', latin: 'BMW', logo: images.clientBmw },
    ],
    note: 'מאזדה, פורד ו־BMW מיובאים על ידי דלק מוטורס.',
  },
  {
    importer: 'יוניון מוטורס',
    latin: 'Union Motors',
    brands: ['טויוטה', 'לקסוס'],
    brandLogos: [
      { name: 'טויוטה', latin: 'Toyota', logo: images.clientToyota },
      { name: 'לקסוס', latin: 'Lexus', logo: images.clientLexus },
    ],
    note: 'טויוטה ולקסוס מיובאות על ידי יוניון מוטורס.',
  },
  {
    importer: 'טלקאר',
    latin: 'Talkar',
    brands: ['קיה'],
    brandLogos: [{ name: 'קיה', latin: 'Kia', logo: images.clientKia }],
    note: 'קיה מיובאת על ידי טלקאר.',
  },
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
  { name: 'Mazda', image: images.clientMazda },
  { name: 'Ford', image: images.clientFord },
  { name: 'BMW', image: images.clientBmw },
  { name: 'Toyota', image: images.clientToyota },
  { name: 'Lexus', image: images.clientLexus },
]

export const clientBrands = clientLogos.map((logo) => logo.name)
