import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    Id:"",
    Username:"",
}

export const adminEdit=createSlice({
    name:'edit',
    initialState:INITIAL_STATE,
    reducers:{
        changeEditUser:(state,action)=>{
            state.Id = action.payload.Id
            state.Username=action.payload.Username
        }
    }
})

export const {changeEditUser} = adminEdit.actions
export default adminEdit.reducer