import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const eventSlice = createSlice({
    name: "event",
    initialState: {
        loading: 'idle',
        event : null
    },
    reducers: {
        getLoading:(state,action)=> {
            if (state.loading === 'idle')
                state.loading = 'loading'
        },
        getEvent:(state,action)=>{
            // if (state.loading === 'pending') {
            //     state.loading = 'idle'
            // }
            state.event = action.payload;
        },
        createEventt:(state,action)=>{

        }
    },
});
export const fetchEvent = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/api/event/`)
      .then((res) => {
        dispatch({ type: "event/getEvent", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const createEvent= (data) =>{
        return (dispatch) => {
            return axios
                .post(`http://localhost:4000/api/event/`, data)
                .then((res) => {
                        dispatch({ type: "event/createEventt", payload: data });
                    })
                }
}

export const { getEvent, getLoading } = eventSlice.actions;
export default eventSlice.reducer;