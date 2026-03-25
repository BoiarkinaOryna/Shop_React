// src/components/UserModals/AuthorizationModal.tsx
import { useState } from "react"
import { icons } from "../../shared/types/icons"
import styles from "./user-modals.module.css"
import { API_URL } from "../../shared/api"

interface Props {
    onClose: () => void
    switchToSuccess: () => void
}

export function AuthorizationModal({ onClose, switchToSuccess }: Props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rootError, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
        setLoading(true)
        setError(null)
    
        try {
            const response = await fetch(`${API_URL}/user/authorization`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })
    
            let result
            if (response.headers.get("content-type")?.includes("application/json")) {
                result = await response.json()
            } else {
                result = { message: "Сервер повернув несподіваний результат" }
            }
    
            if (!response.ok) {
                setError(result.message || "Невірна пошта або пароль")
            } else {
                localStorage.setItem("userRegistered", "true");
                switchToSuccess()
            }
        } catch (err: any) {
            setError(err.message || "Помилка мережі")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.darkBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.topSector}>
                    <p className={styles.modalType} onClick={e => e.stopPropagation()}>
                        <span>Авторизація </span> / <span className={styles.restingOption}> Реєстрація</span>
                    </p>
                    <img className={styles.closeModal} src={icons.Cross} alt="Закрити" onClick={onClose} />
                </div>

                <div className={styles.mainSector} onClick={e => e.stopPropagation()}>
                    <div className={styles.formInputs}>
                        <div className={styles.input}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                placeholder="Введіть email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                placeholder="Введіть пароль"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        {rootError && <p className={styles.error}>{rootError}</p>}

                        <button type="button" onClick={() => alert("Забули пароль?")}>Забули пароль?</button>
                    </div>

                    <div className={styles.bottomSection}>
                        <div className={styles.buttonsStart}>
                            <button className={styles.cancel} onClick={onClose}>СКАСУВАТИ</button>
                            <button className={styles.confirm} type="button" onClick={handleLogin}>
                                {loading ? "Вхід..." : "УВІЙТИ"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}