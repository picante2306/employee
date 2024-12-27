import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userslice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        adduser:(state,action)=>{
           state.push(action.payload)
        }
    }
})

export const {adduser} = userslice.actions;
export default userslice.reducer;