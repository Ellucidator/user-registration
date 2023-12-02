import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import React from "react";
import Home from "./pages/home/page";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[{
            path:"/",
            element:<Home/>
        }]
    }
])