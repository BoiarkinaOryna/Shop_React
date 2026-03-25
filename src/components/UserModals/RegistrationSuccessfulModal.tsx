import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"


export function RegistrationSuccessModal(){
    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType} onClick={(event) => {event.stopPropagation()}}>
                    <span>Реестрація</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <div className={styles.mainSector} onClick={(event) => {event.stopPropagation()}}>
                <div className={styles.formInputs}>
                    <p>Акаунт успішно створено!</p>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttonsStart}>
                        <button className={styles.confirm}>ПЕРЕЙТИ НА САЙТ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}