import type { ReactNode } from 'react'
import { Link, type To } from 'react-router'

const styles = {
  primary: 'bg-ink text-white hover:bg-ink-2',
  secondary: 'bg-black/[0.06] text-ink hover:bg-black/[0.1]',
} as const

interface PillLinkProps {
  to: To
  children: ReactNode
  variant?: keyof typeof styles
}

export function PillLink({ to, children, variant = 'primary' }: PillLinkProps) {
  return (
    <Link
      to={to}
      viewTransition
      className={`inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[0.95rem] font-medium no-underline transition-[background-color,transform] duration-300 ease-out-expo active:scale-[0.97] ${styles[variant]}`}
    >
      {children}
    </Link>
  )
}
