import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { initialCartItems } from '../data/cartData'
import type { CartItem } from '../types/cart'
import { CartContext, type AddToCartInput } from './CartContext'

const STORAGE_KEY = 'aura-cart'

/** Builds a stable line key so identical product variants stack together. */
function lineKey(item: { id: string; color: string; size: string }) {
  return `${item.id}__${item.color}__${item.size}`
}

function loadInitialItems(): CartItem[] {
  if (typeof window === 'undefined') return initialCartItems
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return initialCartItems
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? (parsed as CartItem[]) : initialCartItems
  } catch {
    return initialCartItems
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadInitialItems)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore write errors (e.g. storage disabled or quota exceeded).
    }
  }, [items])

  function addItem(input: AddToCartInput) {
    const quantity = input.quantity ?? 1
    const incoming: CartItem = { ...input, quantity }
    setItems((current) => {
      const existing = current.find((item) => lineKey(item) === lineKey(incoming))
      if (existing) {
        return current.map((item) =>
          lineKey(item) === lineKey(incoming) ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, incoming]
    })
  }

  function increment(id: string) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  function decrement(id: string) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item)),
    )
  }

  function remove(id: string) {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  function clear() {
    setItems([])
  }

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])

  // Shipping is complimentary and tax is calculated at checkout, mirroring the markup.
  const shipping = 0
  const tax = 0
  const total = subtotal + shipping + tax

  const value = useMemo(
    () => ({ items, addItem, increment, decrement, remove, clear, subtotal, shipping, tax, total, itemCount }),
    [items, subtotal, total, itemCount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
