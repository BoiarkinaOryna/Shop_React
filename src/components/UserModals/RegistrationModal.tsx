import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"

interface RegisterFormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface Props {
    onClose: () => void
    switchToSuccess: () => void
    switchToAuthorization: () => void 

}

export function RegistrationModal({ onClose, switchToSuccess, switchToAuthorization }: Props) {
    const { register, handleSubmit, formState, setError } = useForm<RegisterFormData>()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { name: nameError, email: emailError, password: passwordError, confirmPassword: confirmPasswordError, root: rootError } = formState.errors

    async function onRegisterSubmit(data: RegisterFormData) {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", { type: "manual", message: "Паролі не співпадають" })
            return
        }

        setLoading(true)
        try {
            const response = await fetch("http://localhost:8002/user/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password
                }),
               
            });

            const result = await response.json()
            console.log("result", result)
            if (!response.ok) {
                setError("root", { type: "server", message: result.message || "Помилка реєстрації" })
            } else {
                alert("Реєстрація успішна!")
                localStorage.setItem("userRegistered", "true")

                // switchToSuccess() 
                // onClose()
                // navigate("/login") 
            }
        } catch (err: any) {
            console.log(err.message)
            switchToAuthorization() 

            // setError("root", { type: "server", message: err.message || "Помилка мережі" })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.darkBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.topSector}>
                    <p className={styles.modalType} onClick={e => e.stopPropagation()}>
                        <span className={styles.restingOption}>Авторизація </span>/ <span>Реєстрація</span>
                    </p>
                    <img className={styles.closeModal} src={icons.Cross} alt="Закрити" onClick={onClose} />
                </div>
                <form className={styles.mainSector} onSubmit={handleSubmit(onRegisterSubmit)} onClick={e => e.stopPropagation()}>
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
                        <button
                            type="button"
                            onClick={() => switchToAuthorization()}>
                            Вже є акаунт? Увійти
                        </button>
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.cancel}>СКАСУВАТИ</button>
                        <button className={styles.confirm}>

                                {loading ? "Реєстрація..." : "ЗАРЕЄСТРУВАТИСЯ"}
                        </button>
                    </div>
                    {rootError && <p className={styles.error}>{rootError.message}</p>}
                    <p>При вході або реєстрації, я підтверджую згоду з умовами <span className={styles.redText}>публічного договору</span></p>
                </div>
                </form>
            </div>
        </div>
    )
}                