import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import { ProductPage } from "./pages/product-page/ProductPage"

const rootContainer = document.getElementById("root") as HTMLElement

const root = createRoot(rootContainer)

root.render(<ProductPage/>)