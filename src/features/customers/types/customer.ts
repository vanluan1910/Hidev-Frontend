import type { Order } from '../../orders/types/order'

export type CustomerTier = 'VIP' | 'Regular' | 'New'

export type Customer = {
  id: string
  fullName: string
  email: string
  phone: string
  tier: CustomerTier
  totalOrders: number
  totalSpend: number
  lastPurchase: string
  createdAt: string
}

export type CustomerDetail = Customer & {
  orders: Order[]
}
