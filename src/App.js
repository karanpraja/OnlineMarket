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
import {   selectLoggedInUser } from './features/auth/AuthSlice';
import { fetchCartItemsByUserIdAsync } from './features/cart/CartSlice';
import OrderPage from './pages/CheckOrderPage';
import { selectProducts } from './features/Products/ProductSlice';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserOrders } from './features/User/UserApi';
import { fetchLoggedInUserDataAsync, fetchLoggedInUserOrdersAsync } from './features/User/UserSlice';
import ForgetPassPage from './pages/ForgetPassPage';
import LogoutPage from './pages/LogoutPage';
import AdminHome from './pages/AdminHome';
import AdminAddProductFormPage from './pages/AddProductPage';

const router = createBrowserRouter([
  {
    path: "/",

    element:
    // ( 
      // <Protected>
    <Home/>    
      //</Protected> 
    // )
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
  },
  {path:'checkorder/:id',
  element:<OrderPage/>
  },
  {
    path:'userorders',
    element:<UserOrderPage/>
  },
  {
    path:'userprofile',
    element:<UserProfilePage/>
  },
  {
    path:'forgotpassword',
    element:<ForgetPassPage/>
  },
  {
    path:'logout',
    element:<LogoutPage/>
  },
  {
    path:'admin',
    element:<Protected><AdminHome/></Protected>
  },
  {
    path:'admin/adminaddproduct/edit/:id',
    element:<Protected><AdminAddProductFormPage/></Protected>
  },
  {
    path:'admin/adminaddproduct',
    element:<Protected><AdminAddProductFormPage/></Protected>
  }


]);

function App() {
  const user=useSelector(selectLoggedInUser)
  const dispatch=useDispatch()
  const items=useSelector(selectProducts)
  useEffect(()=>{
    // console.log([user[0],'app'])
  //   if(user[0]){
  // dispatch(fetchCartItemsByUserIdAsync(user[0][0].id))
  //   }
    // const id=4
    // console.log([user[0],'app'])
    if(user){
      dispatch(fetchLoggedInUserDataAsync(user[0].id))
      dispatch(fetchLoggedInUserOrdersAsync(user[0].id))
      dispatch(fetchCartItemsByUserIdAsync(user[0].id))
    }
  // dispatch(loginUserAsync({email:'karan3@gmail.com',password:'Prajapat@2003'}))

    
},[dispatch,user,items
  // user
])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
