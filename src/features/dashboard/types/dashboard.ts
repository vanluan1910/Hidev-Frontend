import type { InventoryVariant } from '../../inventory/types/inventory'
import type { Order } from '../../orders/types/order'

export type DashboardSummary = {
  todayRevenue: number
  newOrders: number
  lowStockProducts: number
  newCustomers: number
  recentOrders: Order[]
  lowStockItems: InventoryVariant[]
}
