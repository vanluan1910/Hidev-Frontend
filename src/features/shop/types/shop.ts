export interface ShopProduct {
  id: string
  name: string
  /** Price in VND */
  price: number
  image: string
  imageAlt: string
}

export interface ShopCategory {
  label: string
  active?: boolean
}

export interface ShopColor {
  name: string
  hex: string
}

export interface ShopSize {
  label: string
  active?: boolean
}
