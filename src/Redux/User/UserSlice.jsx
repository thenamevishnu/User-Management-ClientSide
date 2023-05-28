import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    Id:"",
    Username:"",
    Dp:""
}

export const UserSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
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