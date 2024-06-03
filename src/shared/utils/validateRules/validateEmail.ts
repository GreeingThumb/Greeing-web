export const validateEmail = (value: string) => {
  if (!value) return '이메일을 입력하세요.'
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(value) ? true : '유효한 이메일 주소를 입력하세요.'
}
