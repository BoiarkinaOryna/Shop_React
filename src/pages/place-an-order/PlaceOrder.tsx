import { useState } from "react";
import { HeaderSimple } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import { SmallFooter } from "../../components/SmallFooter/SmallFooter";
import { OrderCard } from "./OrderCard";
import { useCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { icons } from "../../shared/types/icons";
import styles from "./place.module.css";
import { API_URL } from "../../shared/api";

export function PlaceOrder() {
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [paymentType, setPaymentType] = useState("card");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const { items, priceCart, discountPriceCart, savedPriceCart, removeCart } =useCartContext();
  const navigate = useNavigate();
  // removeCart()

  async function handleSubmitOrder() {
    const orderData = {
      sum: discountPriceCart(),

      userName: name,
      userSurname: surname,
      userPatronymic: patronymic,
      userNumber: phone,
      userEmail: email,
      comment: comment,

      products: items.map((item) => ({
        productId: item.product.id,
        quantity: item.count,
      })),
    };
    // console.log("ORDER DATA:", orderData);
    try {
      // const token = localStorage.getItem("token");

      if (!items.length) {
        alert("Корзина пуста");
        return;
      }

      const response = await fetch(`${API_URL}/user/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(orderData),
      });

      await response.json();
      removeCart();
      navigate("/success");
    } catch (error) {}
  }

  return (
    <>
      <HeaderSimple />
      <Main>
        <div className={styles.mainCon}>
          <div className={styles.leftContainer}>
            <p className={styles.title}>ОФОРМИТИ ЗАМОВЛЕННЯ</p>
            <div className={styles.mainform}>
              <form
                className={styles.formInfo}
                onSubmit={(e) => e.preventDefault()}
              >
                <section>
                  <p className={styles.formP}>Ваші контактні дані</p>
                  <label className={styles.Formfield}>
                    <h1>Прізвище</h1>
                    <input
                      type="text"
                      placeholder="Ваше прізвище"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Ім'я</h1>
                    <input
                      type="text"
                      placeholder="Ваше ім'я"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>По батькові</h1>
                    <input
                      type="text"
                      placeholder="По батькові"
                      value={patronymic}
                      onChange={(e) => setPatronymic(e.target.value)}
                    />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Телефон</h1>

                    <input
                      type="text"
                      placeholder="+380"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Email</h1>
                    <input
                      type="text"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className={styles.Formfield}>
                    <h1>Коментар до замовлення</h1>
                    <textarea
                      className={styles.textarea}
                      placeholder="Щоб ви хотіли уточнити "
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </label>
                </section>

                <div className={styles.line2}></div>
                <p className={styles.formP}>Доставка</p>
                <section>
                  <div className={styles.deliveryBlock}>
                    <label
                      className={`${styles.deliveryCard} ${
                        deliveryType === "Postomat" ? styles.activeCard : ""
                      }`}
                    >
                      <div className={styles.deliveryHeader}>
                        <input
                          type="radio"
                          name="delivery"
                          value="Postomat"
                          checked={deliveryType === "Postomat"}
                          onChange={() => setDeliveryType("Postomat")}
                        />
                        <h2>Нова Пошта до поштомату</h2>
                        <img src={icons.NewMail} />
                      </div>
                      <div
                        className={`${styles.expandContent} ${
                          deliveryType === "Postomat" ? styles.open : ""
                        }`}
                      >
                        <label className={styles.Formfielda}>
                          <h3>Місто</h3>
                          <input type="text" placeholder="Дніпро" />
                          <p className={styles.citiesList}>
                            Вінниця Одеса Харків Дніпро Київ Львів
                          </p>
                        </label>
                      </div>
                    </label>

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
                    </label>
                  </div>
                </section>
              </form>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={styles.orderContent}>
              <OrderCard items={items} />

              <div className={styles.line3}></div>

              <div className={styles.orderProductSum}>
                <div className={styles.totalAmount}>
                  <h4>Загальна сума</h4>
                  <p>{priceCart()} грн</p>
                </div>
                <div className={styles.totalAmount}>
                  <h4>Заощаджено</h4>
                  <p>{savedPriceCart()} грн</p>
                </div>
                <div className={styles.totalAmount}>
                  <h4>Зі знижкою</h4>
                  <p>{discountPriceCart()} грн</p>
                </div>
              </div>

              <div className={styles.line4}></div>

              <button
                type="button"
                className={styles.confirmButton}
                onClick={handleSubmitOrder}
              >
                ПІДТВЕРДИТИ ЗАМОВЛЕННЯ
              </button>
            </div>
          </div>
        </div>
      </Main>
      <SmallFooter />
    </>
  );
}
