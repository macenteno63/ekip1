import Formulaire from '../pages/Formulaire.js'
import Erreur from '../pages/Erreur.js'
import Reinit from '../pages/ReinitialisationMdp.js'
import Accueil from '../pages/Accueil.js'
import Profil from '../pages/Profil.js'
import Calendrier from '../pages/Calendrier.js'
import Evenement from '../pages/Evenement.js'
import AddEvenement from '../pages/AddEvenement.js'
import Messagerie from '../pages/Messagerie.js'
import AddPost from '../pages/AddPost.js'
import Contact from '../pages/Contact.js'
import Mentions from '../pages/Mentions.js'
import ModifyProfil from '../pages/ModifyProfil.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {UidContext} from "./AppContext";
import {useDispatch} from "react-redux";
// import { getUser } from '../actions/user.actions'; // reducer on utilise pas
import React, { useEffect, useState } from "react";
import axios from "axios";
import {createUser, getUser} from "../reducers/user.reducer";
import {fetchPost, fetchUsers, getPost} from "../reducers/postSlice";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  const fetchToken = async () => {
    await axios({
      method: "get",
      url: `http://localhost:4000/jwtid`,
      withCredentials: true,
    })
        .then((res) => {
          setUid(res.data);
          console.log(uid);
        })
        .catch(() => {
          console.log("No token");
        });
    if(uid !== null){
      dispatch(createUser(uid));
    }
  };

  useEffect(() => {
    fetchToken();
  },[uid,dispatch]);
// const fetchUser = (uid) =>{
//   axios({
//     method: "get",
//     url: `http://localhost:4000/api/user/${uid}`,
//     withCredentials: true,
//   })
//       .then((res) => {
//         return res.data
//       })
//       .catch((err) => console.log(err));
// }
  return (
      <UidContext.Provider value={uid}>
        <BrowserRouter>
          <Routes>
          <Route path="/formulaire" element={<Formulaire />} />
            {/* # si le chemin est reinitialisationMdp on affiche le composant Reinit */}
            <Route path="/reinitialisationMdp" element={<Reinit />} />
            {/* # si c'est l'accueil du site alors on affiche l'acceuil */}
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/evenement" element={<Evenement />} />
            <Route path="/addevenement" element={<AddEvenement />} />
            <Route path="/messagerie" element={<Messagerie />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
            <Route path="/modifyprofil" element={<ModifyProfil />} />
            {/* # si jamais l'url est inconnu on affiche une erreur 404 */}
            <Route path="*" element={<Erreur />} />
          </Routes>
        </BrowserRouter>
      </UidContext.Provider>
    // ce qui englobe notre application

  )
}

export default App;
