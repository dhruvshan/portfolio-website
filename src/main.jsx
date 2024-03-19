import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
    ]
    //   {
    //     path:"/my-assets",
    //     element: <AssetView/>
    //   },
    //   {
    //     path: "/login",
    //     element: <Login />,
    //     errorElement: <ErrorPage />
    //   },
    //   {
    //     path: "/register",
    //     element: <Register />,
    //     errorElement: <ErrorPage />
    //   },
    //   {
    //     path: "/add-assets",
    //     element: <AddMyAssets />,
    //     errorElement: <ErrorPage />
    //   },
    //   {
    //     path: "/transactions",
    //     element: <TransactionView />,
    //     errorElement: <ErrorPage />
    //   }
    // ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
