import React from "react";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country"
import Contact from "./Pages/Contact"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CountryDetails } from "./components/Layout/CountryDetails";

import './index.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "country",
          element: <Country/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "/country/:name",
          element: <CountryDetails/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
