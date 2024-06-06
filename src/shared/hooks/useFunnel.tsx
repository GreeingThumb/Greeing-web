import type { ReactElement, ReactNode } from 'react'
import { useEffect, useState, useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface StepProps {
  name: string
  children: ReactNode
}

interface FunnelProps {
  children: Array<ReactElement<StepProps>>
}

interface UseFunnelOptions {
  initialStep: string
  stepParamName?: string
}

const Step = ({ name, children }: StepProps) => {
  return <div data-step-name={name}>{children}</div>
}

const useFunnel = ({ initialStep, stepParamName = 'step' }: UseFunnelOptions) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const queryStep = params.get(stepParamName) || initialStep

  useEffect(() => {
    if (!queryStep) {
      router.push(`${pathname}?${stepParamName}=${initialStep}`) // 초기 URL 설정
    } else {
      router.push(`${pathname}?${stepParamName}=${queryStep}`)
    }
  }, [initialStep, queryStep, pathname]) // pathname 및 stepParamName 추가

  const setNextStep = useCallback(
    (nextStep: string) => {
      setCurrentStep(nextStep)
      router.push(`${pathname}?${stepParamName}=${nextStep}`) // URL을 다음 단계로 업데이트
    },
    [currentStep, pathname, stepParamName], // queryStep 의존성 제거
  )
  const Funnel = useCallback(
    ({ children }: FunnelProps) => {
      const targetStep = children.find(child => child.props.name === currentStep) || children[0]

      return <>{targetStep}</>
    },
    [currentStep],
  )

  return { Funnel, Step, setNextStep, currentStep }
}

export default useFunnel
