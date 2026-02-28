import { useEffect } from "react"
import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"
import { useForm } from "react-hook-form"


export function RegistrationModal(){

    const { register, handleSubmit, formState } = useForm()

    function onRegisterSubmit(){

    }

    const nameError = formState.errors.name
    const emailError = formState.errors.email
    const passwordError = formState.errors.password
    const confirmPasswordError = formState.errors.confirmPassword
    const rootError = formState.errors.root

    return <div className={styles.darkBackground}>
        <div className={styles.modalContainer}>
            <div className={styles.topSector}>
                <p className={styles.modalType} onClick={(event) => {event.stopPropagation()}}>
                    <span className={styles.restingOption}>Авторизація </span>
                    /
                    <span> Реєстрація</span>
                </p>
                <img className={styles.closeModal} src={icons.Cross} alt="" />
            </div>
            <form className={styles.mainSector} onSubmit={handleSubmit(onRegisterSubmit)} onClick={(event) => {event.stopPropagation()}}>
                <div className={styles.formInputs}>
                    <div className={styles.input}>
                        <label htmlFor="name">Ім'я</label>
                        <input type="text" placeholder="Введіть ім’я" id="name" {...register("name", {
                            required: {
                                value: true,
                                message: "Введіть ім'я користувача"
                            },
                            minLength: {
                                value: 1,
                                message: "Ім'я має бути не менше 1 символа"
                            }
                        })}/>
                        <p>{ nameError?.message as string | undefined }</p>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Введіть email" id="email" {...register("email", {
                            required: {
                                value: true,
                                message: "Введіть електрону пошту"
                            },
                            minLength: {
                                value: 6,
                                message: "Електронна адреса має містити мінімум 6 символів"
                            },
                            validate: (value) => {
                                if (!value.includes("@") || !value.includes('.')) return "Це поле має містити електрону пошту. Символи '@' та '.' обов'язкові"
                            }
                        })}/>
                        <p>{ emailError?.message as string | undefined }</p>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" placeholder="Введіть пароль" id="password" {...register("password", {
                            required: {
                                value: true,
                                message: "Пароль обов'язковий"
                            }
                        })}/>
                        <p>{ passwordError?.message as string | undefined }</p>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="passwordConf">Підтвердження пароля</label>
                        <input type="password" placeholder="Повторіть пароль" id="passwordConf" {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Підтвердження пароля обов'язкове"
                            }
                        })}/>
                        <p>{ confirmPasswordError?.message as string | undefined }</p>
                    </div>
                    <button>Вже є акаунт? Увійти</button>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.cancel}>СКАСУВАТИ</button>
                        <button className={styles.confirm}>ЗАРЕЄСТРУВАТИСЯ</button>
                    </div>
                    {rootError && <p className={styles.error}>{rootError.message}</p>}
                    <p>При вході або реєстрації, я підтверджую згоду з умовами <span className={styles.redText}>публічного договору</span></p>
                </div>
            </form>
        </div>
    </div>
}