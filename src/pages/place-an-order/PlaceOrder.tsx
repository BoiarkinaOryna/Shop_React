import { useState } from "react";
import { HeaderSimple } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./place.module.css";
import { icons } from "../../shared/types/icons";
import { SmallFooter } from "../../components/SmallFooter/SmallFooter";

export function PlaceOrder() {
  const [deliveryType, setDeliveryType] = useState<string>("");
  const [paymentType, setPaymentType] = useState<string>("");
  const [onlineMethod, setOnlineMethod] = useState<string>("card");

  return (
    <>
      <HeaderSimple />
      <Main>
        <div className={styles.mainCon}>
          <div className={styles.leftContainer}>
            <p className={styles.title}>ОФОРМИТИ ЗАМОВЛЕННЯ</p>
            <div className={styles.mainform}>
              <form id="orderForm" className={styles.formInfo}>
                <div className={styles.line}></div>
                <section>
                  <p className={styles.formP}>Ваші контактні діні </p>
                  <label className={styles.Formfield}>
                    <h1>Прізвище</h1>
                    <input type="text" placeholder="Ваше прізвище" />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Ім'я</h1>
                    <input type="text" placeholder="Ваше ім'я" />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>По батькові</h1>
                    <input type="text" placeholder="По батькові" />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Телефон</h1>
                    <input type="text" placeholder="+380" />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Email</h1>
                    <input type="text" placeholder="Ваш email" />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Коментар до замовлення</h1>
                    <textarea
                      className={styles.textarea}
                      placeholder="Щоб ви хотіли уточнити "
                    ></textarea>
                  </label>
                </section>
                <div className={styles.line2}></div>

                  <p className={styles.formP}>Доставка</p>
                <section>
                  <div className={styles.deliveryBlock}>
                    <label
                      className={`${styles.deliveryCard} ${
                        deliveryType === "postomat" ? styles.activeCard : ""
                      }`}
                    >
                      <div className={styles.deliveryHeader}>
                        <input
                          type="radio"
                          name="delivery"
                          value="postomat"
                          checked={deliveryType === "postomat"}
                          onChange={() => setDeliveryType("postomat")}
                        />
                        <h2>Нова Пошта до поштомату</h2>
                        <img src={icons.NewMail} />
                      </div>

                      <div
                        className={`${styles.expandContent} ${
                          deliveryType === "postomat" ? styles.open : ""
                        }`}
                      >
                        <label className={styles.Formfielda}>
                          <h3>Місто</h3>
                          <input type="text" placeholder="Дніпро" />
                          <p className={styles.citiesList}>
                            Вінниця Одеса Харків Дніпро Київ Львів
                          </p>
                        </label>

                        <label className={styles.Formfielda}>
                          <h3>Поштомат</h3>
                          <input type="text" placeholder="№25" />
                        </label>
                      </div>
                    </label>

                    <label
                      className={`${styles.deliveryCard} ${
                        deliveryType === "branch" ? styles.activeCard : ""
                      }`}
                    >
                      <div className={styles.deliveryHeader}>
                        <input
                          type="radio"
                          name="delivery"
                          value="branch"
                          checked={deliveryType === "branch"}
                          onChange={() => setDeliveryType("branch")}
                        />
                        <h2>Нова Пошта до відділення</h2>
                        <img src={icons.NewMail} />
                      </div>

                      <div
                        className={`${styles.expandContent} ${
                          deliveryType === "branch" ? styles.open : ""
                        }`}
                      >
                        <label className={styles.Formfielda}>
                          <h3>Місто</h3>
                          <input type="text" placeholder="Дніпро" />
                          <p className={styles.citiesList}>
                            Вінниця Одеса Харків Дніпро Київ Львів
                          </p>
                        </label>

                        <label className={styles.Formfielda}>
                          <h3>Відділення</h3>
                          <input type="text" placeholder="№1" />
                        </label>
                      </div>
                    </label>

                    <label className={styles.radioOption}>
                      <div className={styles.radioOptionInner}>
                        <input type="radio" name="delivery" value="branch" />
                        <h2>Експрес доставка по Києву</h2>
                      </div>
                    </label>
                    <label className={styles.radioOption}>
                      <div className={styles.radioOptionInner}>
                        <input type="radio" name="delivery" value="branch" />
                        <h2>Нова Пошта кур'єром</h2>
                        <img src={icons.NewMail} />
                      </div>
                    </label>
                  </div>
                </section>
                <div className={styles.line6}></div>
                  <p className={styles.formP}>Оплата</p>
                <section>

                  <div className={styles.deliveryBlock}>
                    <label
                      className={`${styles.deliveryCard} ${
                        paymentType === "cash" ? styles.activeCard : ""
                      }`}
                    >
                      <div className={styles.deliveryHeader}>
                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={paymentType === "cash"}
                          onChange={() => setPaymentType("cash")}
                        />
                        <h2>Оплата при отриманні</h2>
                      </div>
                    </label>

                    <label
                      className={`${styles.deliveryCard} ${
                        paymentType === "card" ? styles.activeCard : ""
                      }`}
                    >
                      <div className={styles.deliveryHeader}>
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentType === "card"}
                          onChange={() => setPaymentType("card")}
                        />
                        <h2>Оплатити зараз</h2>
                        <img src={icons.Card} />
                      </div>

                      <div
                        className={`${styles.expandContent} ${
                          paymentType === "card" ? styles.open : ""
                        }`}
                      >
                        <div className={styles.onlineMethods}>
                          <label className={styles.onlineOption}>
                            <input
                              type="radio"
                              name="onlineMethod"
                              value="card"
                              checked={onlineMethod === "card"}
                              onChange={() => setOnlineMethod("card")}
                            />
                            <h3>Карткою онлайн</h3>
                          </label>

                          <label className={styles.onlineOption}>
                            <input
                              type="radio"
                              name="onlineMethod"
                              value="privat"
                              checked={onlineMethod === "privat"}
                              onChange={() => setOnlineMethod("privat")}
                            />
                            <h3>Privat Pay</h3>
                          </label>

                          <label className={styles.onlineOption}>
                            <input
                              type="radio"
                              name="onlineMethod"
                              value="apple"
                              checked={onlineMethod === "apple"}
                              onChange={() => setOnlineMethod("apple")}
                            />
                            <h3>Apple Pay</h3>
                          </label>

                          <label className={styles.onlineOption}>
                            <input
                              type="radio"
                              name="onlineMethod"
                              value="google"
                              checked={onlineMethod === "google"}
                              onChange={() => setOnlineMethod("google")}
                            />
                            <h3>Google Pay</h3>
                          </label>

                        </div>
                        {/* <div className={styles.buttonBack} >
                        </div> */}
                          
                      </div>
                    </label>
                  </div>
                </section>
                <button className={styles.back}>ПОВЕРНУТИСЬ</button>
              </form>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.orderTitle}>
              <p>Замовлення</p>
              <img src={icons.Pen} />
            </div>
            <div className={styles.orderContent}>
              <div className={styles.orderProduct}>
                <div className={styles.product}>
                  <div className={styles.productImage}>
                    <img src={icons.Drone} />
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.productName}>
                      <p>DJI Mini 4K</p>
                      <div className={styles.productPrice}>
                        <p>29 990 грн</p>
                      </div>
                    </div>
                    <div className={styles.productQuantity}>
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.line3}></div>
              <div className={styles.orderProductSum}>
                <div className={styles.totalAmount}>
                  <h4>Загальна сума</h4>
                  <p className={styles.totalAmount1}><s>29 990 грн</s></p>
                </div>
                <div className={styles.totalAmount}>
                  <h4>Заощаджено</h4>
                  <p className={styles.totalAmount2}>1000 грн</p>
                </div>
                <div className={styles.totalAmount}>
                  <h4>Доставка</h4>
                  <p className={styles.totalAmount3}>За Тарифами перевізника</p>
                </div>
                <div className={styles.totalAmount}>
                  <h4>Зі знижкою</h4>
                  <p className={styles.totalAmount4}>28 990 грн</p>
                </div>
              </div>
              <div className={styles.line4}></div>
              <div className={styles.confirmBlock}>
                <button form="orderForm" className={styles.confirmButton}>
                  ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
                </button>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <SmallFooter/>
    </>
  );
}
