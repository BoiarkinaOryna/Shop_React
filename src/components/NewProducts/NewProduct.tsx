import styles from "./new.module.css"
import { useGetPopular } from "../../hooks/product/Get-popular";
import { Link } from "react-router-dom";
import { icons } from "../../shared/types/icons";


export function NewProducts(){
    const { isLoading, products, error } = useGetPopular("popular", 3)
    const newProductsColors = [
        {
            background: "linear-gradient(180deg, rgba(255, 187, 46, 0) 0%, #FFBB2E 100%)",
        },
        {
            background: "linear-gradient(180deg, rgba(22, 39, 26, 0) 0%, #16271A 100%)",
        },
        {
            background: "linear-gradient(180deg, rgba(48, 150, 166, 0) 0%, #3096A6 100%)",
        }
    ]
    let colorCount = 0

    return (
        isLoading ? <p>Завантаження</p>
        : !products ? <p>Продуктів нема</p>
        : <div className={styles.blockNew}>
            <h2>НОВЕ НА САЙТІ</h2>

            <div className={styles.newProducts}>
                {products.map((product) => {

                    {colorCount++}
                    return <div className={styles.newProduct} style={newProductsColors[colorCount - 1]}>
                    <div className={styles.newDroneImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <div className={styles.newProductInfo}>
                        <p className={styles.newTitle}>{product.title}</p>
                        <p className={styles.newDescription}>{product.shortDescription}</p>
                    </div>
                    <div className={styles.order}>
                        <p>from to ${product.price}</p>
                        <Link to={"/"} className={styles.buyBtn}>
                            КУПИТИ
                            <img src={icons.WhiteArrow} alt="" />
                        </Link>
                    </div>
                </div>
                })}
            </div>

        </div>
    )
}