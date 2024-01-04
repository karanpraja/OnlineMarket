import React from 'react';
import './App.css';
import Home from './pages/Home';

// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "signup",
    element: <SignUpPage/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path:"cart",
    element:<CartPage/>
  },
  {path:'checkout',
  element:<CheckoutPage/>
  },
  {path:'productdetail',
  element:<ProductDetailPage/>
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
