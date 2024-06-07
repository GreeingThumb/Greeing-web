import type { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export interface LinkProps {
  to: string
  className?: string | ((options: { isActive: boolean }) => string | undefined)
  children?: ReactNode | ((options: { isActive: boolean }) => ReactNode)
}

export const Link = ({ to, children, className, ...props }: LinkProps) => {
  const router = useRouter()
  const path = usePathname()
  const isActive = path === to

  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push(to)
  }

  return (
    <button type="button" onClick={onClick} className={resolvedClassName} {...props}>
      {typeof children === 'function' ? children({ isActive }) : children}
    </button>
  )
}
