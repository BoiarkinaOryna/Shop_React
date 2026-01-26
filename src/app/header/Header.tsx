import { icons } from "../../shared/types/icons"
import styles from  "./header.module.css"


export function Header() {
  return (
    <header>
        <div className={styles.header}>
            <nav className={styles.links}>
                <span>КАТАЛОГ</span>
                <span>ПРО НАС</span>
                <span>КОНТАКТИ</span>
            </nav>

            <img src={icons.HeaderLogo} className={styles.logo} />

            <div className={styles.profile}>
                <div className={styles.bag}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={icons.LightAvatar} alt="" />
                </div>
            </div>
        </div>
        <h1 className={styles.heading}>
            <span>ТЕХНОЛОГІЇ</span>
            <span>ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ</span>
        </h1>
        <img src={icons.Drone} className={styles.drone} alt="" />
        <div className={styles.whiteArc}>
            <div className={styles.toCatalog}>
                <p>Передові технології в одному місці. <br />Обирай найкраще для найважливішого.</p>
                <button className={styles.catalogButton}>ДО КАТАЛОГУ</button>
            </div>
        </div>
    </header>
  )
}
