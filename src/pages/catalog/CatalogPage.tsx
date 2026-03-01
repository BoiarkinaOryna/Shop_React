import { useEffect, useState } from "react"
import { Main } from "../../app/main/Main"
import { useGetAllProducts } from "../../hooks/get-all/Get-all-products"
import { icons } from "../../shared/types/icons"
import styles from "./catalog.module.css"
import { ShortProduct } from "../../shared/types/types"

export function CatalogPage(){
    const [ mode, setMode ] = useState<"all" | "drone" | "visor">("all")
    const [ page, setPage ] = useState<number>(1)
    const { isLoading, products, error } = useGetAllProducts(mode, page)

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
                                <div className={styles.popularImage}>
                                    <img src={`http://localhost:8000/uploads/${product.image?.path}`} alt="" />
                                </div>
                                <span>
                                    <p className={styles.popularTitle}>{product.title}</p>
                                    <p className={styles.popularPrise}>{product.price}  ₴</p>
                                </span>
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