import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import DetailsNews from "../components/DetailsNews";

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
            {
                path : '/detailsNews/:id',
                element : <DetailsNews></DetailsNews>,
                loader : () => fetch("../news.json")
            },
        ]
    },
]);