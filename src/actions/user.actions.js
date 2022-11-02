import axios from 'axios';

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
    // dispatch c'est ce que l'on envoi au reducer
    return (dispatch) => {
        return axios
<<<<<<< HEAD
            // On récupère nos utlisateurs :
            .get(${process.env.REACT_APP_API_URL}api/user/${uid})
            // On les envois ensuite au reducer qui s'en occupe pour les mettre dans le store
=======
        // On récupère nos utlisateurs :
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
        // On les envois ensuite au reducer qui s'en occupe pour les mettre dans le store
>>>>>>> origin/master
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data})
            })
            .catch((err) => console.log(err));
    }
}