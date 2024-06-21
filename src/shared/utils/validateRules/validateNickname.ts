const minLength = 2
const maxLength = 12
const specialCharRegex = /[^a-zA-Z0-9가-힣]/
const whitespaceRegex = /\s/

export const validateNickname = (value: string) => {
  if (!value) return '닉네임을 입력하세요.'

  if (value.length < minLength) return '닉네임은 최소 두 글자 이상이어야 합니다.'
  if (value.length > maxLength) return '닉네임은 최대 12자까지만 가능합니다.'
  if (specialCharRegex.test(value)) return '닉네임에는 특수문자가 포함될 수 없습니다.'
  if (whitespaceRegex.test(value)) return '닉네임에는 공백이 포함될 수 없습니다.'

  return true
}
