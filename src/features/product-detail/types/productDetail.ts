export interface ProductImage {
  /** Thumbnail shown in the gallery strip */
  thumb: string
  /** Full-size image shown in the main viewer */
  full: string
  alt: string
}

export interface ProductColor {
  name: string
  /** CSS color value for the swatch */
  hex: string
}

export interface AccordionSection {
  id: string
  title: string
  body: string[]
}

export interface RelatedProduct {
  id: string
  name: string
  price: number
  image: string
  imageAlt: string
}

export interface ProductDetail {
  id: string
  collection: string
  name: string
  price: number
  description: string
  images: ProductImage[]
  colors: ProductColor[]
  sizes: string[]
  accordions: AccordionSection[]
}
