import { icons } from "../../../../shared/types/icons"
import styles from "./order-card.module.css"


export function OrderCard(props: {isOpen: boolean}){
    const { isOpen } = props
    return <div className={styles.orderCard}>
        <div className={styles.topSection}>
            <div className={styles.generalInfo}>
                <div className={styles.elipse}></div>

                <div className={styles.orderDetail}>
                    <p className={styles.greyText}>№30349 від 20.04.2023</p>
                    <p className={styles.text}>Оформлення</p>
                </div>
                <div className={styles.orderDetail}>
                    <p className={styles.greyText}>Номер відправлення</p>
                    <p className={styles.text}>20030040050000</p>
                </div>
                <div className={styles.orderDetail}>
                    <p className={styles.greyText}>Сума замовлення</p>
                    <p className={styles.text}>25 830.00 ₴</p>
                </div>
            </div>
            <div className={styles.cardOpener}>
                <img className={styles.droneImage} src={icons.Drone} alt="" />
                <img src={icons.DownOutline} alt="" />
            </div>
        </div>
        { isOpen && 
            <div className={styles.middleSection}>
                <p className={styles.text}>
                    <span className={styles.greyText}>Номер відправлення:</span>
                    20030040050000
                    <button className={styles.copyNumber}>
                        <img src={icons.Copy} alt="" />
                    </button>
                </p>
                <img src={icons.OrderNav} alt="" />
                <div>
                    <p className={styles.text}>Оформлено</p>
                    <p className={styles.greyText}>Збирається</p>
                    <p className={styles.greyText}>У дорозі</p>
                    <p className={styles.greyText}>Доставлено</p>
                    <p className={styles.greyText}>Отримано</p>
                </div>
            </div>
        }
        { isOpen &&
            <div className={styles.bottomSection}>
                <p className={styles.greyText}>Інформація про замовлення</p>
                <div className={styles.devidedBlock}>
                    <div className={styles.bottomSectionContainerLeft}>
                        <div className={styles.addressBlock}>
                            <p className={styles.greyText}>Адреса доставки</p>
                            <p className={styles.text}>Нова Пошта до відділення</p>
                            <p className={styles.text}>Дніпро, Відділення №1: вул. Маршала Малиновського, 114</p>
                        </div>
                        <div className={styles.addressBlock}>
                            <p className={styles.greyText}>Отримувач</p>
                            <p className={styles.text}>Анастасія Павленко</p>
                            <p className={styles.text}>+380 99 123 45 68</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.bottomSectionContainerRight}>
                        <div>
                            <div className={styles.to5Sections}>
                                <p style={{width: "4vw"}} className={styles.greyText}>Фото</p>
                                <p style={{width: "9vw"}} className={styles.greyText}>Назва</p>
                                <p style={{width: "9vw"}} className={styles.greyText}>Ціна</p>
                                <p style={{width: "9vw"}} className={styles.greyText}>Кількість</p>
                                <p style={{width: "6vw"}} className={styles.greyText}>Сума</p>
                            </div>
                            <div className={styles.to5Sections}>
                                <img className={styles.droneImage} src={icons.Drone} alt="" />
                                <p style={{width: "9vw"}} className={styles.text}>DJI Mini 4K</p>
                                <p style={{width: "9vw"}} className={styles.text}>29 990 ₴ </p>
                                <p style={{width: "9vw"}} className={styles.text}>1</p>
                                <p style={{width: "6vw"}} className={styles.text}>28 985 ₴</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.listRow}>
                                <p className={styles.greyText}>Оплата</p>
                                <p className={styles.text}>Накладений платіж</p>
                            </div>
                            <div className={styles.listRow}>
                                <p className={styles.greyText}>Доставка</p>
                                <p className={styles.text}>За тарифами перевізника</p>
                            </div>
                            <div className={styles.listRow}>
                                <p className={styles.greyText}>Загальна сума</p>
                                <p className={styles.text}>29 990 ₴</p>
                            </div>
                            <div className={styles.listRow}>
                                <p className={styles.greyText}>Заощаджено</p>
                                <p className={styles.text}>1 005 ₴</p>
                            </div>
                            <div className={styles.listRow}>
                                <p className={styles.greyText}>Разом</p>
                                <p className={styles.text}>28 985 ₴</p>
                            </div>
                        </div>
                        <button>СКАСУВАТИ</button>
                    </div>
                </div>
            </div>
        }

    </div>
}