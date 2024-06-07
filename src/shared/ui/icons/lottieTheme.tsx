import { useEffect, useRef } from 'react'
import type { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'
import lottie from 'lottie-web'

interface LottieProps {
  animationData: AnimationConfigWithData['animationData']
  width: number
  height: number
  animationConfig?: AnimationConfigWithPath
}

export const Lottie = ({ animationData, width, height, animationConfig }: LottieProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const animation = lottie.loadAnimation({
      animationData,
      container: ref.current,
      renderer: 'canvas',

      ...animationConfig,
      loop: false,
      autoplay: false,
    })

    return () => {
      animation.destroy()
    }
  }, [animationData])

  return <div style={{ width, height }} ref={ref} />
}
