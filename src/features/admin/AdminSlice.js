import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { updateProducts } from "./AdminApi"

const initialState={
    updatedProducts:null,
    status:'idle'
}
export const updateProductsAsync=createAsyncThunk('admin/updateProducts',
async(product)=>{
const response=await updateProducts(product)
return response.data
})
export const adminSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(updateProductsAsync.pending,(state)=>{
            state.status='loading'
        })
        .addCase(updateProductsAsync.fulfilled,(action,state)=>{
            state.status='loading'
            state.updatedProducts=action.payload
            console.log('Product Successfully added')
        })
    }

})


export default adminSlice.reducer; 