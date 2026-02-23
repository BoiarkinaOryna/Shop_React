import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { icons } from "../../shared/types/icons";
import { PopularProducts } from "../../components/PopularProducts/PopularProducts";
import { NewProducts } from "../../components/NewProducts/NewProduct";
import { Header } from "../../app/header/Header";
import { Footer } from "../../app/footer/Footer";


export function HomePage(){
    
    return <div className={styles.container}>
        <Header/>
        <div className={styles.blockAbout} id="top">
            <h2>ПРО НАС</h2>
            <p>Ми — команда, що об'єднує технології та надійність.<br/>Пропонуємо дрони й тепловізори, перевірені у найскладніших умовах.<br/>Обираємо тільки те, чому довіряємо самі.</p>
            <Link className={styles.readMore} to={"/about"}>
                ЧИТАТИ БІЛЬШЕ
                <img src={icons.ArrowForward} alt="" />
            </Link>
        </div>
        <NewProducts/>
        
        <PopularProducts/>
        <Footer/>
    </div>
}