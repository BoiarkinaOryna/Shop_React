import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { SuccessPage } from "../pages/seccess/SuccessPage";
import { ProductPage } from "../pages/product-page/ProductPage";
import { PlaceOrder } from "../pages/place-an-order/PlaceOrder";
import { CatalogPage } from "../pages/catalog/CatalogPage";


export function AppRoutes(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/" element={<Layout />}>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
            </Route>
            <Route path="/order" element={<PlaceOrder/>} />
            <Route path="/products/:id" element={<ProductPage/>}/>
            <Route path="/success" element={<SuccessPage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
}