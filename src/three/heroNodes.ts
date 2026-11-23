export type HeroNodeVisual = {
  slug: string
  position: [number, number, number]
  size: number
  color: string
}

export const heroNodeVisuals: HeroNodeVisual[] = [
  { slug: 'musahit', position: [1.4, 2.25, 0.1], size: 0.16, color: '#1D6FF2' },
  { slug: 'vehicle-inspection', position: [2.9, -0.3, -0.1], size: 0.13, color: '#35CFD9' },
  { slug: 'ofek', position: [1.25, -2.4, 0.2], size: 0.14, color: '#0FA3AE' },
  { slug: 'smsender', position: [-1.25, -2.4, 0.2], size: 0.13, color: '#4C93FF' },
  { slug: 'ishurit', position: [-2.9, -0.3, -0.1], size: 0.14, color: '#2DD4BF' },
  { slug: 'licensing', position: [-1.4, 2.25, 0.1], size: 0.16, color: '#60A5FA' },
]
