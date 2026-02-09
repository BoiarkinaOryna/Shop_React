import { useEffect, useState } from "react";
import { Product } from "../../shared/types/types";
import { API_URL } from "../../shared/api"


interface UseGetPopularContract {
    isLoading: boolean
    products: Product[] | null
    error: string | null
}

export function useGetPopular(type: "popular" | "new", limit?: number, offset?: number): UseGetPopularContract{
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getPopular(){
            try {
                setLoading(true)

                let response
                if (limit && offset){
                    response = await fetch(
                        `${API_URL}/suggestions/?type=${type}&limit=${limit}&offset=${offset}`,
                    )
                } else if (limit){
                    response = await fetch(
                        `${API_URL}/suggestions/?type=${type}&limit=${limit}`,
                    )
                } else if (offset){
                    response = await fetch(
                        `${API_URL}/suggestions/?type=${type}&offset=${offset}`,
                    )
                } else {
                    response = await fetch(
                        `${API_URL}/suggestions/?type=${type}`,
                    )
                }
                console.log("response", response)
                if (!response.ok) {
                    throw new Error("Товарів не знайдено")
                }
        
                const data: Product[] = await response.json()
                console.log("Get-products.tsx data", data)
                setProducts(data)
            } catch (error) {
                console.log("Get-products.tsx error", error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
    
        getPopular()
        }, [type, limit, offset])
    
    return { isLoading: loading, products, error }
}