
import { useParams } from "react-router-dom"
import { useGetProduct } from "../../hooks/product/Get-products"
// import { HeaderProduct } from "../../app/header/heaaderProduct/HeaderProduct"
import { Footer } from "../../app/footer/Footer"
import styles from "./product.module.css";
import { Main } from "../../app/main/Main";

export function ProductPage() {
  const  id  = useParams()
  const { product, isLoading} = useGetProduct(id)

  if (isLoading) return <div>Loading...</div>
  if (!product) return null

  return (
    <div className={styles.app} >
        {/* <HeaderProduct product/> */}
        
    
        <Footer />
    </div>
    
  )
}
