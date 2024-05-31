'use client'

import useFunnel from '@/shared/hooks/useFunnel'
import { Input } from '@/shared/ui/input'

const STEPS = ['약관동의', '이메일인증', '닉네임설정', '가입축하']

const SignUpPage = () => {
  const { Funnel, Step, setNextStep } = useFunnel({ initialStep: STEPS[0] })

  return (
    <div style={{ padding: '12px' }}>
      <Funnel>
        <Step name={STEPS[0]}>
          <div>마켓팅 개인정보 활용 동의</div>
          <button onClick={() => setNextStep(STEPS[1])}>1</button>
        </Step>
        <Step name={STEPS[1]}>
          <div>이메일 인증</div>
          <button onClick={() => setNextStep(STEPS[2])}>2</button>
          <div>
            <label
              style={{
                fontSize: '16px',
                lineHeight: '20px',
                fontWeight: 700,
                color: '#2F3438',
                letterSpacing: '-0.3px',
                wordBreak: 'keep-all',
                paddingBottom: '20px',
              }}
            >
              이메일
            </label>
            <Input placeholder="이메일" />
          </div>
        </Step>
        <Step name={STEPS[2]}>
          <div>닉네임과 비밀번호 설정</div>
          <button onClick={() => setNextStep(STEPS[3])}>3</button>
        </Step>
        <Step name={STEPS[3]}>
          <div>가입축하</div>
        </Step>
      </Funnel>
    </div>
  )
}

export default SignUpPage
