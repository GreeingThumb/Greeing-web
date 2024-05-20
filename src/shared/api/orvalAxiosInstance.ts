import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { axiosInstance } from '@/shared/api/axiosInstance'

export const customAxiosInstanceForOrval = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  return axiosInstance({
    ...config,
    ...options,
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  })
}
