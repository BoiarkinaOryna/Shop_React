import { Link } from "react-router-dom";
import { Footer } from "../../app/footer/Footer";
import { Header } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./home.module.css";
import { icons } from "../../shared/types/icons";


export function HomePage(){
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
    return <div className={styles.container}>
        <div className={styles.blockAbout}>
            <h2>ПРО НАС</h2>
            <p>Ми — команда, що об'єднує технології та надійність.<br/>Пропонуємо дрони й тепловізори, перевірені у найскладніших умовах.<br/>Обираємо тільки те, чому довіряємо самі.</p>
            <Link className={styles.readMore} to={"/about"}>
                ЧИТАТИ БІЛЬШЕ
                <img src={icons.ArrowForward} alt="" />
            </Link>
        </div>
        <div className={styles.blockNew}>
            <h2>НОВЕ НА САЙТІ</h2>

            <div className={styles.newProducts}>
                <div className={styles.newProduct} style={newProductsColors[0]}>
                    <div className={styles.newDroneImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <div className={styles.newProductInfo}>
                        <p className={styles.newTitle}>DJI Mini 4K</p>
                        <p className={styles.newDescription}>Easy-To-Use Mini Camera Drone</p>
                    </div>
                    <div className={styles.order}>
                        <p>from to $299</p>
                        <Link to={"/"} className={styles.buyBtn}>
                            КУПИТИ
                            <img src={icons.WhiteArrow} alt="" />
                        </Link>
                    </div>
                </div>   
                <div className={styles.newProduct} style={newProductsColors[1]}>
                    <img src={icons.Drone} alt="" className={styles.newDroneImage} />
                    <div className={styles.newProductInfo}>
                        <p className={styles.newTitle}>DJI Mini 4K</p>
                        <p className={styles.newDescription}>Easy-To-Use Mini Camera Drone</p>
                    </div>
                    <div className={styles.order}>
                        <p>from to $299</p>
                        <Link to={"/"} className={styles.buyBtn}>
                            КУПИТИ
                            <img src={icons.WhiteArrow} alt="" />
                        </Link>
                    </div>
                </div>   
                <div className={styles.newProduct} style={newProductsColors[2]}>
                    <img src={icons.Drone} alt="" className={styles.newDroneImage} />
                    <div className={styles.newProductInfo}>
                        <p className={styles.newTitle}>DJI Mini 4K</p>
                        <p className={styles.newDescription}>Easy-To-Use Mini Camera Drone</p>
                    </div>
                    <div className={styles.order}>
                        <p>from to $299</p>
                        <Link to={"/"} className={styles.buyBtn}>
                            КУПИТИ
                            <img src={icons.WhiteArrow} alt="" />
                        </Link>
                    </div>
                </div>   
            </div>

        </div>
        <div className={styles.blockCatalog}>
            <h2>КАТАЛОГ</h2>
            <div className={styles.popularProducts}>
                
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>
                <div className={styles.popularProduct}>
                    <div className={styles.popularImage}>
                        <img src={icons.Drone} alt="" />
                    </div>
                    <span>
                        <p className={styles.popularTitle}>DJI Mini 4K</p>
                        <p className={styles.popularPrise}>29 900 ₴ </p>
                    </span>
                </div>

            </div>
            <Link to={"/catalog"} className={styles.blackBtn}>
                ДИВИТИСЬ ВСІ
                <img src={icons.WhiteArrow} alt="" />
            </Link>
        </div>
    </div>
}