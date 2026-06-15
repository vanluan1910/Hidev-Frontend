export interface CheckoutStep {
  id: number
  label: string
}

export interface ShippingMethod {
  id: string
  name: string
  description: string
  /** Shipping fee in VND */
  price: number
}

export interface ShippingForm {
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  province: string
  zip: string
  saveInfo: boolean
}

export interface PaymentForm {
  cardNumber: string
  expiry: string
  cvv: string
}
