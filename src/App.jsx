import React from "react";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
