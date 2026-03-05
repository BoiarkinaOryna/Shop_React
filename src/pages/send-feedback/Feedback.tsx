import { useForm } from "react-hook-form"
import { SendFeedbackState } from "./types"
import { useFeedback } from "../../hooks/feedbaack/Post-feedback"
import { useState } from "react"
import styles from "./feedback.module.css"
import { UseFeedBack } from "../../shared/types/types"
import { icons } from "../../shared/types/icons"


export function Feedback(){

    const { register, handleSubmit, formState, getValues } = useForm<SendFeedbackState>()
    const [ values, setValues ] = useState<UseFeedBack>({
        name: "",
        email: "",
        phoneNumber: "",
        message: ""
    })
    const [ isFormComplete, setFormComplete ] = useState<boolean>(false)
    const { isLoading, error } = useFeedback(isFormComplete, values)
    const { 
        name: nameError,
        phoneNumber: numberError,
        email: emailError,
        message: messageError
    } = formState.errors

    if (isLoading) return <div>Завантаженн</div>

    function onSendFeedbackSubmit(){
        setFormComplete(true)
        setValues(getValues())
    }
    
    return <div className={styles.container}>
        <h1>КОНТАКТИ</h1>
        <div className={styles.infoContainer}>
            <div className={styles.block}>
                <p className={styles.subHeaders}>Наші контакти</p>
                <div className={styles.contatcInfoContainer}>
                    <div className={styles.contactOption}>
                        <img src={icons.PhoneGrey} alt="" />
                        <p className={styles.contatcInfo}>+38 (067) 123-45-67</p>
                    </div>
                    <div className={styles.contactOption}>
                        <img src={icons.MailGrey} alt="" />
                        <p className={styles.contatcInfo}>info@dronex.com.ua</p>
                    </div>
                    <div className={styles.contactOption}>
                        <img src={icons.Location} alt="" />
                        <p className={styles.contatcInfo}>вул. Університетська, 22, м. Дніпро, 49000, Україна</p>
                    </div>
                    <div className={styles.contactOption}>
                        <img src={icons.CalendarGray} alt="" />
                        <p className={styles.contatcInfo}>Пн–Пт: 10:00 — 18:00, Сб–Нд: вихідні</p>
                    </div>
                </div>
                <div className={styles.contatcInfoContainer}>
                    <p className={styles.mediaHeader}>Ми в соцмережах:</p>
                    <div className={styles.mediaLogos}>
                        <img src={icons.FacebookGrey} alt="" />
                        <img src={icons.TelegramGrey} alt="" />
                        <img src={icons.InstagramGrey} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.subHeaders}>Зв’язатися з нами</p>
                <form onSubmit={handleSubmit(onSendFeedbackSubmit)}>
                    <label>
                        <p>Ім’я</p>
                        <input type="text" placeholder="Ваше Ім'я" {...register("name", {
                            required: {
                                value: true,
                                message: "Ім'я обов'язкове"
                            },
                            maxLength: {
                                value: 20,
                                message: "Максимальна допустима довжина імені: 20 літер"
                            }
                        })}/>
                    </label>
                    <p>{ nameError?.message }</p>
                    <label>
                        <p>Телефон</p>
                        <input type="text" placeholder="+380" {...register("phoneNumber", {
                            required: {
                                value: true,
                                message: "Номер телеону обов'язковий"
                            },
                            validate: (value) => {
                                if (value){
                                const regexp = /^[a-z]+$/i
                                if (regexp.test(value)) return "Номер телефону не має містити букв"
                                if (value[0] != "+") return "Номер телефону має починатися з '+'"
                                }
                            }
                        })}/>
                    </label>
                    <p>{ numberError?.message }</p>
                    <label>
                        <p>E-mail</p>
                        <input type="text" placeholder="Ваш E-mail" {...register("email", {
                            required: {
                                value: true,
                                message: "Електронна адреса обов'язкова"
                            },
                            minLength: {
                                value: 6,
                                message: "Електронна адреса має містити мінімум 6 символів"
                            },
                            validate: (value) => {
                                if (value){
                                if (!value.includes("@") || !value.includes('.')) return "Це поле має містити електрону пошту. Символи '@' та '.' обов'язкові"
                                }
                            }
                        })}/>
                    </label>
                    <p>{ emailError?.message }</p>
                    <label>
                        <p>Повідомлення</p>
                        <textarea  placeholder="Ваше повідомлення" {...register("message", {
                            required: {
                                value: true,
                                message: "Тест обов'язковий"
                            }
                        })}></textarea>
                    </label>
                    <p>{ messageError?.message }</p>
                    <button>НАДІСЛАТИ</button>
                    
                </form>

            </div>

        </div>
    </div>
}