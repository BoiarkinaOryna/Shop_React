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


export interface ShortProduct{
    id: number;
    discount: string | null;
    title: string;
    price: number;
    imageId: number | null;
}

export interface CartItem  {
    product: Product
    count: number
}