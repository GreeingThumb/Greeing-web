const passwordMinLength = 8
const passwordMaxLength = 20
const whitespaceRegex = /\s/
const passwordSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/
const lowercaseRegex = /[a-z]/
const digitRegex = /\d/

export const validatePassword = (value: string) => {
  if (!value) return '비밀번호를 입력하세요.'

  if (value.length < passwordMinLength) return '비밀번호는 최소 8자 이상이어야 합니다.'
  if (value.length > passwordMaxLength) return '비밀번호는 최대 20자까지만 가능합니다.'
  if (!lowercaseRegex.test(value)) return '비밀번호에는 소문자가 하나 이상 포함되어야 합니다.'
  if (!digitRegex.test(value)) return '비밀번호에는 숫자가 하나 이상 포함되어야 합니다.'
  if (!passwordSpecialCharRegex.test(value)) return '비밀번호에는 특수문자가 하나 이상 포함되어야 합니다.'
  if (whitespaceRegex.test(value)) return '비밀번호에는 공백이 포함될 수 없습니다.'

  return true
}
