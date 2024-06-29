import { useFormContext } from 'react-hook-form'
import { SignupPageTitle } from '@/entities/auth/signup/ui/signup-page-title'
import { emailAuthContentWrapper } from '@/widgets/auth/signup/email-auth-widget/email-auth-widget.css'
import { Button } from '@/shared/ui/button'
import { PageAnimation } from '@/shared/ui/page-animation'
import { NicknameInput } from '@/features/auth/signup/ui/nickname-input'
import type { SignupRequestDto } from '@/entities/model'
import { SignupRequestDtoSignupType } from '@/entities/model'
import { PasswordInput } from '@/features/auth/signup/ui/password-input'
import useSignUp from '@/entities/auth/signup/query/useSignUp'
import useSocialAuthStore from '@/entities/auth/signup/state/social-signup.state'

const NicknamePasswordWidget = () => {
  const socialUserInfo = useSocialAuthStore(state => state.userInfo)
  const {
    formState: { isValid },
    handleSubmit,
  } = useFormContext<SignupRequestDto>()

  const { signUp, isLoading } = useSignUp()

  const onSubmit = (data: SignupRequestDto) => {
    signUp({
      ...data,
      ...(socialUserInfo.signupType === SignupRequestDtoSignupType.SOCIAL && {
        temporaryToken: socialUserInfo.temporaryToken,
        socialPlatformType: socialUserInfo.oauthProvider,
        socialAccountEmail: socialUserInfo.email,
        signupType: socialUserInfo.signupType,
        providerId: socialUserInfo.uniqueIdentificationValue,
      }),
    })
  }

  return (
    <PageAnimation>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignupPageTitle>{`닉네임 비밀번호를 \n입력해 주세요`}</SignupPageTitle>
        <div className={emailAuthContentWrapper}>
          <NicknameInput />
          <PasswordInput />
          <Button fullWidth type="submit" disabled={!isValid || isLoading}>
            회원가입
          </Button>
        </div>
      </form>
    </PageAnimation>
  )
}

export default NicknamePasswordWidget
