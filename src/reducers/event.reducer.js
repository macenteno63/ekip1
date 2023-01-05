import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// On crée une partie d'état 
export const eventsSlice = createSlice({
  // Nom de la partie d'état
  name: "events",
  // Etat initial
  initialState: {
    events : null
},
  // Fonctions reducers qui permettent de réaliser des intéractions avec comme paramètres l'état actuel et l'action que l'on va effectuer sur cet état
  reducers: {
    // On crée un événement
    addEvent: (state, action) => {
      // On crée un nouvel événement
      const newEvent = {
        // On récupère les données de l'action
        posterId: action.payload.posterId,
        titre: action.payload.titre,
        description: action.payload.description,
        date: action.payload.date,
        nbPlaces: action.payload.nbPlaces,
        picture: action.payload.picture,
        inscrits: action.payload.inscrits,
      };
      // On ajoute cet événement à l'état
      state.push(newEvent);
    },
    // On récupère tous les événements
    getEvents: (state, action) => {
      // On met à jour l'état avec les données de l'action
      state = action.payload;
    },
    // On supprime un événement
    deleteEvent: (state, action) => {
      // On filtre l'état pour ne garder que les événements dont l'id est différent de celui de l'action
      state = state.filter((event) => event._id !== action.payload);
      return state;
    },
    // On modifie un événement
    updateEvent: (state, action) => {
      state = state.map((event) => {
        if (event._id === action.payload._id) {
          return action.payload;
        } else {
          return event;
        }
      });
    },
  },
});

export const fetchEvent = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:4000/api/event/`)
      .then((res) => {
        dispatch({ type: "events/getEvents", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// On exporte les actions
export const { addEvent, getEvents, deleteEvent, updateEvent } = eventsSlice.actions;

// On exporte le reducer
export default eventsSlice.reducer;