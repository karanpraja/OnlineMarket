import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { OrderItemsbyUser, UpdateOrders, fetchAllOrders, fetchLoggedInUserOrders, resetCart } from './OrderApi';

const initialState = {
  Orders:[],
  orderByUser: null,
  status: 'idle',
  resetMessage:null,
  totalOrders:0
  
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const OrderItemsbyUserAsync=createAsyncThunk(
  "order/OrderItemsbyUser",async(order)=>{
    console.log(order)
const response=await OrderItemsbyUser(order)
// const data=await response.json()
return response.data
  }
)
export const fetchLoggedInUserOrdersAsync=createAsyncThunk(
  'order/fetchLoggedInUserOrders',
  async()=>{
          const response=await fetchLoggedInUserOrders()
          return response.data
      }
      );

export const resetCartAsync=createAsyncThunk(
  'order/resetCart',async()=>{
    const response=await resetCart()
    return response.data
  })
  export const fetchAllOrdersAsync=createAsyncThunk(
    
    'order/fetchAllOrders',async({sort,pagination})=>{
      const response=await fetchAllOrders({sort,pagination})
      return response.data
    })
    export const UpdateOrdersAsync=createAsyncThunk(
      'order/updateOrders',async(order)=>{
        const response=await UpdateOrders(order)
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
    .addCase(fetchLoggedInUserOrdersAsync.pending,(state)=>{
      state.status='loading'
       })
       .addCase(fetchLoggedInUserOrdersAsync.fulfilled,(state,action)=>{
       state.status='idle'
       state.Orders=action.payload
       })
      .addCase(OrderItemsbyUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(OrderItemsbyUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orderByUser=action.payload;
      })
      .addCase(resetCartAsync.pending,(state)=>{
        state.status='loading';
      })
      .addCase(resetCartAsync.fulfilled,(state,action)=>{
        state.status='idle';
        state.resetMessage=action.payload
        // state.orderByUser=null
        console.log(action.payload)
      }).addCase(fetchAllOrdersAsync.pending,(state)=>{
        state.status='loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled,(state,action)=>{
        state.status='idle';
        state.Orders=action.payload.Orders
        state.totalOrders=action.payload.totalOrders
        // state.resetMessage=action.payload
        // state.orderByUser=null
        // console.log(action.payload)
      }).addCase(UpdateOrdersAsync.pending,(state)=>{
        state.status='loading';
      })
      .addCase(UpdateOrdersAsync.fulfilled,(state,action)=>{
        state.status='idle';
        console.log(action.payload)
        const index=state.Orders.findIndex(order=>order.id===action.payload.id)
        state.Orders[index]=action.payload
        
        // state.Orders=action.payload.Orders
        // state.totalOrders=action.payload.totalOrders
        // state.resetMessage=action.payload
        // state.orderByUser=null
        // console.log(action.payload)
      })
  },
});
export const selectOrderbyLoggedInUser=state=>state.order.Orders
export  const selectOrderStatus=state=>state.order.orderByUser
export const selecttotalOrders=state=>state.order.totalOrders
export default orderSlice.reducer;
