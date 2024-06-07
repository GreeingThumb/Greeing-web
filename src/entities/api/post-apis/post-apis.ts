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
import type {
  BasePageResponsePostResponse,
  CreatePostBody,
  GetPostsParams,
  PostCreateResponse,
  PostResponse,
  UpdatePostBody,
} from '../../model'
import { customAxiosInstanceForOrval } from '../../../shared/api/orvalAxiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary 게시글 단일 조회
 */
export const getPost = (
  postId: number,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
  signal?: AbortSignal,
) => {
  return customAxiosInstanceForOrval<PostResponse>({ url: `/v1/posts/${postId}`, method: 'GET', signal }, options)
}

export const getGetPostQueryKey = (postId: number) => {
  return [`/v1/posts/${postId}`] as const
}

export const getGetPostQueryOptions = <TData = Awaited<ReturnType<typeof getPost>>, TError = unknown>(
  postId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPost>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPostQueryKey(postId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPost>>> = ({ signal }) =>
    getPost(postId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!postId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPost>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPostQueryResult = NonNullable<Awaited<ReturnType<typeof getPost>>>
export type GetPostQueryError = unknown

/**
 * @summary 게시글 단일 조회
 */
export const useGetPost = <TData = Awaited<ReturnType<typeof getPost>>, TError = unknown>(
  postId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPost>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPostQueryOptions(postId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게시글 수정
 */
export const updatePost = (
  postId: number,
  updatePostBody: UpdatePostBody,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  const formData = new FormData()
  formData.append('postUpdateRequestDto', JSON.stringify(updatePostBody.postUpdateRequestDto))
  if (updatePostBody.postImages !== undefined) {
    updatePostBody.postImages.forEach(value => formData.append('postImages', value))
  }

  return customAxiosInstanceForOrval<PostResponse>(
    { url: `/v1/posts/${postId}`, method: 'PUT', headers: { 'Content-Type': 'multipart/form-data' }, data: formData },
    options,
  )
}

export const getUpdatePostMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePost>>,
    TError,
    { postId: number; data: UpdatePostBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePost>>,
  TError,
  { postId: number; data: UpdatePostBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePost>>,
    { postId: number; data: UpdatePostBody }
  > = props => {
    const { postId, data } = props ?? {}

    return updatePost(postId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdatePostMutationResult = NonNullable<Awaited<ReturnType<typeof updatePost>>>
export type UpdatePostMutationBody = UpdatePostBody
export type UpdatePostMutationError = unknown

/**
 * @summary 게시글 수정
 */
export const useUpdatePost = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePost>>,
    TError,
    { postId: number; data: UpdatePostBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<
  Awaited<ReturnType<typeof updatePost>>,
  TError,
  { postId: number; data: UpdatePostBody },
  TContext
> => {
  const mutationOptions = getUpdatePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary 게시글 삭제
 */
export const deletePost = (postId: number, options?: SecondParameter<typeof customAxiosInstanceForOrval>) => {
  return customAxiosInstanceForOrval<void>({ url: `/v1/posts/${postId}`, method: 'DELETE' }, options)
}

export const getDeletePostMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, { postId: number }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, { postId: number }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deletePost>>, { postId: number }> = props => {
    const { postId } = props ?? {}

    return deletePost(postId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeletePostMutationResult = NonNullable<Awaited<ReturnType<typeof deletePost>>>

export type DeletePostMutationError = unknown

/**
 * @summary 게시글 삭제
 */
export const useDeletePost = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePost>>, TError, { postId: number }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<Awaited<ReturnType<typeof deletePost>>, TError, { postId: number }, TContext> => {
  const mutationOptions = getDeletePostMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary 게시글 리스트 조회
 */
export const getPosts = (
  params: GetPostsParams,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
  signal?: AbortSignal,
) => {
  return customAxiosInstanceForOrval<BasePageResponsePostResponse>(
    { url: `/v1/posts`, method: 'GET', params, signal },
    options,
  )
}

export const getGetPostsQueryKey = (params: GetPostsParams) => {
  return [`/v1/posts`, ...(params ? [params] : [])] as const
}

export const getGetPostsQueryOptions = <TData = Awaited<ReturnType<typeof getPosts>>, TError = unknown>(
  params: GetPostsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPostsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPosts>>> = ({ signal }) =>
    getPosts(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPosts>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPostsQueryResult = NonNullable<Awaited<ReturnType<typeof getPosts>>>
export type GetPostsQueryError = unknown

/**
 * @summary 게시글 리스트 조회
 */
export const useGetPosts = <TData = Awaited<ReturnType<typeof getPosts>>, TError = unknown>(
  params: GetPostsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPosts>>, TError, TData>>
    request?: SecondParameter<typeof customAxiosInstanceForOrval>
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPostsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게시글 생성
 */
export const createPost = (
  createPostBody: CreatePostBody,
  options?: SecondParameter<typeof customAxiosInstanceForOrval>,
) => {
  const formData = new FormData()
  formData.append('postRequestDto', JSON.stringify(createPostBody.postRequestDto))
  if (createPostBody.postImages !== undefined) {
    createPostBody.postImages.forEach(value => formData.append('postImages', value))
  }

  return customAxiosInstanceForOrval<PostCreateResponse>(
    { url: `/v1/posts`, method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, data: formData },
    options,
  )
}

export const getCreatePostMutationOptions = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, { data: CreatePostBody }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, { data: CreatePostBody }, TContext> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof createPost>>, { data: CreatePostBody }> = props => {
    const { data } = props ?? {}

    return createPost(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreatePostMutationResult = NonNullable<Awaited<ReturnType<typeof createPost>>>
export type CreatePostMutationBody = CreatePostBody
export type CreatePostMutationError = unknown

/**
 * @summary 게시글 생성
 */
export const useCreatePost = <TError = unknown, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPost>>, TError, { data: CreatePostBody }, TContext>
  request?: SecondParameter<typeof customAxiosInstanceForOrval>
}): UseMutationResult<Awaited<ReturnType<typeof createPost>>, TError, { data: CreatePostBody }, TContext> => {
  const mutationOptions = getCreatePostMutationOptions(options)

  return useMutation(mutationOptions)
}
