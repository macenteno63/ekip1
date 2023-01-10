import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const postSlice = createSlice({
    name: "post",
    initialState: {
        loading: 'idle',
        post : null
    },
    reducers: {
        getLoading:(state,action)=> {
            if (state.loading === 'idle')
                state.loading = 'loading'
        },
        getPost:(state,action)=>{
            // if (state.loading === 'pending') {
            //     state.loading = 'idle'
            // }
            state.post = action.payload;
        },
        createPostt:(state,action)=>{
            state.push(action.payload)
        }
    },
});
export const fetchPost = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/api/post/`)
      .then((res) => {
        dispatch({ type: "post/getPost", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const createPost= (data) =>{
        return (dispatch) => {
            return axios
                .post(`http://localhost:4000/api/post/`, data)
                .then((res) => {
                        dispatch({ type: "post/createPostt", payload: data });
                    })
                }
}
// export const fetchPost = () => async (dispatch) => {
//   dispatch(getLoading())
//     await axios .get("http://localhost:4000/api/post") .then(res =>dispatch(getPost(res.data)))
//
// }
export const { getPost, getLoading } = postSlice.actions;
export default postSlice.reducer;