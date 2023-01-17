import '../styles/pages/erreur.css'
import '../styles/pages/accueil.css'
import React from 'react';
import Post from '../components/Post';
import Navigation from '../components/Navigation';
import Personne from "../components/Personne";
import BoutonBasPage from '../components/BoutonBasPage';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";

const Accueil = () => {
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    return (
        <>
            <Navigation/>
            <div className="main-container home">
                <h2>Fil de discussion :</h2>
                <NavLink style={{textDecoration: 'none'}} to="/addpost"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <BoutonBasPage scaleValue="Ajouter un post"></BoutonBasPage>
                </NavLink>
                <Post/>
                <div id="rightBar">
                    {users !== null && (
                        <>
                            <p> Utilisateurs :</p>
                            <ul>
                                {
                                    users.map((user) => <>
                                            <Personne scaleValue={user} key={user._id}/>
                                        </>
                                    )}
                            </ul>
                        </>)}
                </div>
            </div>
        </>
    );
};

export default Accueil
