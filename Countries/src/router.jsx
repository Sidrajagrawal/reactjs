import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import CountryDetail from "./Components/CountryDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/country/:code',
        element: <CountryDetail />
    }
])
export default router;