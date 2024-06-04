import { useEffect, useRef } from 'react'
import lottie, { AnimationConfigWithData, AnimationConfigWithPath } from 'lottie-web'

interface LottieProps {
  animationData: AnimationConfigWithData['animationData']
  width: number
  height: number
  speed?: number
  animationConfig?: AnimationConfigWithPath
}

export const Lottie = ({ animationData, width, height, animationConfig }: LottieProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const clickAni = useRef<HTMLDivElement>(null)

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

    clickAni.current?.addEventListener('click', () => {
      animation.play()
      animation.setLoop(true)
      setTimeout(() => {
        animation.stop()
      }, 2000)
    })

    return () => {
      animation.destroy()
    }
  }, [animationData])

  return <div style={{ width, height }} ref={ref} />
}
