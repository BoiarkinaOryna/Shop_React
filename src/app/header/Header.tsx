import { Link, useNavigate } from "react-router-dom"
import { icons } from "../../shared/types/icons"
import styles from "./header.module.css"
import stylesS from "./headerSimple.module.css"
import { useState } from "react"
import { ModalOpener, ModalType } from "../../components/UserModals/ModalsOpener"

interface HeaderSimpleInterface {
    isOnHomePage?: boolean
    isOnCatalogPage?: boolean
    isOnAbotPage?: boolean
}

export function HeaderSimple(props: HeaderSimpleInterface) {
    const { isOnHomePage, isOnCatalogPage, isOnAbotPage } = props
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType>("registration");
    const navigate = useNavigate()
    const isRegistered = localStorage.getItem("userRegistered") === "true"

    const handleUserClick = () => {
        if (isRegistered) {
            navigate("/contacts") 
        } else {
            setModalType("registration") 
            setIsOpen(true)
        }
    }
    return (
        <div className={stylesS.headerContainer}>
            <div className={stylesS.headerSimple}>
                <nav className={stylesS.linksSimple}>
                    {isOnCatalogPage ? <a href="#top">КАТАЛОГ</a> : <Link to={"/catalog"}>КАТАЛОГ</Link>}
                    {isOnAbotPage ? <a href="#top">ПРО НАС</a> : <Link to={"/about"}>ПРО НАС</Link>}
                    <Link to={"/contacts"}>КОНТАКТИ</Link>
                </nav>

                {isOnHomePage ? (
                    <a href="#top">
                        <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
                    </a>
                ) : (
                    <Link to={"/"}>
                        <img src={icons.HeaderLogo} className={stylesS.logoSimple} />
                    </Link>
                )}

                <div className={stylesS.profileSimple}>
                    <div className={stylesS.bagSimple}>
                        <img src={icons.LightCart} alt="" />
                    </div>
                    <div className={stylesS.profileSimple}>
                    <div className={stylesS.bagSimple}>
                        <img src={icons.LightCart} alt="" />
                    </div>
                    <button
                        onClick={handleUserClick}   
                        className={stylesS.userSimple}
                    >
                        <img src={icons.LightAvatar} alt="" />
                    </button>
                </div>
                </div>
            </div>

            {isOpen && (
                <div className={stylesS.closeModalArea} onClick={() => setIsOpen(false)}>
                    <ModalOpener
                    isOpen={isOpen}
                    type={modalType}        
                    onClose={() => setIsOpen(false)}
                    setType={setModalType} 
                   
                    />
                </div>
                )}
        </div>
    )
}

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <HeaderSimple isOnHomePage={true} />
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
    )
}





