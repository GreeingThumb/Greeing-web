import type { RegistrationRequiredResponse } from '@/entities/model'

export const isRegistrationRequiredResponse = (object: any): object is RegistrationRequiredResponse => {
  return 'authResultStatus' in object && 'oauthUserDetails' in object && 'temporaryToken' in object
}
