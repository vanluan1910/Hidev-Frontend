import { apiClient } from '../../../core/apiClient'
import type { PagedResult } from '../../../shared/types/api'
import type { InventoryVariant } from '../types/inventory'

export function getInventory(search = '') {
  const query = new URLSearchParams({ page: '1', pageSize: '50' })
  if (search) query.set('search', search)
  return apiClient<PagedResult<InventoryVariant>>(`/api/inventory?${query}`)
}

export function adjustInventory(variantId: string, delta: number, reason: string) {
  return apiClient<InventoryVariant>(`/api/inventory/${variantId}/adjust`, {
    method: 'PUT',
    body: JSON.stringify({ delta, reason }),
  })
}
