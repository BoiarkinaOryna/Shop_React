import { useEffect, useState } from "react"
import { Main } from "../../app/main/Main"
import { useGetAllProducts } from "../../hooks/get-all/Get-all-products"
import { icons } from "../../shared/types/icons"
import styles from "./catalog.module.css"
import { ShortProduct } from "../../shared/types/types"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context"
import { API_URL } from "../../shared/api"

export function CatalogPage(){
    const [ mode, setMode ] = useState<"all" | "drone" | "visor">("all")
    const [ page, setPage ] = useState<number>(1)
    const { isLoading, products, error } = useGetAllProducts(mode, page)
    const { addCartItem } = useCartContext()

    function decreasePageNumber(){
        if (page - 1 <= 0) return
        setPage(page - 1)
    }

    useEffect(() => {
        if (!isLoading && products && products.length === 0 && page > 1) {
            setPage(page - 1)
        }
    }, [products])

    return(
        isLoading ? <p>Завантаження</p>
        : !products ? <p>Продуктів нема</p>
        :<>
            <h1 className={styles.heading} id="top">КАТАЛОГ</h1>
            
            <div className={styles.mainCon} >
                <div className={styles.filter} >
                    <div> <img src={icons.all} onClick={() => setMode("all")} /></div>
                    <div> <img src={icons.MiniDrone} onClick={() => setMode("drone")} /></div>
                    <div> <img src={icons.MiniVisor} onClick={() => setMode("visor")} /></div>
                </div>
                <div className={styles.products} >
                    <div className={styles.popularProducts}>
                        {products.map((product) => {
                            return <div className={styles.popularProduct} key={product.id}>
                                <Link to={`/products/${product.id}`}  className={styles.popularImage}>
                                    <img src={`${API_URL}/uploads/${product.image?.path}`} alt="" />
                                </Link>
                                <div className={styles.productDescription} onClick={e => e.stopPropagation()}>
                                    <Link to={`/products/${product.id}`} >
                                        <p className={styles.popularTitle}>{product.title}</p>
                                        <p className={styles.popularPrise}>{product.price}  ₴</p>
                                    </Link>
                                    <button className={styles.cartOpener}>
                                        <img src={icons.Frame1} alt="Кошик" onClick={() => addCartItem(product)} />
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>

                </div>
                <div className={styles.paginaation} >
                    <div className={styles.backBut} >
                        <button onClick={decreasePageNumber}><img src={icons.buttonPag} alt="" /></button>
                    </div>
                    <div className={styles.but} >
                        <button>{page}</button>
                    </div>

                    <div className={styles.backBut} >
                        <button onClick={() => setPage(page + 1)}><img src={icons.forwardBut} alt="" /></button>
                    </div>

                </div>
            </div>
        </>
    )
}