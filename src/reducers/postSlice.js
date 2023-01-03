import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postSlice = createSlice({
    name: "post",
    initialState: {
        post : null
    },
    reducers: {
        getPost:(state,action)=>{
            state.post = action.payload;
        }
    },
});
export const { getPost } = postSlice.actions;
export default postSlice.reducer;