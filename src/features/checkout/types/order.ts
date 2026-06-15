import type { CartItem } from '../../cart/types/cart'

export interface PlacedOrder {
  orderNumber: string
  createdAt: string
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  customerName: string
  email: string
  address: string
}

const STORAGE_KEY = 'aura-last-order'

export function generateOrderNumber(): string {
  const random = Math.floor(100000 + Math.random() * 900000)
  return `ADS-${random}`
}

export function saveLastOrder(order: PlacedOrder) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
  } catch {
    // Ignore storage write errors.
  }
}

export function loadLastOrder(): PlacedOrder | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as PlacedOrder
  } catch {
    return null
  }
}
