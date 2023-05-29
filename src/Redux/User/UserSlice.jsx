import { createSlice } from "@reduxjs/toolkit";

export const UserSlice=createSlice({
    name:'user',
    initialState:{
        Id:"",
        Username:"",
        Dp:""
    },
    reducers:{
        updateUser:(state,action)=>{
            state.Username = action.payload.Username
            state.Dp=action.payload.Dp
            state.Id=action.payload.Id
        }
    }
})

export const {updateUser} =UserSlice.actions
export default UserSlice.reducer