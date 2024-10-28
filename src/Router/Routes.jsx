import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/about',
                element : <About></About>,
            },
            {
                path : '/career',
                element : <Career></Career>,
            },
        ]
    },
]);