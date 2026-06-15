import type { CheckoutStep, ShippingMethod } from '../types/checkout'

export const checkoutSteps: CheckoutStep[] = [
  { id: 1, label: 'Thông tin giao hàng' },
  { id: 2, label: 'Phương thức vận chuyển' },
  { id: 3, label: 'Thanh toán' },
]

export const shippingMethods: ShippingMethod[] = [
  {
    id: 'standard',
    name: 'Giao hàng tiêu chuẩn',
    description: '3-5 ngày làm việc',
    price: 0,
  },
  {
    id: 'express',
    name: 'Giao hàng nhanh',
    description: '1-2 ngày làm việc',
    price: 50_000,
  },
]

/** Tax rate applied to the subtotal (10% VAT), mirroring the mock numbers. */
export const TAX_RATE = 0.1
