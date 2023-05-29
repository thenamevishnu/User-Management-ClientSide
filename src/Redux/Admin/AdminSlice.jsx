import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    Id:"",
    Username:"",
}

export const adminSlice=createSlice({
    name:'admin',
    initialState:INITIAL_STATE,
    reducers:{
        changeUser:(state,action)=>{
            state.Id = action.payload.Id
            state.Username=action.payload.Username
        }
    }
})

export const {changeUser} =adminSlice.actions
export default adminSlice.reducer