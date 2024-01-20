import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserData, fetchLoggedInUserOrders, fetchUpdateLoggedInUserData } from "./UserApi";
const initialState={
    userOrders:null,
    status:'idle',
    userInfo:null,
    // userUpdate:null
};

export const fetchLoggedInUserOrdersAsync=createAsyncThunk(
    'user/fetchLoggedInUserOrders',
    async(userId)=>{
            const response=await fetchLoggedInUserOrders(userId)
            return response.data
        }
        );
export const fetchLoggedInUserDataAsync=createAsyncThunk(
    'user/fetchLoggedInUserData',
async(userId)=>{
const  response= await fetchLoggedInUserData(userId)
console.log(response.data)
return response.data
});
export const fetchUpdateLoggedInUserDataAsync=createAsyncThunk(
    'user/fetchUpdateLoggedInUserData',
async(user)=>{
const  response= await fetchUpdateLoggedInUserData(user)
return response.data
});


export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchLoggedInUserOrdersAsync.pending,(state)=>{
       state.status='loading'
        })
        .addCase(fetchLoggedInUserOrdersAsync.fulfilled,(state,action)=>{
        state.status='idle'
        state.userOrders=action.payload
        })
        .addCase(fetchLoggedInUserDataAsync.pending,(state)=>{
            state.status='loading'
         })
         .addCase(fetchLoggedInUserDataAsync.fulfilled,(state,action)=>{
             state.status='idle'
             state.userInfo=action.payload
             })
             .addCase(fetchUpdateLoggedInUserDataAsync.pending,(state)=>{
                state.status='loading'
             })
             .addCase(fetchUpdateLoggedInUserDataAsync.fulfilled,(state,action)=>{
                 state.status='idle'
                 state.userInfo=action.payload
                 })
    }

})
export const selectOrderbyLoggedInUser=state=>state.user.userOrders
export const selectUserInfo=state=>state.user.userInfo
export default userSlice.reducer;