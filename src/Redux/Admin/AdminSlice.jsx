import { createSlice } from "@reduxjs/toolkit";

export const adminSlice=createSlice({
    name:'admin',
    initialState:{
        adminId:"",
        adminUsername:"",
    },
    reducers:{
        changeUser:(state,action)=>{
            state.adminId = action.payload.adminId
            state.adminUsername=action.payload.adminUsername
        }
    }
})

export const {changeUser} =adminSlice.actions
export default adminSlice.reducer