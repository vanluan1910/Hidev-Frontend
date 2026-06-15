import { apiClient } from '../../../core/apiClient'
import type { PagedResult } from '../../../shared/types/api'
import type { Customer, CustomerDetail } from '../types/customer'

export function getCustomers(search = '') {
  const query = new URLSearchParams({ page: '1', pageSize: '50' })
  if (search) query.set('search', search)
  return apiClient<PagedResult<Customer>>(`/api/customers?${query}`)
}

export function getCustomer(id: string) {
  return apiClient<CustomerDetail>(`/api/customers/${id}`)
}
