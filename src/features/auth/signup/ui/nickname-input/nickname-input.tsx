import { Controller, useFormContext } from 'react-hook-form'
import { InputLabel } from '@/shared/ui/input-label'
import { validateNickname } from '@/shared/utils/validateRules/validateNickname'
import { Input } from '@/shared/ui/input'
import { TextMessage } from '@/shared/ui/text-message'
import useCheckNicknameDuplicate from '@/entities/auth/signup/query/useCheckNicknameDuplicate'
import { useDebounce } from '@/shared/hooks/useDebounce'

const NicknameInput = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  const isNicknameError = !!errors.nickname?.message
  const nicknameValue = watch('nickname')

  const debouncedNickname = useDebounce(nicknameValue)
  useCheckNicknameDuplicate(debouncedNickname, !isNicknameError)

  return (
    <div>
      <InputLabel isError={isNicknameError}>닉네임</InputLabel>
      <Controller
        control={control}
        name="nickname"
        rules={{
          maxLength: 19,
          minLength: 2,
          validate: validateNickname,
        }}
        render={({ field }) => <Input placeholder="닉네임" isError={isNicknameError} {...field} />}
      />
      {errors?.nickname?.message && <TextMessage type="error">{errors?.nickname?.message.toString()}</TextMessage>}
    </div>
  )
}

export default NicknameInput
