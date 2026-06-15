export type ApiResponse<T> = {
  success: boolean
  data: T | null
  message: string | null
  errors: string[]
}

export type PagedResult<T> = {
  items: T[]
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}
