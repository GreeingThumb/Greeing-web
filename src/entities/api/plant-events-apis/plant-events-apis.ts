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
import type { BasePageResponsePlantEventResponse, GetPlantEventsParams, PlantEventRequestDto, Unit } from '../../model'
import { customAxiosInstanceForOrval } from '../../../shared/api/orvalAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary 식물 카드 이벤트 리스트 조회
 */
export const getPlantEvents = (
  plantId: number,
  params: GetPlantEventsParams,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
  signal?: AbortSignal,
) => {
  return customAxiosInstanceForOrval<BasePageResponsePlantEventResponse>(
    { url: `/v1/plants/${plantId}/events`, method: 'GET', params, signal },
    options,
  )
}

export const getGetPlantEventsQueryKey = (plantId: number, params: GetPlantEventsParams) => {
  return [`/v1/plants/${plantId}/events`, ...(params ? [params] : [])] as const
}

export const getGetPlantEventsQueryOptions = <TData = Awaited<ReturnType<typeof getPlantEvents>>, TError = unknown>(
  plantId: number,
  params: GetPlantEventsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPlantEvents>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPlantEventsQueryKey(plantId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPlantEvents>>> = ({ signal }) =>
    getPlantEvents(plantId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!plantId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPlantEvents>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPlantEventsQueryResult = NonNullable<Awaited<ReturnType<typeof getPlantEvents>>>
export type GetPlantEventsQueryError = unknown

/**
 * @summary 식물 카드 이벤트 리스트 조회
 */
export const useGetPlantEvents = <TData = Awaited<ReturnType<typeof getPlantEvents>>, TError = unknown>(
  plantId: number,
  params: GetPlantEventsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPlantEvents>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPlantEventsQueryOptions(plantId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 식물 카드 이벤트 기록
 */
export const addPlantEvents = (
  plantId: number,
  plantEventRequestDto: PlantEventRequestDto,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  return customAxiosInstanceForOrval<string>(
    {
      url: `/v1/plants/${plantId}/events`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: plantEventRequestDto,
    },
    options,
  )
}

export const getAddPlantEventsMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addPlantEvents>>,
    TError,
    { plantId: number; data: PlantEventRequestDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addPlantEvents>>,
  TError,
  { plantId: number; data: PlantEventRequestDto },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addPlantEvents>>,
    { plantId: number; data: PlantEventRequestDto }
  > = props => {
    const { plantId, data } = props ?? {}

    return addPlantEvents(plantId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddPlantEventsMutationResult = NonNullable<Awaited<ReturnType<typeof addPlantEvents>>>
export type AddPlantEventsMutationBody = PlantEventRequestDto
export type AddPlantEventsMutationError = unknown

/**
 * @summary 식물 카드 이벤트 기록
 */
export const useAddPlantEvents = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addPlantEvents>>,
    TError,
    { plantId: number; data: PlantEventRequestDto },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<
  Awaited<ReturnType<typeof addPlantEvents>>,
  TError,
  { plantId: number; data: PlantEventRequestDto },
  TContext
> => {
  const mutationOptions = getAddPlantEventsMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary 식물 카드 이벤트 삭제
 */
export const deletePlantEvent = (
  plantId: number,
  eventId: number,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  return customAxiosInstanceForOrval<Unit>(
    { url: `/v1/plants/${plantId}/events/${eventId}`, method: 'DELETE' },
    options,
  )
}

export const getDeletePlantEventMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePlantEvent>>,
    TError,
    { plantId: number; eventId: number },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deletePlantEvent>>,
  TError,
  { plantId: number; eventId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deletePlantEvent>>,
    { plantId: number; eventId: number }
  > = props => {
    const { plantId, eventId } = props ?? {}

    return deletePlantEvent(plantId, eventId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeletePlantEventMutationResult = NonNullable<Awaited<ReturnType<typeof deletePlantEvent>>>

export type DeletePlantEventMutationError = unknown

/**
 * @summary 식물 카드 이벤트 삭제
 */
export const useDeletePlantEvent = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deletePlantEvent>>,
    TError,
    { plantId: number; eventId: number },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<
  Awaited<ReturnType<typeof deletePlantEvent>>,
  TError,
  { plantId: number; eventId: number },
  TContext
> => {
  const mutationOptions = getDeletePlantEventMutationOptions(options)

  return useMutation(mutationOptions)
}