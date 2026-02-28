import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"


export function AuthorizationModal(){
    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType} onClick={(event) => {event.stopPropagation()}}>
                    <span>Авторизація </span>
                    /
                    <span className={styles.restingOption}> Реєстрація</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <div className={styles.mainSector} onClick={(event) => {event.stopPropagation()}}>
                <div className={styles.formInputs}>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Введіть email" id="email"/>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Email</label>
                        <input type="password" placeholder="Введіть пароль" id="password"/>
                    </div>
                    <button>Забули пароль?</button>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttonsStart}>
                        <button className={styles.cancel}>СКАСУВАТИ</button>
                        <button className={styles.confirm}>УВІЙТИ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}