import { Main } from "../../app/main/Main"
import { useGetAllProducts } from "../../hooks/get-all/Get-all-products"
import { icons } from "../../shared/types/icons"
import styles from "./catalog.module.css"

export function CatalogPage(){

    const { isLoading, products, error } = useGetAllProducts(16)
    console.log("products", products)

    return(
        isLoading ? <p>Завантаження</p>
        : !products ? <p>Продуктів нема</p>
        :<>
            <h1 className={styles.heading} id="top">КАТАЛОГ</h1>
            
            <div className={styles.mainCon} >
                <div className={styles.filter} >
                    <div> <img src={icons.all} alt="" /></div>
                    <div> <img src={icons.MiniDrone} alt="" /></div>
                    <div> <img src={icons.MiniDrone} alt="" /></div>
                </div>
                <div className={styles.products} >
                    <div className={styles.popularProducts}>
                        {products.map((product) => {
                            
                            return <div className={styles.popularProduct}>
                                <div className={styles.popularImage}>
                                    <img src={icons.Drone} alt="" />
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
                        <button><img src={icons.buttonPag} alt="" /></button>
                    </div>
                    <div className={styles.but} >
                        <button>1</button>
                    </div>
                    <div className={styles.but1} >
                        <button>2</button>
                    </div>
                    <div className={styles.but1} >
                        <button>3</button>
                    </div>
                    <div className={styles.but1} >
                        <button>4</button>
                    </div>
                    <div className={styles.backBut} >
                        <button><img src={icons.forwardBut} alt="" /></button>
                    </div>

                </div>
            </div>
        </>
    )
}