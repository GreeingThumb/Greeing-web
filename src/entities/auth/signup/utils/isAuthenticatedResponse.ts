import type { AuthenticatedResponse } from '@/entities/model'

export const isAuthenticatedResponse = (object: any): object is AuthenticatedResponse => {
  return 'authResultStatus' in object && 'authenticationResponse' in object
}
