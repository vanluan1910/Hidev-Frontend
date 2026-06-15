export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Completed' | 'Cancelled'

export type PaymentStatus = 'Paid' | 'Pending' | 'Refunded'

export type Order = {
  id: string
  orderNumber: string
  customerId: string
  customerName: string
  status: OrderStatus
  paymentStatus: PaymentStatus
  itemCount: number
  total: number
  createdAt: string
  updatedAt: string
}

export type OrderItem = {
  productId: string
  productName: string
  sku: string
  size: string
  color: string
  quantity: number
  unitPrice: number
  lineTotal: number
}

export type OrderDetail = Order & {
  customerEmail: string
  items: OrderItem[]
}
