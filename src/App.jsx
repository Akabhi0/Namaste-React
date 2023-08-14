import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./app.css";
import userContext from "./util/userContext";

import Header from "./components/Header";
import Body from "./components/Body";
import { ContactUs } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { Restrauntant } from "./pages/Restrauntant";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import { Cart } from "./pages/Cart";

const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));

//config driven UI
//react key --  very important in terms of optimisation. I will be working always in case of array. KEY is used to uniquicly identify the component

const Footer = () => { };
const AppLayout = () => {
    const [userName, setUserName] = useState({})

    useEffect(() => {
        const data = { name: "kumar" }
        setUserName(data)
    }, [])

    return (
        <div className="flex flex-col">
            {
                <Provider store={appStore}>
                    <userContext.Provider value={{ name: userName.name, setUserName }}>
                        <Header />
                        <Outlet />
                        {Footer()}
                    </userContext.Provider>
                </Provider>
            }
        </div>
    );
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <ErrorPage />,
            }, {
                path: "/about",
                element: <Suspense><AboutUs /></Suspense>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/restrauntant/:resID",
                element: <Restrauntant />
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
