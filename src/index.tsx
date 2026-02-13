import { createRoot } from "react-dom/client"
import { App } from "./app/App"
import { CatalogPage } from "./pages/catalog/CatalogPage"

const rootContainer = document.getElementById("root") as HTMLElement

const root = createRoot(rootContainer)

// root.render(<App/>)
root.render(<CatalogPage/>)