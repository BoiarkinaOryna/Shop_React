import { Link } from "react-router-dom"
import { icons } from "../../shared/types/icons"
import styles from  "./header.module.css"
import stylesS from  "./headerSimple.module.css"



export function Header() {
  return (
    <header className={styles.headerContainer}>
        <div className={styles.header}>
            <nav className={styles.links}>
                <Link to={"/catalog"}>КАТАЛОГ</Link>
                <Link to={"/about"}>ПРО НАС</Link>
                <Link to={"/contacts"}>КОНТАКТИ</Link>
            </nav>

            <Link to={"/"}>
                <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
            </Link>

            <div className={styles.profile}>
                <div className={styles.bag}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <div className={styles.user}>
                    <img src={icons.LightAvatar} alt="" />
                </div>
            </div>
        </div>
        <h1 className={styles.heading}>
            <span>ТЕХНОЛОГІЇ</span>
            <span>ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ</span>
        </h1>
        <img src={icons.Drone} className={styles.drone} alt="" />
        <div className={styles.whiteArc}>
            <div className={styles.toCatalog}>
                <p>Передові технології в одному місці. <br />Обирай найкраще для найважливішого.</p>
                <button className={styles.catalogButton}>ДО КАТАЛОГУ</button>
            </div>
        </div>
    </header>
  )
}

export function HeaderSimple(){
    return(
        <header>
        <div className={stylesS.headerSimple}>
            <nav className={stylesS.linksSimple}>
                <span>КАТАЛОГ</span>
                <span>ПРО НАС</span>
                <span>КОНТАКТИ</span>
            </nav>

            <Link to={"/"}>
                <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
            </Link>

            <div className={stylesS.profileSimple}>
                <div className={stylesS.bagSimple}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <div className={stylesS.userSimple}>
                    <img src={icons.LightAvatar} alt="" />
                </div>
            </div>
        </div>
        
    </header>
    )
}