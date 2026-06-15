export type InventoryVariant = {
  id: string
  productId: string
  productName: string
  sku: string
  size: string
  color: string
  quantity: number
  lowStockThreshold: number
  isLowStock: boolean
}
