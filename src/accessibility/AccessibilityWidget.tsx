import { useCallback, useEffect, useRef, useState } from 'react'
import { Accessibility, Check, Minus, Plus, RotateCcw, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  SCALE_STEP,
  useAccessibility,
  type A11yFeature,
} from '@/accessibility/AccessibilityContext'

const featureLabels: Record<A11yFeature, string> = {
  accessibleMode: 'גרסה נגישה',
  keyboardNav: 'ניווט מקלדת',
  disableAnimations: 'ביטול אנימציות והבהובים',
  highContrast: 'ניגודיות גבוהה',
  invertColors: 'היפוך צבעים',
  grayscale: 'גווני אפור',
  readableFont: 'גופן קריא',
  underlineLinks: 'קו תחתון לקישורים',
  highlightHeadings: 'הדגשת כותרות',
  highlightLinks: 'הדגשת קישורים ולחצנים',
  largeCursor: 'סמן עכבר גדול',
  readingRuler: 'סרגל קריאה',
}

const featureOrder: A11yFeature[] = [
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
]

function ReadingRuler() {
  const [top, setTop] = useState(0)

  useEffect(() => {
    const onPointer = (event: PointerEvent) => setTop(event.clientY)
    const onFocus = (event: FocusEvent) => {
      const target = event.target
      if (target instanceof HTMLElement) {
        const rect = target.getBoundingClientRect()
        setTop(rect.top + rect.height / 2)
      }
    }

    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('focusin', onFocus)

    return () => {
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('focusin', onFocus)
    }
  }, [])

  return (
    <div
      className="a11y-reading-ruler"
      style={{ top: `${top}px` }}
      aria-hidden="true"
    />
  )
}

export function AccessibilityWidget() {
  const { settings, toggleFeature, changeTextScale, changeTextSpacing, resetSettings } =
    useAccessibility()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, close])

  const scaleOffset = settings.textScale - 100
  const scaleLabel = scaleOffset > 0 ? `+${scaleOffset}%` : `${scaleOffset}%`
  const spacingOffset = settings.textSpacing - 100
  const spacingLabel = spacingOffset > 0 ? `+${spacingOffset}%` : `${spacingOffset}%`

  return (
    <>
      {settings.features.readingRuler ? <ReadingRuler /> : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-4 left-4 z-[80] grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white shadow-soft transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-6 sm:left-6"
        aria-label={open ? 'סגירת תפריט נגישות' : 'פתיחת תפריט נגישות'}
      >
        <Accessibility className="h-7 w-7" aria-hidden="true" />
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-[85] bg-ink-950/25"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            id="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-panel-title"
            className="fixed inset-x-4 bottom-4 z-[90] max-h-[85vh] overflow-y-auto rounded-2xl border border-line bg-white p-4 shadow-soft sm:left-6 sm:right-auto sm:w-[23rem]"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 id="a11y-panel-title" className="text-lg font-bold text-ink-950">
                תפריט נגישות
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink-900 transition-colors hover:bg-surface-muted"
                aria-label="סגירת תפריט נגישות"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2 rounded-xl border border-line bg-surface-muted px-3 py-2">
                <span className="text-xs font-medium text-ink-900">גודל טקסט</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => changeTextScale(-SCALE_STEP)}
                    disabled={settings.textScale <= 80}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-ink-900 disabled:opacity-40"
                    aria-label="הקטנת גודל טקסט"
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <span className="min-w-[3.25rem] text-center text-xs font-semibold text-ink-950" dir="ltr">
                    {scaleLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => changeTextScale(SCALE_STEP)}
                    disabled={settings.textScale >= 160}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-ink-900 disabled:opacity-40"
                    aria-label="הגדלת גודל טקסט"
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-xl border border-line bg-surface-muted px-3 py-2">
                <span className="text-xs font-medium text-ink-900">ריווח טקסט</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => changeTextSpacing(-SCALE_STEP)}
                    disabled={settings.textSpacing <= 80}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-ink-900 disabled:opacity-40"
                    aria-label="הקטנת ריווח טקסט"
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <span className="min-w-[3.25rem] text-center text-xs font-semibold text-ink-950" dir="ltr">
                    {spacingLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => changeTextSpacing(SCALE_STEP)}
                    disabled={settings.textSpacing >= 160}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-white text-ink-900 disabled:opacity-40"
                    aria-label="הגדלת ריווח טקסט"
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {featureOrder.map((feature) => {
                  const active = settings.features[feature]
                  return (
                    <button
                      key={feature}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleFeature(feature)}
                      className={cn(
                        'flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-start text-xs font-medium transition-colors',
                        active
                          ? 'border-brand-500 bg-brand-50 text-brand-700'
                          : 'border-line bg-white text-ink-700 hover:bg-surface-muted',
                      )}
                    >
                      <span>{featureLabels[feature]}</span>
                      <span
                        className={cn(
                          'grid h-4 w-4 shrink-0 place-items-center rounded-full border',
                          active
                            ? 'border-brand-500 bg-brand-500 text-white'
                            : 'border-line-strong bg-white',
                        )}
                        aria-hidden="true"
                      >
                        {active ? <Check className="h-2.5 w-2.5" /> : null}
                      </span>
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={resetSettings}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-line px-3 py-2.5 text-xs font-semibold text-ink-900 transition-colors hover:bg-surface-muted"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                איפוס הגדרות נגישות
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
