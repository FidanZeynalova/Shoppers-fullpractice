import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Add from "../pages/Add";
import Wishlist from "../pages/Wishlist";
import NotFound from "../pages/NotFound";




export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/favorites",
                element: <Wishlist />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]