import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home/> ),
  },
  {
    path: "/login",
    element: ( <LoginPage/>),
  },

  {
    path: "/signup",
    element: ( <SignupPage/>),
  },
  {
    path: "/cart",
    element: ( <CartPage/>),
  },
  {
    path: "/checkout",
    element: ( <Checkout/>),
  },
  {
    path: "/product-details",
    element: ( <ProductDetailsPage/>),
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
