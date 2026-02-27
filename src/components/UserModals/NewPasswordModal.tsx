import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"


export function NewPasswordModal(){
    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType}>
                    <span>Новий пароль</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <div className={styles.mainSector}>
                <div className={styles.formInputs}>
                    <div className={styles.input}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" placeholder="Введіть пароль" id="password"/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="passwordConf">Підтвердження пароля</label>
                        <input type="password" placeholder="Повторіть пароль" id="passwordConf"/>
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttonsStart}>
                        <button className={styles.cancel}>СКАСУВАТИ</button>
                        <button className={styles.confirm}>ЗБЕРЕГТИ НОВИЙ ПАРОЛЬ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}