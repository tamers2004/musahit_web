import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export const A11Y_FEATURES = [
  'accessibleMode',
  'keyboardNav',
  'disableAnimations',
  'highContrast',
  'invertColors',
  'grayscale',
  'readableFont',
  'underlineLinks',
  'highlightHeadings',
  'highlightLinks',
  'largeCursor',
  'readingRuler',
] as const

export type A11yFeature = (typeof A11Y_FEATURES)[number]

export type A11ySettings = {
  features: Record<A11yFeature, boolean>
  textScale: number
  textSpacing: number
}

type A11yContextValue = {
  settings: A11ySettings
  toggleFeature: (feature: A11yFeature) => void
  changeTextScale: (delta: number) => void
  changeTextSpacing: (delta: number) => void
  resetSettings: () => void
}

const STORAGE_KEY = 'eyal-a11y-settings-v1'
const SCALE_MIN = 80
const SCALE_MAX = 160
const SCALE_STEP = 10

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function emptyFeatures(): Record<A11yFeature, boolean> {
  return A11Y_FEATURES.reduce(
    (acc, feature) => ({ ...acc, [feature]: false }),
    {} as Record<A11yFeature, boolean>,
  )
}

function defaultSettings(): A11ySettings {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return {
    features: { ...emptyFeatures(), disableAnimations: Boolean(prefersReduced) },
    textScale: 100,
    textSpacing: 100,
  }
}

function loadSettings(): A11ySettings {
  const base = defaultSettings()
  if (typeof window === 'undefined') return base

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return base

    const parsed = JSON.parse(raw) as Partial<A11ySettings>
    const features = { ...base.features }

    for (const feature of A11Y_FEATURES) {
      if (typeof parsed.features?.[feature] === 'boolean') {
        features[feature] = parsed.features[feature] as boolean
      }
    }

    return {
      features,
      textScale: clamp(Number(parsed.textScale) || 100, SCALE_MIN, SCALE_MAX),
      textSpacing: clamp(Number(parsed.textSpacing) || 100, SCALE_MIN, SCALE_MAX),
    }
  } catch {
    return base
  }
}

const featureClasses: Record<A11yFeature, string> = {
  accessibleMode: 'a11y-accessible',
  keyboardNav: 'a11y-keyboard',
  disableAnimations: 'a11y-no-motion',
  highContrast: 'a11y-contrast',
  invertColors: 'a11y-invert',
  grayscale: 'a11y-grayscale',
  readableFont: 'a11y-readable',
  underlineLinks: 'a11y-underline',
  highlightHeadings: 'a11y-headings',
  highlightLinks: 'a11y-links',
  largeCursor: 'a11y-cursor',
  readingRuler: 'a11y-ruler',
}

const A11yContext = createContext<A11yContextValue | null>(null)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<A11ySettings>(loadSettings)

  useEffect(() => {
    const root = document.documentElement

    for (const feature of A11Y_FEATURES) {
      root.classList.toggle(featureClasses[feature], settings.features[feature])
    }

    root.classList.toggle('a11y-spacing', settings.textSpacing !== 100)
    root.style.fontSize = `${settings.textScale}%`

    const spacingFactor = (settings.textSpacing - 100) / 100
    root.style.setProperty('--a11y-letter-spacing', `${spacingFactor * 0.08}em`)
    root.style.setProperty('--a11y-word-spacing', `${spacingFactor * 0.18}em`)
    root.style.setProperty('--a11y-line-height', `${1.5 + spacingFactor * 0.9}`)

    const filters: string[] = []
    if (settings.features.grayscale) filters.push('grayscale(1)')
    if (settings.features.invertColors) filters.push('invert(1) hue-rotate(180deg)')
    root.style.filter = filters.join(' ')

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      // Storage can be unavailable in private mode; settings still apply for the session.
    }
  }, [settings])

  const toggleFeature = useCallback((feature: A11yFeature) => {
    setSettings((current) => ({
      ...current,
      features: { ...current.features, [feature]: !current.features[feature] },
    }))
  }, [])

  const changeTextScale = useCallback((delta: number) => {
    setSettings((current) => ({
      ...current,
      textScale: clamp(current.textScale + delta, SCALE_MIN, SCALE_MAX),
    }))
  }, [])

  const changeTextSpacing = useCallback((delta: number) => {
    setSettings((current) => ({
      ...current,
      textSpacing: clamp(current.textSpacing + delta, SCALE_MIN, SCALE_MAX),
    }))
  }, [])

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings())
  }, [])

  const value = useMemo(
    () => ({ settings, toggleFeature, changeTextScale, changeTextSpacing, resetSettings }),
    [settings, toggleFeature, changeTextScale, changeTextSpacing, resetSettings],
  )

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>
}

export function useAccessibility() {
  const context = useContext(A11yContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}

export { SCALE_STEP }
