import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root'
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../Home"
import App from "../App";
import Installation from "../Installation";


 

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component:Home
        
      },
      {
        path: "/apps",
        Component: App
      },
      {
        path: "/installation",
        Component: Installation
      },

    ],
  },
]);
