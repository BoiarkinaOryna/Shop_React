
import { useParams } from "react-router-dom"
import { useGetProduct } from "../../hooks/product/Get-products"
import { HeaderProduct } from "../../app/header/heaaderProduct/HeaderProduct"
import { Footer } from "../../app/footer/Footer"
import styles from "./product.module.css";
import { Main } from "../../app/main/Main";

export function ProductPage() {
  const params = useParams()
  const { isLoading, product } = useGetProduct(params.id)
  // const result = useGetProduct(params.id)
  console.log(product)
  // const { isLoading, product } = result
  if (isLoading) return <div>Loading...</div>
  if (!product) return null
  // console.log(product)
  return (
    <div className={styles.app} >
        {/* <HeaderProduct product/> */}
        
    
        <Footer />
    </div>
    
  )
}
