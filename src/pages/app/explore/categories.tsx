import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Categories({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`border border-purple-100 py-1 px-3 rounded-full flex gap-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
