import { icons } from "../../shared/types/icons"
import styles from "./about.module.css"

export function AboutPage(){
    return <div className={styles.container}>
        <div className={styles.firstBlock}>
            <div className={styles.textAbout}>
                <h1>ПРО НАС</h1>
                <p>Ми — команда, яка об'єднана спільною метою: зробити передові технології доступними для кожного, хто потребує точності, безпеки та інновацій. З 2022 року ми спеціалізуємось на постачанні дронів і тепловізорів для професійного, цивільного та волонтерського використання.</p>
            </div>
            <img src={icons.AboutIllustration1} alt="" />
        </div>
        <div className={styles.infoBlock}>
            <div className={styles.textBlock}>
                <h2>НАША МІСІЯ</h2>
                <p>Допомагати тим, хто стоїть на передовій — у прямому й переносному сенсі. Ми обираємо тільки надійну техніку, яку перевіряємо самі. Наша мета — якість, простота, і підтримка на кожному етапі: від покупки до використання.</p>
            </div>
            <img src={icons.AboutIllustration2} alt="" />
        </div>
        <div className={styles.infoBlock}>
            <img src={icons.AboutIllustration3} alt="" />
            <div className={styles.textBlock}>
                <h2>КОМАНДА, ЯКІЙ МОЖНА ДОВІРЯТИ</h2>
                <p>Ми — не просто магазин. Ми — фахівці, які самі працюють із цією технікою й консультують з досвіду. Засновники проєкту — волонтери, військові та IT-спеціалісти, які об'єднали зусилля задля важливої справи.</p>
            </div>
        </div>
    </div>
}