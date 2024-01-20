import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchCartItemsByUserId, updateCart, updateCartUser } from './CartAPI';

const initialState = {
  items: [],
  status: 'idle',
  user:[]
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const addToCartAsync= createAsyncThunk(
  'cart/addToCart',
  async (cart) => {
    const response = await addToCart(cart);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCartItemsByUserIdAsync= createAsyncThunk(
  'cart/fetchItemsByUserId',
  async (user) => {

    const response = await fetchCartItemsByUserId(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateCartAsync= createAsyncThunk(
  'cart/updateCart',
  async (item) => {
    console.log(item)
    const response = await updateCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const deleteItemFromCartAsync= createAsyncThunk(
  'cart/deleteItemFromCartAsync',
  async (id) => {
    console.log('id')
    const response = await deleteItemFromCart(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateCartUserAsync= createAsyncThunk(
  'cart/updateCartUser',
  async (data) => {
    console.log('updateCartUserAsync')
    
    const response = await updateCartUser(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const resetCartItemsAsync=createAsyncThunk('cart/resetCart',
  async()=>{
    const data="reset cart"
return data
  }
)

export const cartSlice = createSlice({
  name: 'cart',
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
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push( action.payload);
      })
      .addCase(fetchCartItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items= action.payload;

      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.items.findIndex(item=>item.id===action.payload.id)
        state.items[index] = action.payload;
        console.log([state.items,'updateCartAsync.fullfilled'])
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1);
      })
      .addCase(updateCartUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.addresses=action.payload
        console.log(state.user)
      })
      .addCase(resetCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=null
        console.log(state.user)
      })

  },
});


export const selectCart = (state) => state.cart.cart;
export const selectItems = (state) => state.cart.items;
export const selectCartUser=(state)=>state.cart.user

export default cartSlice.reducer;
