export interface Product {
  id: string
  name: string
  price: number
  image: string
  imageAlt: string
}

export interface NavLink {
  label: string
  href: string
  active?: boolean
}
