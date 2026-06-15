import { createContext } from 'react'
import type { CartItem } from '../types/cart'

/** Fields needed to add a product to the cart (quantity optional, defaults to 1). */
export type AddToCartInput = Omit<CartItem, 'quantity'> & { quantity?: number }

export interface CartContextValue {
  items: CartItem[]
  addItem: (input: AddToCartInput) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  subtotal: number
  shipping: number
  tax: number
  total: number
  itemCount: number
}

export const CartContext = createContext<CartContextValue | null>(null)
