import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { ProductPage } from "../pages/product-page/Product";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="product/:id" element={<ProductPage />} />
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}