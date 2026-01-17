import { icons } from "../../shared/types/icons"
import styles from  "./header.module.css"


export function Header() {
  return (
    <header className={styles.header}>

        <nav className={styles.links}>
            <span>КАТАЛОГ</span>
            <span>ПРО НАС</span>
            <span>КОНТАКТИ</span>
        </nav>

        <div className={styles.logo}>
          DRONES
        </div>

        <div className={styles.profile}>
            <div className={styles.bag}>
                <img src={icons.LightCart} alt="" />
            </div>
            <div className={styles.user}>
                <img src={icons.LightAvatar} alt="" />
            </div>
        </div>

    </header>
  )
}
