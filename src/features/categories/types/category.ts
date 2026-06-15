export type Category = {
  id: string
  name: string
  description: string
  isActive: boolean
  imageUrl: string
  itemCount: number
  updatedAt: string
}

export type CategoryPayload = {
  name: string
  description: string
  isActive: boolean
  imageUrl: string
}
