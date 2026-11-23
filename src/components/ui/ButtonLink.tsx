import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'dark' | 'ghost' | 'white' | 'outlineWhite' | 'soft' | 'link'

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  dark: 'btn-dark',
  ghost: 'btn-ghost',
  white: 'btn-white',
  outlineWhite: 'btn-outline-white',
  soft: 'btn-soft',
  link: 'btn-link',
}

type ButtonLinkProps = {
  to?: string
  href?: string
  variant?: Variant
  className?: string
  children: ReactNode
  external?: boolean
  ariaLabel?: string
}

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  className,
  children,
  external,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(variants[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
