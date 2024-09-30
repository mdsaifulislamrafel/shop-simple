import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Order from "../Home/Order/Order";
import Login from "../Login/Login";
import Register from "../Register/Register";
import OrderList from "../OrderList/OrderList";
import PrivateRoute from "../Provider/PrivatRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/order/:id',
                element: <Order />,
                loader: ({ params }) => fetch(`https://shop-simple-server-iota.vercel.app/products/${params.id}`)
            },
            // admin routes
            {
                path: '/order-list',
                element: <PrivateRoute><OrderList /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);