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


export interface ShortProduct {
  id: number
  title: string
  price: number
  imageId?: number
  image?: {
    id: number
    path: string
    type: string
    size?: string
  }
}

export interface CartItem  {
    product: Product
    count: number
}