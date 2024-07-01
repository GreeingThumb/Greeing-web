/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Greeing OpenAPI3 UI
 * OpenAPI3 - Greeing Swagger UI
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import type { BannerResponse, CreateBannerBody, UpdateBannerBody } from '../../model'
import { customAxiosInstanceForOrval } from '../../../shared/api/orvalAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary [어드민] 배너 수정
 */
export const updateBanner = (
  id: number,
  updateBannerBody: UpdateBannerBody,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  const formData = new FormData()
  formData.append('bannerRequest', JSON.stringify(updateBannerBody.bannerRequest))
  if (updateBannerBody.bannerImage !== undefined) {
    formData.append('bannerImage', updateBannerBody.bannerImage)
  }

  return customAxiosInstanceForOrval<BannerResponse>(
    { url: `/v1/banners/${id}`, method: 'PUT', headers: { 'Content-Type': 'multipart/form-data' }, data: formData },
    options,
  )
}

export const getUpdateBannerMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBanner>>,
    TError,
    { id: number; data: UpdateBannerBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateBanner>>,
  TError,
  { id: number; data: UpdateBannerBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateBanner>>,
    { id: number; data: UpdateBannerBody }
  > = props => {
    const { id, data } = props ?? {}

    return updateBanner(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateBannerMutationResult = NonNullable<Awaited<ReturnType<typeof updateBanner>>>
export type UpdateBannerMutationBody = UpdateBannerBody
export type UpdateBannerMutationError = unknown

/**
 * @summary [어드민] 배너 수정
 */
export const useUpdateBanner = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateBanner>>,
    TError,
    { id: number; data: UpdateBannerBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateBanner>>,
  TError,
  { id: number; data: UpdateBannerBody },
  TContext
> => {
  const mutationOptions = getUpdateBannerMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary [어드민] 배너 삭제
 */
export const deleteBanner = (id: number, options?: SecondParameter<typeof customAxiosInstanceForOrval>) => {
  return customAxiosInstanceForOrval<void>({ url: `/v1/banners/${id}`, method: 'DELETE' }, options)
}

export const getDeleteBannerMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBanner>>, TError, { id: number }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<Awaited<ReturnType<typeof deleteBanner>>, TError, { id: number }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteBanner>>, { id: number }> = props => {
    const { id } = props ?? {}

    return deleteBanner(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteBannerMutationResult = NonNullable<Awaited<ReturnType<typeof deleteBanner>>>

export type DeleteBannerMutationError = unknown

/**
 * @summary [어드민] 배너 삭제
 */
export const useDeleteBanner = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteBanner>>, TError, { id: number }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<Awaited<ReturnType<typeof deleteBanner>>, TError, { id: number }, TContext> => {
  const mutationOptions = getDeleteBannerMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary 활성된 배너 리스트 조회
 */
export const getAllActiveBanners = (
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
  signal?: AbortSignal,
) => {
  return customAxiosInstanceForOrval<BannerResponse[]>({ url: `/v1/banners`, method: 'GET', signal }, options)
}

export const getGetAllActiveBannersQueryKey = () => {
  return [`/v1/banners`] as const
}

export const getGetAllActiveBannersQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllActiveBanners>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllActiveBanners>>, TError, TData>>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllActiveBannersQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllActiveBanners>>> = ({ signal }) =>
    getAllActiveBanners(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllActiveBanners>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetAllActiveBannersQueryResult = NonNullable<Awaited<ReturnType<typeof getAllActiveBanners>>>
export type GetAllActiveBannersQueryError = unknown

/**
 * @summary 활성된 배너 리스트 조회
 */
export const useGetAllActiveBanners = <
  TData = Awaited<ReturnType<typeof getAllActiveBanners>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getAllActiveBanners>>, TError, TData>>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAllActiveBannersQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary [어드민] 배너 등록
 */
export const createBanner = (
  createBannerBody: CreateBannerBody,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  const formData = new FormData()
  formData.append('bannerRequest', JSON.stringify(createBannerBody.bannerRequest))
  if (createBannerBody.bannerImage !== undefined) {
    formData.append('bannerImage', createBannerBody.bannerImage)
  }

  return customAxiosInstanceForOrval<BannerResponse>(
    { url: `/v1/banners`, method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, data: formData },
    options,
  )
}

export const getCreateBannerMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBanner>>, TError, { data: CreateBannerBody }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<Awaited<ReturnType<typeof createBanner>>, TError, { data: CreateBannerBody }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createBanner>>, { data: CreateBannerBody }> = props => {
    const { data } = props ?? {}

    return createBanner(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreateBannerMutationResult = NonNullable<Awaited<ReturnType<typeof createBanner>>>
export type CreateBannerMutationBody = CreateBannerBody
export type CreateBannerMutationError = unknown

/**
 * @summary [어드민] 배너 등록
 */
export const useCreateBanner = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof createBanner>>, TError, { data: CreateBannerBody }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<Awaited<ReturnType<typeof createBanner>>, TError, { data: CreateBannerBody }, TContext> => {
  const mutationOptions = getCreateBannerMutationOptions(options)

  return useMutation(mutationOptions)
}
