import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  fetchUserData, loginUser, logoutUser } from './AuthAPI';
import { updateCart } from '../cart/CartAPI';

const initialState = {
  user: null,
  status: 'idle',
  error:null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUserDataAsync= createAsyncThunk(
  'auth/fetchUser',
  async (user) => {
    const response = await fetchUserData(user);
    // The value we return becomes the `fulfilled` action payload
    // const response2=await updateCart()
    return response.data;
  }
);
export const loginUserAsync= createAsyncThunk(
  'auth/fetchLoggedInUserData',
  async (user) => {
    
    const response = await loginUser(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const logoutUserAsync= createAsyncThunk(
  'auth/logoutUser',
  async (user) => {
    
    const response = await logoutUser(user);
    // const data="Logged out successfully"
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = null;
      })


  },
});


export const selectLoggedInUser = (state) => state.auth.user;
export const selectError=(state)=>state.auth.error
export const selectAddresses=(state)=>state.auth.addresses
export default authSlice.reducer;
