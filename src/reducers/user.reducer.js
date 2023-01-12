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
      uploadPicture: (state,action)=>{
        state.users.picture = action.payload;
      },
      modifyProfile: (state,action)=>{
        state.users.bio = action.payload.bio;
        state.users.ville = action.payload.ville;
        state.users.metier = action.payload.metier;
        state.users.age = action.payload.age;
      }
  },
});
export const createUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/api/user/${uid}`)
            .then((res) => {
                dispatch({ type: "users/getUser", payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};
export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/upload`, data)
      .then((res) => {
          return axios
            .get(`${process.env.REACT_APP_API_URL}/api/user/${id}`)
            .then((res) => {
              dispatch({ type: "users/uploadPicture", payload: res.data.picture });
            });
      })
      .catch((err) => console.log(err));
  };
};
export const updateBio = (userId, bio, metier, ville,age) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/api/user/` + userId,
      data: { bio,metier,ville,age },
    })
      .then((res) => {
          let action ={
              bio: bio,
              metier :metier,
              ville : ville,
              age : age
          }
        dispatch({ type: "users/modifyProfile", payload: action });
      })
      .catch((err) => console.log(err));
  };
};
export const { getUser,modifyProfile } = usersSlice.actions;
export default usersSlice.reducer;