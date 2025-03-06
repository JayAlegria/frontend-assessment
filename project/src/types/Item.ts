export type TItem = {
  id: string
  name: string
  price: string
  image: string
  active: boolean
  seller: string
  brand: string
  model: string
  color: string
  category: string
  description: string
  favorite?: boolean
}

export type TItemDetails = Pick<TItem, "id" | "name" | "seller" | "price" | "image" | "active">