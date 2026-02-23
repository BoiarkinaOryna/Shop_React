import { Link } from "react-router-dom"
import { icons } from "../../shared/types/icons"
import styles from  "./header.module.css"
import stylesS from  "./headerSimple.module.css"
import { useState } from "react"
import { ModalOpener } from "../../components/UserModals/ModalsOpener"



export function Header() {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return <header className={styles.headerContainer}>
        <div className={styles.header}>
            <nav className={styles.links}>
                <Link to={"/catalog"}>КАТАЛОГ</Link>
                <Link to={"/about"}>ПРО НАС</Link>
                <Link to={"/contacts"}>КОНТАКТИ</Link>
            </nav>

            <a href="#top">
                <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
            </a>

            <div className={styles.profile}>
                <div className={styles.bag}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <button onClick={() => setIsOpen(true)} className={styles.user}>
                    <img src={icons.LightAvatar} alt="" />
                </button>
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
        <ModalOpener isOpen={isOpen} type="registration"/>
    </header>
}

export function HeaderSimple(){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return <header className={stylesS.headerContainer}>
        <div className={stylesS.headerSimple}>
            <nav className={stylesS.linksSimple}>
                <Link to={"/catalog"}>КАТАЛОГ</Link>
                <Link to={"/about"}>ПРО НАС</Link>
                <Link to={"/contacts"}>КОНТАКТИ</Link>
            </nav>

            <Link to={"/"}>
                <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
            </Link>

            <div className={stylesS.profileSimple}>
                <div className={stylesS.bagSimple}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <button onClick={() => setIsOpen(true)} className={stylesS.userSimple}>
                    <img src={icons.LightAvatar} alt="" />
                </button>
            </div>
        </div>
        
        <ModalOpener isOpen={isOpen} type="registration"/>
    </header>
}