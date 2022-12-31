import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    getUser: (state, action) => {
       state.users=action.payload;
    },
  },
});
export const createUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:4000/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: "users/getUser", payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};
export const { getUser } = usersSlice.actions;
export default usersSlice.reducer;