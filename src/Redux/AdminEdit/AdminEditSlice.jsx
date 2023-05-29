import { createSlice } from "@reduxjs/toolkit";

export const adminEdit=createSlice({
    name:'edit',
    initialState:{
        editId:"",
        editUsername:"",
    },
    reducers:{
        changeEditUser:(state,action)=>{
            state.editId = action.payload.editId
            state.editUsername=action.payload.editUsername
        }
    }
})

export const {changeEditUser} = adminEdit.actions
export default adminEdit.reducer