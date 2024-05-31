import React, { ReactElement, ReactNode, useEffect, useState, useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface StepProps {
  name: string
  children: ReactNode
  onEnter?: () => void
  onLeave?: () => void
}

interface FunnelProps {
  children: Array<ReactElement<StepProps>>
}

interface UseFunnelOptions {
  initialStep: string
  stepParamName?: string
}

const useFunnel = ({ initialStep, stepParamName = 'step' }: UseFunnelOptions) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [previousStep, setPreviousStep] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const queryStep = params.get(stepParamName) || initialStep

  useEffect(() => {
    if (initialStep === currentStep) {
      router.push(`${pathname}?${stepParamName}=${initialStep}`) // 초기 URL 설정
    } else {
      setCurrentStep(queryStep)
    }
  }, [initialStep, queryStep]) // pathname 및 stepParamName 추가

  const setNextStep = useCallback(
    (nextStep: string) => {
      setPreviousStep(currentStep) // 현재 단계를 이전 단계로 설정
      setCurrentStep(nextStep) // 다음 단계로 현재 상태 업데이트
      router.push(`${pathname}?${stepParamName}=${nextStep}`) // URL을 다음 단계로 업데이트
    },
    [currentStep, pathname, stepParamName], // queryStep 의존성 제거
  )
  const Funnel = useCallback(
    ({ children }: FunnelProps) => {
      const targetStep = children.find(child => child.props.name === currentStep) || children[0]
      const prevStepElement = children.find(child => child.props.name === previousStep)

      useEffect(() => {
        prevStepElement?.props.onLeave?.()
        targetStep.props.onEnter?.()
      }, [targetStep, prevStepElement])

      return <>{targetStep}</>
    },
    [currentStep, previousStep],
  )

  const Step = ({ children }: StepProps) => <>{children}</>

  return { Funnel, Step, setNextStep, currentStep }
}

export default useFunnel
