import { apiClient } from '../../../core/apiClient'
import type { PagedResult } from '../../../shared/types/api'
import type { Product, ProductPayload } from '../types/product'

export function getProducts(params: { search?: string; status?: string; categoryId?: string } = {}) {
  const query = new URLSearchParams({ page: '1', pageSize: '50' })
  if (params.search) query.set('search', params.search)
  if (params.status) query.set('status', params.status)
  if (params.categoryId) query.set('categoryId', params.categoryId)
  return apiClient<PagedResult<Product>>(`/api/products?${query}`)
}

export function createProduct(payload: ProductPayload) {
  return apiClient<Product>('/api/products', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateProduct(id: string, payload: ProductPayload) {
  return apiClient<Product>(`/api/products/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteProduct(id: string) {
  return apiClient<boolean>(`/api/products/${id}`, { method: 'DELETE' })
}
