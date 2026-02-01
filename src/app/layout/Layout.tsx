import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";


export function Layout(){
    return <div>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </div>
}