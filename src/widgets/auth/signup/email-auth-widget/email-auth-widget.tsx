import { InputLabel } from '@/shared/ui/input-label'
import { Input } from '@/shared/ui/input'
import { Controller, useFormContext } from 'react-hook-form'
import { validateEmail } from '@/shared/utils/validateRules/validateEmail'
import { Button } from '../../../../shared/ui/button'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageAnimation } from '@/shared/ui/page-animation'

const EmailAuthWidget = () => {
  const [isEmailSend, setIsEmailSend] = useState(false)
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isError = !!errors.email?.message

  return (
    <PageAnimation>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p
          style={{ whiteSpace: 'pre-wrap', fontSize: '2.4rem', fontWeight: 'bold' }}
        >{`가입을 진행하기 위해\n이메일을 인증해 주세요!`}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <InputLabel isError={isError}>이메일</InputLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <Controller
                control={control}
                name={'email'}
                rules={{
                  validate: validateEmail,
                }}
                render={({ field }) => <Input placeholder="이메일" isError={isError} {...field} />}
              />
            </div>
          </div>
          {isEmailSend && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'backOut',
                delay: 0.2,
              }}
            >
              <Input placeholder="인증번호" />
            </motion.div>
          )}
          <Button variant="contained" style={{ width: '100%' }} onClick={() => setIsEmailSend(true)}>
            {isEmailSend ? '재전송' : '인증받기'}
          </Button>
        </div>
      </div>
    </PageAnimation>
  )
}

export default EmailAuthWidget
