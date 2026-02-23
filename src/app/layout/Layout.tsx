import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { HeaderSimple } from "../header/Header";
import { Main } from "../main/Main";


export function Layout(){
    return <div>
        <HeaderSimple/>
        <Main>
            <Outlet/>
        </Main>
        <Footer/>
    </div>
}