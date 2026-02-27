import { useEffect, useState } from "react";
import { ShortProduct } from "../../shared/types/types";
import { API_URL } from "../../shared/api"


interface UseGetAlContract {
    isLoading: boolean
    products: ShortProduct[] | null
    error: string | null
}

export function useGetAllProducts(take: number): UseGetAlContract{
    const [products, setProducts] = useState<ShortProduct[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getPopular(){
            try {
                setLoading(true)

                let response = await fetch(`${API_URL}/products?take=${take}`)
                console.log("response", response)
                const data: ShortProduct[] = await response.json()
                console.log("Get-products.tsx data", data)
                setProducts(data)
            }catch (error){
                console.log("Get-products.tsx error", error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            }finally{
                setLoading(false)
            }
        }
    getPopular()
    }, [take])

    return { isLoading: loading, products, error }
}