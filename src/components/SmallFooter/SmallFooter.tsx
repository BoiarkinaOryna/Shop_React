import { icons } from "../../shared/types/icons"
import styles from "./footer.module.css"


export function SmallFooter(){
    return <footer className={styles.footer}>

        <div className={styles.drones}>
            <img src={icons.SmallFooterText} alt="Drones" />
        </div>
        <div className={styles.separator}></div>

        <div className={styles.copyright}>
            © 2025 Drones Всі права захищені
        </div>

    </footer>
}