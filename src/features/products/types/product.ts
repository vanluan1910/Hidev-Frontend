export type ProductStatus = 'Draft' | 'Active' | 'Inactive' | 'Archived'

export type Product = {
  id: string
  name: string
  sku: string
  categoryId: string
  categoryName: string
  price: number
  status: ProductStatus
  mainImageUrl: string
  shortDescription: string
  createdAt: string
  updatedAt: string
}

export type ProductPayload = {
  name: string
  sku: string
  categoryId: string
  price: number
  status: ProductStatus
  mainImageUrl: string
  shortDescription: string
}
