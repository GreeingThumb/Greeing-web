/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Greeing OpenAPI3 UI
 * OpenAPI3 - Greeing Swagger UI
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from '@tanstack/react-query'
import type { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import type { Health200 } from '../../model'
import { customAxiosInstanceForOrval } from '../../../shared/api/orvalAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const health = (options?: SecondParameter<typeof customAxiosInstanceForOrval>, signal?: AbortSignal) => {
  return customAxiosInstanceForOrval<Health200>({ url: `/health`, method: 'GET', signal }, options)
}

export const getHealthQueryKey = () => {
  return [`/health`] as const
}

export const getHealthQueryOptions = <TData = Awaited<ReturnType<typeof health>>, TError = unknown>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof health>>, TError, TData>>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getHealthQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof health>>> = ({ signal }) => health(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof health>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type HealthQueryResult = NonNullable<Awaited<ReturnType<typeof health>>>
export type HealthQueryError = unknown

export const useHealth = <TData = Awaited<ReturnType<typeof health>>, TError = unknown>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof health>>, TError, TData>>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getHealthQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}