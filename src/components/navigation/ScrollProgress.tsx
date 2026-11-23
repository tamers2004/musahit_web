import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.3,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: 'right' }}
      className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-l from-brand-500 via-brand-400 to-signal"
    />
  )
}
