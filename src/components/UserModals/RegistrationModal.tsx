import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"



export function RegistrationModal(){
    return <div className={styles.modalContainer}>
        <div className={styles.topSector}>
            <p className={styles.modalType}>
                <span>Авторизація </span>
                /
                <span> Реєстрація</span>
            </p>
            <img className={styles.closeModal} src={icons.Cross} alt="" />
        </div>
        <div className={styles.mainSector}>
            <div className={styles.formInputs}>
                <div className={styles.input}>
                    <label htmlFor="name">Ім'я</label>
                    <input type="text" placeholder="Введіть ім’я" id="name"/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Введіть email" id="email"/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="password">Пароль</label>
                    <input type="text" placeholder="Введіть пароль" id="password"/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="passwordConf">Підтвердження пароля</label>
                    <input type="text" placeholder="Повторіть пароль" id="passwordConf"/>
                </div>
                <button>Вже є акаунт? Увійти</button>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.buttons}>
                    <button className={styles.cancel}>СКАСУВАТИ</button>
                    <button className={styles.confirm}>ЗАРЕЄСТРУВАТИСЯ</button>
                </div>
                <p>При вході або реєстрації, я підтверджую згоду з умовами <span className={styles.redText}>публічного договору</span></p>
            </div>
        </div>
    </div>
}