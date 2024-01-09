import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Products/ProductSlice';
import authReducer from '../features/auth/AuthSlice'
import cartReducer from '../features/cart/CartSlice'

export const store = configureStore({
  reducer: {
    productxyz: productReducer,
    auth:authReducer,
    cart:cartReducer
  },
});
