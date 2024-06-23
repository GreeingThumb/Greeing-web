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
    const urlParams = new URLSearchParams(params.toString())
    if (!queryStep) {
      urlParams.set(stepParamName, initialStep)
      router.replace(`${pathname}?${urlParams.toString()}`)
    } else {
      urlParams.set(stepParamName, queryStep)
      router.replace(`${pathname}?${urlParams.toString()}`)
      setCurrentStep(queryStep)
    }
  }, [initialStep, queryStep, pathname])

  const setNextStep = useCallback(
    (nextStep: string) => {
      const urlParams = new URLSearchParams(params.toString())
      urlParams.set(stepParamName, nextStep)
      setCurrentStep(nextStep)
      router.push(`${pathname}?${urlParams.toString()}`)
    },
    [currentStep, pathname, stepParamName],
  )
  const Funnel = useCallback(
    ({ children }: FunnelProps) => {
      const targetStep = children.find(child => child.props.name === currentStep) || children[0]

      return <>{targetStep}</>
    },
    [currentStep, queryStep],
  )

  return { Funnel, Step, setNextStep, currentStep }
}

export default useFunnel
