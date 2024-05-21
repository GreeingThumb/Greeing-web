import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      accessToken: string
      refreshToken: string
      userId: number
      role: string
      iat: number
      exp: number
      jti: string
    }
  }
}
