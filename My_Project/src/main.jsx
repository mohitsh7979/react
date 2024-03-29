import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"

const router = createBrowserRouter(

    createRoutesFromElements(

       <Route path = "/" element = {<App />}>
          <Route path="" element = {<Home />} />
          <Route path="our_product" element = {<Home />} />
          <Route path="about" element = {<Home />} />
       </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
