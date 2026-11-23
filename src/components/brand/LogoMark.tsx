import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
  gradientId?: string
}

export function LogoMark({ className, gradientId = 'eyal-mark-gradient' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn('block', className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="3" x2="42" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4C93FF" />
          <stop offset="0.55" stopColor="#1D6FF2" />
          <stop offset="1" stopColor="#0B45A6" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill={`url(#${gradientId})`} />
      <circle cx="24" cy="24" r="22.1" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
      <path
        d="M18 11.5C15.8 13.7 14.5 16.7 14.5 20v8c0 3.3 1.3 6.3 3.5 8.5"
        stroke="rgba(255,255,255,0.42)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <g fill="#FFFFFF">
        <rect x="15.5" y="14" width="5.5" height="20" rx="2.75" />
        <rect x="18.25" y="14" width="14.25" height="5.5" rx="2.75" />
        <rect x="18.25" y="21.25" width="9.75" height="5.5" rx="2.75" />
        <rect x="18.25" y="28.5" width="14.25" height="5.5" rx="2.75" />
      </g>
    </svg>
  )
}
