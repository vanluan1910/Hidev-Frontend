export interface CartItem {
  id: string
  name: string
  color: string
  size: string
  /** Unit price in EUR */
  price: number
  quantity: number
  image: string
  imageAlt: string
}

export interface PaymentMethod {
  name: string
  logo: string
}
