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
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {UidContext} from "./AppContext";
import {useDispatch} from "react-redux";
// import { getUser } from '../actions/user.actions'; // reducer on utilise pas
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
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
        .catch((err) => {
          console.log("No token");
        });
    };
    fetchToken();

  });

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
            {/* # si jamais l'url est inconnu on affiche une erreur 404 */}
            <Route path="*" element={<Erreur />} />
          </Routes>
        </BrowserRouter>
      </UidContext.Provider>
    // ce qui englobe notre application

  )
}

export default App;
