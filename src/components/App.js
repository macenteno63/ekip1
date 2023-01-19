import Formulaire from '../pages/Formulaire.js'
import Erreur from '../pages/Erreur.js'
import Reinit from '../pages/ReinitialisationMdp.js'
import Accueil from '../pages/Accueil.js'
import Profil from '../pages/Profil.js'
import Calendrier from '../pages/Calendrier.js'
import Evenement from '../pages/Evenement.js'
import SignEvent from '../pages/SignEvent.js'
import AddEvenement from '../pages/AddEvenement.js'
import Messagerie from '../pages/Messagerie.js'
import AddPost from '../pages/AddPost.js'
import Contact from '../pages/Contact.js'
import Mentions from '../pages/Mentions.js'
import ModifyProfil from '../pages/ModifyProfil.js'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UidContext} from "./AppContext";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {createUser} from "../reducers/user.reducer";

const App = () => {
    const [uid, setUid] = useState(null);
    const dispatch = useDispatch();
    const fetchToken = async () => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/jwtid`,
            withCredentials: true,
        })
            .then((res) => {
                setUid(res.data);
                console.log(uid);
            })
            .catch(() => {
                console.log("No token");
            });
        if (uid !== null) {
            dispatch(createUser(uid));
        }
    };

    useEffect(() => {
        fetchToken();
    }, [uid, dispatch]);
    return (
        <UidContext.Provider value={uid}>
            <BrowserRouter>
                {uid === null ?
                    <Routes>
                        <Route path="*" element={<Formulaire/>}/>
                    </Routes> :
                    <Routes>
                        <Route path="/" element={<Accueil/>} exact/>
                        {/* # si le chemin est reinitialisationMdp on affiche le composant Reinit */}
                        <Route path="/reinitialisationMdp" element={<Reinit/>}/>
                        {/* # si c'est l'accueil du site alors on affiche l'acceuil */}
                        <Route path="/accueil" element={<Accueil/>}/>
                        <Route path="/profil" element={<Profil/>}/>
                        <Route path="/calendrier" element={<Calendrier/>}/>
                        <Route path="/evenement" element={<Evenement/>}/>
                        <Route path="/signevent" element={<SignEvent/>}/>
                        <Route path="/addevenement" element={<AddEvenement/>}/>
                        <Route path="/messagerie" element={<Messagerie/>}/>
                        <Route path="/addpost" element={<AddPost/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/mentions" element={<Mentions/>}/>
                        <Route path="/modifyprofil" element={<ModifyProfil/>}/>
                        {/* # si jamais l'url est inconnu on affiche une erreur 404 */}
                        <Route path="*" element={<Erreur/>}/>
                        <Route path="/formulaire" element={<Formulaire/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </UidContext.Provider>
        // ce qui englobe notre application
    )
}

export default App;
