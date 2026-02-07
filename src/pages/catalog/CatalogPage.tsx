import { icons } from "../../shared/types/icons"
import  styles  from "../catalog/catalog.module.css"


export function CatalogPage(){

    return <div  className={styles.catalogContainer}>
        <h1>Каталог</h1>
        <div className={styles.allContent}>
            <div className={styles.filter}>

            </div>
                <div className={styles.allProductContainer}>
                    <div className={styles.allProduct}>
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
                
                
                
                
            

                </div>
                    <div className={styles.productTabs}>

                </div>

            </div>

        </div>

    </div>
}