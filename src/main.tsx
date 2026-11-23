import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App'
import { AccessibilityProvider, useAccessibility } from './accessibility/AccessibilityContext'
import './index.css'
import './accessibility/accessibility.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function MotionRoot() {
  const { settings } = useAccessibility()

  return (
    <MotionConfig reducedMotion={settings.features.disableAnimations ? 'always' : 'user'}>
      <App />
    </MotionConfig>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccessibilityProvider>
      <BrowserRouter basename={basename}>
        <MotionRoot />
      </BrowserRouter>
    </AccessibilityProvider>
  </StrictMode>,
)
