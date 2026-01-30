import { useEffect, useState } from "react"
import { Product } from "../../shared/types/types"

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
        const response = await fetch(
          `http://localhost:8000/products/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        const data: Product = await response.json()
        setProduct(data)
      } catch (error) {
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
