import { createBrowserRouter } from "react-router";
import Home from './Components/Home.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

export default router