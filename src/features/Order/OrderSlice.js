import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OrderItemsbyUser, resetCart } from './OrderApi';
import { deleteItemFromCart } from '../cart/CartAPI';

const initialState = {
  orderStatus: null,
  status: 'idle',
  resetMessage:null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const OrderItemsbyUserAsync=createAsyncThunk(
  "order/OrderItemsbyUser",async(order)=>{
const response=await OrderItemsbyUser(order)
// const data=await response.json()
return response.data
  }
)

export const resetCartAsync=createAsyncThunk(
  'order/resetCart',async(id)=>{
    const response=await resetCart(id)
    return response.data
  })
export const orderSlice = createSlice({
  name: 'order',
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
      .addCase(OrderItemsbyUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(OrderItemsbyUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orderStatus=action.payload;
      })
      .addCase(resetCartAsync.pending,(state)=>{
        state.status='loading';
      })
      .addCase(resetCartAsync.fulfilled,(state,action)=>{
        state.status='idle';
        state.resetMessage=action.payload
        state.orderStatus=null
        console.log(action.payload)
      })
  },
});

export  const selectOrderStatus=state=>state.order.orderStatus
export default orderSlice.reducer;
