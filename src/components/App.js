import Formulaire from '../pages/Formulaire.js'
import Erreur from '../pages/Erreur.js'
import Reinit from '../pages/ReinitialisationMdp.js'
import Accueil from '../pages/Accueil.js'
import Profil from '../pages/Profil.js'
import Calendrier from '../pages/Calendrier.js'
import Evenement from '../pages/Evenement.js'
import Messagerie from '../pages/Messagerie.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import { getUser } from '../actions/user.actions';
// import React, { useEffect, useState } from "react";
// import axios from "axios";

const App = () => {
  // const [uid, setUid] = useState(null);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     await axios({
  //       method: "get",
  //       url: `${process.env.REACT_APP_API_URL}jwtid`,
  //       withCredentials: true,
  //     })
  //       .then((res) => {
  //         setUid(res.data);
  //       })
  //       .catch((err) => console.log("No token"));
  //   };
  //   fetchToken();

  //   if (uid) dispatch(getUser(uid));
  // }, [uid, dispatch]);

  return (
    // ce qui englobe notre application
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
        <Route path="/messagerie" element={<Messagerie />} />
        {/* # si jamais l'url est inconnu on affiche une erreur 404 */}
        <Route path="*" element={<Erreur />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
