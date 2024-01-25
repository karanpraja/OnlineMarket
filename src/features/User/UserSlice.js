import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserData ,fetchUpdateLoggedInUserData } from "./UserApi";
const initialState={
    status:'idle',
    userInfo:null,
};


export const fetchLoggedInUserDataAsync=createAsyncThunk(
    'user/fetchLoggedInUserData',
async(userId)=>{
const  response= await fetchLoggedInUserData(userId)
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
        builder
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
export const selectUserInfo=state=>state.user.userInfo
export default userSlice.reducer;