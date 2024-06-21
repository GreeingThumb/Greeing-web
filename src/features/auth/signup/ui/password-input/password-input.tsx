import { Controller, useFormContext } from 'react-hook-form'
import { InputLabel } from '@/shared/ui/input-label'
import { validatePassword } from '@/shared/utils/validateRules/validatePassword'
import { Input } from '@/shared/ui/input'
import { TextMessage } from '@/shared/ui/text-message'
import type { SignupRequestDto } from '@/entities/model'

const PasswordInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignupRequestDto>()

  const isPasswordError = !!errors.password?.message
  return (
    <div>
      <InputLabel isError={isPasswordError}>비밀번호</InputLabel>
      <Controller
        control={control}
        name="password"
        rules={{
          validate: validatePassword,
          minLength: 8,
          maxLength: 21,
        }}
        render={({ field }) => <Input placeholder="비밀번호" type="password" isError={isPasswordError} {...field} />}
      />
      {errors?.password?.message && <TextMessage type="error">{errors?.password?.message.toString()}</TextMessage>}
    </div>
  )
}

export default PasswordInput
