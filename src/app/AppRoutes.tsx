import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";


export function AppRoutes(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}