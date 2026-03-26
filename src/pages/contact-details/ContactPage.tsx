import { Main } from "../../app/main/Main";
import styles from "./contact.module.css";
import { Link, Outlet, useNavigate } from "react-router-dom";


export function ContactPage() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRegistered"); 
    navigate("/"); 
  };

  function changeActivePage(target: EventTarget){
    console.log(target)
    const prev = document.getElementsByClassName(styles.activeItem)[0]
    prev.className = styles.menuItem
    if (target instanceof Element){
      target.className = styles.activeItem
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.leftTitle}>ОСОБИСТИЙ КАБІНЕТ</p>

        <Link to="/personal-data/contacts" className={styles.activeItem} onClick={(e) => changeActivePage(e.target)}>КОНТАКТНІ ДАНІ</Link>
        <Link to="/personal-data/orders" className={styles.menuItem} onClick={(e) => changeActivePage(e.target)}>МОЇ ЗАМОВЛЕННЯ</Link>
        <p className={styles.menuItem}>АДРЕСА ДОСТАВКИ</p>

        <div className={styles.line}></div>

        <p className={styles.menuItem} onClick={handleLogout}>ВИЙТИ</p>
      </div>

      <Outlet/>
    </div>
  );
}
