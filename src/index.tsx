import { createRoot } from "react-dom/client"
import { HomePage } from "./pages/home/HomePage"
import { ProductPage } from "./pages/product-page/Product"
import { CatalogPage } from "./pages/catalog/CatalogPage"
import { PlaceOrder } from "./pages/place-an-order/PlaceOrder"

const rootContainer = document.getElementById("root") as HTMLElement

const root = createRoot(rootContainer)



// root.render(<Footer></Footer>)
// root.render(<Header></Header>)
// root.render(<HomePage></HomePage>)
// root.render(<ProductPage></ProductPage>)
root.render(<PlaceOrder></PlaceOrder>)