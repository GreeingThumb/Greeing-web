import { useFormContext } from 'react-hook-form'
import { SignupPageTitle } from '@/entities/auth/signup/ui/signup-page-title'
import { Checkbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import type { SignUpFunnelActions } from '@/views/signup'
import { PageAnimation } from '@/shared/ui/page-animation'
import { checkboxWrapper } from '@/widgets/auth/signup/signup-agree-widget/signup-agree-widget.css'

const checkboxConfig = [
  { name: 'serviceConsent', label: '[필수] 서비스 이용약관 동의' },
  { name: 'personalInfoConsent', label: '[필수] 개인정보 처리방침에 동의' },
  { name: 'marketingConsent', label: '[선택] 마케팅 메시지 수신에 동의' },
]

const SignupAgreeWidget = ({ onNextButtonClick }: SignUpFunnelActions) => {
  const { setValue, watch } = useFormContext()

  const handleConsentChange = (name: string, checked: boolean) => {
    setValue(name, checked)
    if (name === 'allConsent') {
      checkboxConfig.forEach(item => setValue(item.name, checked))
    }
  }

  const serviceConsent = watch('serviceConsent')
  const personalInfoConsent = watch('personalInfoConsent')
  const allConsentChecked = checkboxConfig.every(item => watch(item.name))

  const isButtonDisabled = !serviceConsent || !personalInfoConsent

  return (
    <PageAnimation>
      <>
        <SignupPageTitle>{`가입을 진행하기 위해\n약관동의를 해주세요`}</SignupPageTitle>
        <Checkbox
          size="medium"
          checked={allConsentChecked}
          label="전체 동의 (선택 동의 포함)"
          onChange={e => handleConsentChange('allConsent', e.target.checked)}
        />
        <div className={checkboxWrapper}>
          {checkboxConfig.map(({ name, label }) => (
            <Checkbox
              key={name}
              size="medium"
              checked={watch(name)}
              label={label}
              onChange={e => handleConsentChange(name, e.target.checked)}
            />
          ))}
        </div>
        <Button fullWidth disabled={isButtonDisabled} onClick={onNextButtonClick}>
          다음
        </Button>
      </>
    </PageAnimation>
  )
}

export default SignupAgreeWidget
