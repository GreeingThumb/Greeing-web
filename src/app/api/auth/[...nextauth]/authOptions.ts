/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import { loginAxiosInstance, refreshTokenAxiosInstance } from '@/shared/api/axiosInstance'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'email-login',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as any
        try {
          const { data: user } = await loginAxiosInstance.post(
            '/v1/auth/login',
            { email, password },
            { isSkipInterceptor: true },
          )
          return user || null
        } catch (error: any) {
          console.error('로그인 실패', error)
          throw new Error(error.response.data.message || '로그인에 실패하였습니다.')
        }
      },
    }),
    CredentialsProvider({
      id: 'refresh-access-token',
      name: 'Credentials',
      credentials: {
        refreshToken: { label: 'refreshToken' },
      },
      async authorize(credentials) {
        const { refreshToken } = credentials as any
        try {
          const { data: user } = await refreshTokenAxiosInstance.post('/v1/auth/token/refresh', null, {
            headers: {
              refreshTokenValue: refreshToken,
            },
          })
          return user || null
        } catch (error: any) {
          console.error('토큰 갱신 실패', error)
          throw new Error(error.response.data.message || '토큰 갱신에 실패하였습니다.')
        }
      },
    }),
    CredentialsProvider({
      id: 'session-token-updater',
      name: 'Credentials',
      credentials: {
        user: { label: 'User', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.user) {
          throw new Error('사용자 정보가 제공되지 않았습니다.')
        }
        try {
          const user = JSON.parse(credentials.user)
          return user as any
        } catch (error) {
          console.error('사용자 데이터 파싱 실패', error)
          throw new Error('사용자 데이터 처리 중 오류가 발생했습니다.')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default authOptions
