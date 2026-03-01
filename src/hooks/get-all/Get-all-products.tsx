import { useEffect, useState } from "react";
import { ShortProduct } from "../../shared/types/types";
import { API_URL } from "../../shared/api"


interface UseGetAllContract {
    isLoading: boolean
    products: ShortProduct[] | null
    error: string | null
}

export function useGetAllProducts(mode: string, page: number): UseGetAllContract{
    const [products, setProducts] = useState<ShortProduct[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getPopular(){
            try {
                setLoading(true)

                if (mode === "all"){
                    let response = await fetch(`${API_URL}/products?take=16&page=${page}`)
                    console.log("response", response)
                    const data: ShortProduct[] = await response.json()
                    console.log("Get-products data", data)
                    setProducts(data)
                } else {
                    let response = await fetch(`${API_URL}/products/catalog?category=${mode}`)
                    console.log("response", response)
                    if (!response.ok){
                        console.log(await response.json())
                        setError(await response.json())
                    }
                    const data: ShortProduct[] = await response.json()
                    console.log("Get-fitered data", data)
                    setProducts(data)
                }
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
    }, [mode, page])

    return { isLoading: loading, products, error }
}