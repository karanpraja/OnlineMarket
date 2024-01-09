import React, { useEffect } from 'react';
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
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/AuthSlice';
import { fetchCartItemsByUserId } from './features/cart/CartAPI';
import { fetchCartItemsByUserIdAsync } from './features/cart/CartSlice';

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
    path:"cart",
    element:<Protected><CartPage/></Protected>
  },
  {path:'checkout',
  element:<Protected><CheckoutPage/></Protected>
  },
  {path:'productdetail/:id',
  element:<ProductDetailPage/>
  }

]);

function App() {
  const user=useSelector(selectLoggedInUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log([user,'app'])
    if(user){
  dispatch(fetchCartItemsByUserIdAsync(user[0].id))
    }
},[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
