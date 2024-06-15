import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { AnimationConfigWithData, AnimationConfigWithPath, AnimationItem } from 'lottie-web'
import lottie from 'lottie-web'
import * as style from './style.css'

export interface LinkProps {
  href: string
  title: string
  animationData: AnimationConfigWithData['animationData']
  width: number
  height: number
  animationConfig?: AnimationConfigWithPath
}

const NavBarLink = ({ href, title, animationConfig, animationData, width, height }: LinkProps) => {
  const path = usePathname()
  const isActive = path === href
  const linkClassNames = classNames(style.navBarLink, {
    [style.activeLink]: isActive,
    [style.inactiveLink]: !isActive,
  })

  const ref = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!ref.current) return

    animationRef.current = lottie.loadAnimation({
      animationData,
      container: ref.current,
      renderer: 'canvas',
      ...animationConfig,
      loop: false,
      autoplay: false,
    })

    return () => {
      animationRef.current?.destroy()
    }
  }, [animationData, animationConfig])

  const handleClick = () => {
    animationRef.current?.goToAndPlay(0, true)
  }

  return (
    <Link className={linkClassNames} href={href} onClick={handleClick}>
      <div ref={ref} style={{ width, height }} />
      <span>{title}</span>
    </Link>
  )
}

export default NavBarLink
