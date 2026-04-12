import { createBrowserRouter } from "react-router";
import Home from "./Home.jsx";
import Recipie from "./Recipie.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/recipie/:id",
        element: <Recipie />
    }
]);

export default router;