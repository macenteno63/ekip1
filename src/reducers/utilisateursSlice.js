import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const utilisateursSlice = createSlice({
    name: "utilisateurs",
    initialState: {
        utilisateurs: null,
  },
    reducers:{
        getAll:(state,action)=>{
            state.utilisateurs = action.payload;
        }
    }
});

export const fetchUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/all`)
      .then((res) => {
        dispatch({ type: "utilisateurs/getAll", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
export const { getAll } = utilisateursSlice.actions;
export default utilisateursSlice.reducer;