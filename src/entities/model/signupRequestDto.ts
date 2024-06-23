/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Greeing OpenAPI3 UI
 * OpenAPI3 - Greeing Swagger UI
 * OpenAPI spec version: 1.0.0
 */
import type { SignupRequestDtoGardeningExperience } from './signupRequestDtoGardeningExperience'
import type { SignupRequestDtoRole } from './signupRequestDtoRole'
import type { SignupRequestDtoSignupType } from './signupRequestDtoSignupType'
import type { SignupRequestDtoSocialPlatformType } from './signupRequestDtoSocialPlatformType'

export interface SignupRequestDto {
  email: string
  gardeningExperience?: SignupRequestDtoGardeningExperience
  isEmailAuthenticated: boolean
  marketingConsent: boolean
  /**
   * @minLength 2
   * @maxLength 12
   */
  nickname: string
  /**
   * @minLength 8
   * @maxLength 20
   */
  password: string
  personalInfoConsent: boolean
  providerId?: string
  role: SignupRequestDtoRole
  serviceConsent: boolean
  signupType: SignupRequestDtoSignupType
  socialAccountEmail?: string
  socialPlatformType?: SignupRequestDtoSocialPlatformType
  temporaryToken?: string
}
