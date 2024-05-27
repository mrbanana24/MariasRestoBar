import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./screens/Login";
import Eror from "./screens/ErrorPage";
import MainPage from "./screens/MainPage";
import SummaryDays from "./screens/SummaryDays";
import SummaryMonths from "./screens/SummaryMonths";
import theme from './GlobalTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';


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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Agrega CssBaseline para un estilo base y consistente */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);