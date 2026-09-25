import type { ReactNode } from 'react'
import { Link, type To } from 'react-router'

const styles = {
  primary: 'bg-btn-red text-white shadow-[0_8px_20px_-8px_var(--color-btn-red)] hover:brightness-110',
  secondary: 'bg-surface text-ink shadow-[0_1px_3px_rgb(0_0_0/0.1)] hover:bg-white',
  inverse: 'bg-surface text-ink hover:bg-white',
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
      className={`inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[0.95rem] font-medium no-underline transition-[background-color,transform,filter] duration-300 ease-out-expo active:scale-[0.97] ${styles[variant]}`}
    >
      {children}
    </Link>
  )
}
