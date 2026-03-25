import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"


export function NewPasswordSuccessModal(){
    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType} onClick={(event) => {event.stopPropagation()}}>
                    <span>Новий пароль</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <div className={styles.mainSector} onClick={(event) => {event.stopPropagation()}}>
                <div className={styles.formInputs}>
                    <p>Пароль успішно змінено!</p>
                    <p>Тепер ви можете увійти з новим паролем.</p>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttonsStart}>
                        <button className={styles.confirm}>УВІЙТИ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}