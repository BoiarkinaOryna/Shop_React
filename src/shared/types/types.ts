export interface Product {
  id: number
  title: string
  shortDescription?: string | null
  price: number
  discount?: string | null
  image?: {
    path: string
  } | null
}


export interface CartItem  {
  product: Product
  count: number
}