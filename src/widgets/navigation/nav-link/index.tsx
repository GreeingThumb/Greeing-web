import { Link, LinkProps } from '@/shared/ui/links/link'
import * as style from './style.css'

const NavBarLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      className={({ isActive }) => `${style.navBarLink} ${isActive ? style.activeLink : style.inactiveLink}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default NavBarLink
