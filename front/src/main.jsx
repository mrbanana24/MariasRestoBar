import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./screens/Login";
import Eror from "./screens/ErrorPage";
import MainPage from "./screens/MainPage";
import SummaryDays from "./screens/SummaryDays";
import SummaryMonths from "./screens/SummaryMonths";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Eror />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Eror />,
  },
  {
    path: "/resumenDia",
    element: <SummaryDays />,
  },
  {
    path: "/resumenMes",
    element: <SummaryMonths />,
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
