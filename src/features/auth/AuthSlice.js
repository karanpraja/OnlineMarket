import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUserData, fetchUserData } from './AuthAPI';

const initialState = {
  user: null,
  status: 'idle',
  error:null,
  addresses:null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUserDataAsync= createAsyncThunk(
  'counter/fetchUser',
  async (user) => {
    const response = await fetchUserData(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchLoggedInUserDataAsync= createAsyncThunk(
  'counter/fetchLoggedInUserData',
  async (user) => {
    
    const response = await fetchLoggedInUserData(user);
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
      .addCase(fetchLoggedInUserDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(fetchLoggedInUserDataAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
        state.addresses=action.payload.addresses;
        console.log(action.payload.addresses)
      })
  },
});


export const selectLoggedInUser = (state) => state.auth.user;
export const selectError=(state)=>state.auth.error
export const selectAddresses=(state)=>state.auth.addresses
export default authSlice.reducer;
