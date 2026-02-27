import { HeaderSimple } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./contact.module.css";

export function ContactPage() {
  return (
    <>
      <HeaderSimple />
      <Main>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <p className={styles.leftTitle}>ОСОБИСТИЙ КАБІНЕТ</p>

            <p className={styles.activeItem}>КОНТАКТНІ ДАНІ</p>
            <p className={styles.menuItem}>МОЇ ЗАМОВЛЕННЯ</p>
            <p className={styles.menuItem}>АДРЕСА ДОСТАВКИ</p>

            <div className={styles.line}></div>

            <p className={styles.menuItem}>ВИЙТИ</p>
          </div>

          <div className={styles.rightContainer}>
            <p className={styles.sectionTitle}>Контактні дані</p>

            <form className={styles.form}>
              <div className={styles.formField}>
                <label>Прізвище</label>
                <input type="text" placeholder="Ваше прізвище" />
              </div>

              <div className={styles.formField}>
                <label>Ім'я</label>
                <input type="text" placeholder="Ваше ім'я" />
              </div>

              <div className={styles.formField}>
                <label>По батькові</label>
                <input type="text" placeholder="По батькові" />
              </div>

              <div className={styles.formField}>
                <label>Дата народження</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>

              <div className={styles.formField}>
                <label>Телефон</label>
                <input type="text" placeholder="+380" />
              </div>

              <div className={styles.formField}>
                <label>E-mail</label>
                <input type="text" placeholder="Ваш e-mail" />
              </div>

              <button className={styles.button} type="submit">
                ЗБЕРЕГТИ ЗМІНИ
              </button>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}
