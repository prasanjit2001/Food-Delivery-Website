// main.jsx
import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from './assets/Components/About';
import Contact from './assets/Components/Contact';
import Error from './assets/Components/Error';
import Body from './assets/Components/Body.jsx';
import Cart from './assets/Components/Cart.jsx';
import RestaurantMenu from './assets/Components/RestaurantMenu.jsx';

import Shimmer from './assets/Components/Shimmer.jsx';


const Grocery=lazy(()=>import("./assets/Components/Grocery"))
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element:<Suspense fallback=<Shimmer/>><Grocery /></Suspense> 
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:"/restaurants/:resId",
          element:<RestaurantMenu/>
        },
      ],
      errorElement:<Error/>
    },
    
  ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>

  </React.StrictMode>
);
