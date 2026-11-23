import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'soft'

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  soft: 'btn border border-brand-500/20 bg-brand-50 text-brand-700 hover:border-brand-500/40 hover:bg-brand-100',
}

type ButtonLinkProps = {
  to?: string
  href?: string
  variant?: Variant
  className?: string
  children: ReactNode
  external?: boolean
}

export function ButtonLink({ to, href, variant = 'primary', className, children, external }: ButtonLinkProps) {
  const classes = cn(variants[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes}>
      {children}
    </Link>
  )
}
