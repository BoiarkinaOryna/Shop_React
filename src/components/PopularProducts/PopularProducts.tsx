import { Link } from "react-router-dom";
import { icons } from "../../shared/types/icons";
import styles from "./popular.module.css"
import { useGetPopular } from "../../hooks/product/Get-popular";


export function PopularProducts(){

    const { isLoading, products, error } = useGetPopular("popular")

    return (
        isLoading ? <p>Завантаження</p>
        : !products ? <p>Продуктів нема</p>
        : <div className={styles.blockCatalog}>
            
            <h2>КАТАЛОГ</h2>
            <div className={styles.popularProducts}>
                {products.map((product) => {
                    return <div className={styles.popularProduct}>
                        <div className={styles.popularImage}>
                            <img src={icons.Drone} alt="" />
                        </div>
                        <span>
                            <p className={styles.popularTitle}>{product.title}</p>
                            <p className={styles.popularPrise}>{product.price} ₴ </p>
                        </span>
                    </div>
                })}
            </div>
            <Link to={"/catalog"} className={styles.blackBtn}>
                ДИВИТИСЬ ВСІ
                <img src={icons.WhiteArrow} alt="" />
            </Link>
    </div>
    )
}