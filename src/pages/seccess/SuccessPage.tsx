import { Link, useSearchParams } from "react-router-dom"
import styles from "./success.module.css"


export function SuccessPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const orderId = searchParams.get("order")
    return(
        <div className={styles.container}>
            <h1>УСПІХ!</h1>
            <span className={styles.text}>
                <p>Ваше замовлення №{orderId} прийнято та відправлено на обробку. </p>
                <p>Ми сповістимо Вас щойно замовлення буде відправлено.<br/>Дякуємо за довіру! </p>
            </span>
            <Link className={styles.toMainPage} to={"/"}>НА ГОЛОВНУ</Link>
        </div>
    )
}