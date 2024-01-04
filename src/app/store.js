import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Products/ProductSlice';

export const store = configureStore({
  reducer: {
    productxyz: productReducer,
  },
});
