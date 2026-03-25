import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"


export function EmailModal(){
    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType} onClick={(event) => {event.stopPropagation()}}>
                    <span>Відновлення пароля</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <div className={styles.mainSector} onClick={(event) => {event.stopPropagation()}}>
                <div className={styles.formInputs}>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Введіть пароль" id="email"/>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttonsStart}>
                        <button className={styles.cancel}>СКАСУВАТИ</button>
                        <button className={styles.confirm}>НАДІСЛАТИ ЛИСТ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}