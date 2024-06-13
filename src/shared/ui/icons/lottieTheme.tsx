import { useEffect, useRef } from 'react'
import type { AnimationConfigWithData, AnimationConfigWithPath, AnimationItem } from 'lottie-web'
import lottie from 'lottie-web'

interface LottieProps {
  animationData: AnimationConfigWithData['animationData']
  width: number
  height: number
  animationConfig?: AnimationConfigWithPath
}

export const Lottie = ({ animationData, width, height, animationConfig }: LottieProps) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      animationRef.current?.goToAndPlay(0, true)
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      style={{ width, height, cursor: 'pointer' }}
      ref={ref}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  )
}
