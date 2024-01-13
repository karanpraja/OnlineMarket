import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Products/ProductSlice';
import authReducer from '../features/auth/AuthSlice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/Order/OrderSlice'
export const store = configureStore({
  reducer: {
    productxyz: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer
  },
});
