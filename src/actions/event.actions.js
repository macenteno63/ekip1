import axios from "axios";

export const GET__EVENTS = "GET__EVENTS";

export const getEvents = () => {
    return (dispatch) => {
        return axios
        .get(`http://localhost:4000/api/event/`)
        .then((res) => {
            dispatch({ type: GET__EVENTS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
    }

export const ADD__EVENT = "ADD__EVENT";

export const addEvent = (id) => {
    return (dispatch) => {
        return axios
        .post(`http://localhost:4000/api/event/`, id)
        .then((res) => {
            dispatch({ type: ADD__EVENT, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
    }

export const DELETE__EVENT = "DELETE__EVENT";

export const deleteEvent = (id) => {
    return (dispatch) => {
        return axios
        .delete(`http://localhost:4000/api/event/${id}`)
        .then((res) => {
            dispatch({ type: DELETE__EVENT, payload: id });
        })
        .catch((err) => console.log(err));
    };
    }

export const UPDATE__EVENT = "UPDATE__EVENT";

export const updateEvent = (id) => {
    return (dispatch) => {
        return axios
        .put(`http://localhost:4000/api/event/${id}`)
        .then((res) => {
            dispatch({ type: UPDATE__EVENT, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
    }

export const GET__EVENT = "GET__EVENT";