import { GET_USER } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action){
    // Quel est le type d'action ?
    switch(action.type){
    // Ici GET_USER
        case GET_USER:
        // On inrémente toute la data récupérée dans le initialState
           return action.payload; 
    // Par defaut il retourne l'état
        default :
            return state;
    }
}