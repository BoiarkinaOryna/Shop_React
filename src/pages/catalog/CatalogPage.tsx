import { Footer } from "../../app/footer/Footer"
import { HeaderSimple } from "../../app/header/Header"
import { Main } from "../../app/main/Main"
import { icons } from "../../shared/types/icons"
import styles from "./catalog.module.css"

export function CatalogPage(){

    return(
        <>
        <HeaderSimple />    
        <Main>
            <h1>Каталог</h1>
            <div className={styles.mainCon} >
                <div className={styles.filter} >
                    <div> <img src={icons.all} alt="" /></div>
                    <div> <img src={icons.MiniDrone} alt="" /></div>
                    <div> <img src={icons.MiniDrone} alt="" /></div>
                </div>
                <div className={styles.products} >
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
            
        </Main>
        </>
    )
}