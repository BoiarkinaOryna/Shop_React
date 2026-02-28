import { Link } from "react-router-dom"
import { icons } from "../../shared/types/icons"
import styles from  "./header.module.css"
import stylesS from  "./headerSimple.module.css"
import { useState } from "react"
import { ModalOpener } from "../../components/UserModals/ModalsOpener"



export function Header() {
    return <header className={styles.headerContainer}>
        <HeaderSimple isOnHomePage={true}/>
        <h1 className={styles.heading} id="top">
            <span>ТЕХНОЛОГІЇ</span>
            <span>ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ</span>
        </h1>
        <img src={icons.Drone} className={styles.drone} alt="" />
        <div className={styles.whiteArc}>
            <div className={styles.toCatalog}>
                <p>Передові технології в одному місці. <br />Обирай найкраще для найважливішого.</p>
                <Link to={"/catalog"} className={styles.catalogButton}>ДО КАТАЛОГУ</Link>
            </div>
        </div>
    </header>
}


interface HeaderSimpleInterface {
    isOnHomePage?: boolean
    isOnCatalogPage?: boolean
    isOnAbotPage?: boolean
}

export function HeaderSimple(props: HeaderSimpleInterface){
    const { isOnHomePage, isOnCatalogPage, isOnAbotPage } = props
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    return <div className={stylesS.headerContainer}>
        <div className={stylesS.headerSimple}>
            <nav className={stylesS.linksSimple}>
                { isOnCatalogPage ?
                    <a href="#top">КАТАЛОГ</a>
                    :
                    <Link to={"/catalog"}>КАТАЛОГ</Link>
                }
                { isOnAbotPage ?
                    <a href="#top">ПРО НАС</a>
                    :
                    <Link to={"/about"}>ПРО НАС</Link>
                }
                <Link to={"/contacts"}>КОНТАКТИ</Link>
            </nav>

            { isOnHomePage ?
                <a href="#top">
                    <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
                </a>
                :
                <Link to={"/"}>
                    <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
                </Link>
            }

            <div className={stylesS.profileSimple}>
                <div className={stylesS.bagSimple}>
                    <img src={icons.LightCart} alt="" />
                </div>
                <button onClick={() => setIsOpen(true)} className={stylesS.userSimple}>
                    <img src={icons.LightAvatar} alt="" />
                </button>
            </div>
        </div>
        
        {isOpen && <div className={stylesS.closeModalArea} onClick={() => setIsOpen(false)}>
            <ModalOpener isOpen={isOpen} type="registration"/>
        </div>}
    </div>
}