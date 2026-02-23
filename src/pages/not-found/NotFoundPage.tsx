import { Link } from "react-router-dom";
import styles from "./not-found.module.css"
import { SmallFooter } from "../../components/SmallFooter/SmallFooter";
import { HeaderSimple } from "../../app/header/Header";


export function NotFoundPage(){
    return <div className={styles.main}>
        <HeaderSimple/>
        <div/>
        <div className={styles.container}>
            <h1>НЕ ЗНАЙДЕНО</h1>
            <span className={styles.text}>
                <p>Такої сторінки не існує.<br/>Перевірте дійсьність посилання</p>
            </span>
            <Link className={styles.toMainPage} to={"/"}>НА ГОЛОВНУ</Link>
        </div>    
        <SmallFooter />
    </div>
}