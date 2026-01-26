import { Footer } from "../../app/footer/Footer";
import { Header } from "../../app/header/Header";
import { Main } from "../../app/main/Main";
import styles from "./home.module.css";


export function HomePage(){
    return (
        <div className={styles.app}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}