import { createRoot } from "react-dom/client"
import { Footer } from "./app/footer/Footer"
import { Header } from "./app/header/Header"
import { HomePage } from "./pages/home/HomePage"

const rootContainer = document.getElementById("root") as HTMLElement

const root = createRoot(rootContainer)



// root.render(<Footer></Footer>)
// root.render(<Header></Header>)
root.render(<HomePage></HomePage>)