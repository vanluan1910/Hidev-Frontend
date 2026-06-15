import { apiClient } from '../../../core/apiClient'
import type { PagedResult } from '../../../shared/types/api'
import type { Order, OrderDetail, OrderStatus } from '../types/order'

export function getOrders(status = '') {
  const query = new URLSearchParams({ page: '1', pageSize: '50' })
  if (status) query.set('status', status)
  return apiClient<PagedResult<Order>>(`/api/orders?${query}`)
}

export function getOrder(id: string) {
  return apiClient<OrderDetail>(`/api/orders/${id}`)
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  return apiClient<OrderDetail>(`/api/orders/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status }),
  })
}
