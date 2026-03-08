import { Main } from "../../app/main/Main";
import styles from "./contact.module.css";
import { Outlet, useNavigate } from "react-router-dom";


export function ContactPage() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRegistered"); 
    navigate("/"); 
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.leftTitle}>ОСОБИСТИЙ КАБІНЕТ</p>

        <p className={styles.activeItem}>КОНТАКТНІ ДАНІ</p>
        <p className={styles.menuItem}>МОЇ ЗАМОВЛЕННЯ</p>
        <p className={styles.menuItem}>АДРЕСА ДОСТАВКИ</p>

        <div className={styles.line}></div>

        <p className={styles.menuItem} onClick={handleLogout}>ВИЙТИ</p>
      </div>

      <Outlet/>
    </div>
  );
}
