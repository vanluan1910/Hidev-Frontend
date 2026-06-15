import { apiClient } from '../../../core/apiClient'
import type { Category, CategoryPayload } from '../types/category'

export function getCategories() {
  return apiClient<Category[]>('/api/categories')
}

export function createCategory(payload: CategoryPayload) {
  return apiClient<Category>('/api/categories', { method: 'POST', body: JSON.stringify(payload) })
}

export function updateCategory(id: string, payload: CategoryPayload) {
  return apiClient<Category>(`/api/categories/${id}`, { method: 'PUT', body: JSON.stringify(payload) })
}

export function deleteCategory(id: string) {
  return apiClient<boolean>(`/api/categories/${id}`, { method: 'DELETE' })
}
