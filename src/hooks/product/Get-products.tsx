import { useEffect, useState } from "react"
import { Product } from "../../shared/types/types"
import { API_URL } from "../../shared/api"

interface UseGetProduct {
  isLoading: boolean
  product: Product | null
  error: string | null
}

export function useGetProduct(id: string | undefined): UseGetProduct {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getProduct() {
      if (!id) return

      try {
        setLoading(true)
        console.log(`${API_URL}/products/${id}`)
        const response = await fetch(
          `${API_URL}/products/${id}`,
          // {
          //   method: "GET",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        )
        if (!response.ok) {
          throw new Error("Товар не знайдено")
        }

        const data: Product = await response.json()
        console.log("Get-products.tsx data", data)
        setProduct(data)
      } catch (error) {
        console.log("Get-products.tsx error", error)
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  return { isLoading: loading, product, error }
}
