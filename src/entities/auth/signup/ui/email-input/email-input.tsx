import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { validateEmail } from '@/shared/utils/validateRules/validateEmail'
import { Input } from '@/shared/ui/input'

interface EmailInputProps {
  control: Control
  isError?: boolean
}

const EmailInput = ({ control, isError }: EmailInputProps) => {
  return (
    <Controller
      control={control}
      name="email"
      rules={{
        validate: validateEmail,
      }}
      render={({ field }) => <Input placeholder="이메일" isError={isError} {...field} />}
    />
  )
}

export default EmailInput
