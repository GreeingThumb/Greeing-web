import type { ReactNode } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import * as style from './style.css'

export interface LinkProps {
  to: string
  title: string
  children?: ReactNode
}

const NavBarLink = ({ to, title, children }: LinkProps) => {
  const path = usePathname()
  const isActive = path === to
  const linkClassNames = classNames(style.navBarLink, {
    [style.activeLink]: isActive,
    [style.inactiveLink]: !isActive,
  })

  return (
    <Link className={linkClassNames} href={to}>
      {children}
      {title}
    </Link>
  )
}

export default NavBarLink
