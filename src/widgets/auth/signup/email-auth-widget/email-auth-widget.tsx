import { InputLabel } from '@/shared/ui/input-label'
import { Input } from '@/shared/ui/input'
import { Controller, useFormContext } from 'react-hook-form'
import { validateEmail } from '@/shared/lib/validateRules/validateEmail'
import { Button } from '../../../../shared/ui/button'

const EmailAuthWidget = () => {
  const { control } = useFormContext()

  return (
    <>
      <div>
        <InputLabel>이메일</InputLabel>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Controller
            control={control}
            name={'email'}
            rules={{
              validate: validateEmail,
            }}
            render={({ field }) => <Input placeholder="이메일" {...field} />}
          />
          <Button>인증받기</Button>
        </div>
      </div>
    </>
  )
}

export default EmailAuthWidget
