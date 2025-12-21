import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root'
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../Home"
import App from "../App";
import Installation from "../Installation";
import Appdetails from "../component/Appdetails/Appdetails";


 
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
           
          await new Promise((r) => setTimeout(r, 700));
          return null;
        },
      },
      {
        path: "apps",
        Component: App,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 700));
          return null;
        },
      },
      {
        path: "apps/:id",
        Component: Appdetails,
        loader: async ({ params }) => {
          await new Promise((r) => setTimeout(r, 700));
           
          return params.id;
        },
      },
      {
        path: "installation",
        Component: Installation,
        loader: async () => {
          await new Promise((r) => setTimeout(r, 700));
          return null;
        },
      },
    ],
  },
]);
