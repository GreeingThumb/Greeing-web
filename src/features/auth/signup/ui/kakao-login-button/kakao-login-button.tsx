import KakaoLogoIcon from '@/shared/assets/svg/kakao.svg'
import useKakao from '@/shared/hooks/auth/useKakao'
import { kakaoLoginButton } from '@/features/auth/signup/ui/kakao-login-button/kakao-button.css'

const KakaoLoginButton = () => {
  const { kakaoActions } = useKakao()
  return (
    <button className={kakaoLoginButton} type="button" onClick={kakaoActions.login}>
      <KakaoLogoIcon />
      카카오로 계속하기
    </button>
  )
}

export default KakaoLoginButton
