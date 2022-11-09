import '../styles/pages/erreur.css'
import '../styles/pages/profil.css'
import message from '../images/message.png';
import React from 'react';
import Navigation from '../components/Navigation';

const Profil = () => {
    return (
    <div>
        <Navigation />
        
        <h2> Profil :</h2>
        
        <div className='NomPrenom' id="profil">
            <p>Nom Prenom</p>
        </div>
        <div className='Age' id="profil">
            <p>Age</p>
        </div>
        <div className='Email' id="profil">
            <p>Email</p>
        </div>
        <div className='Metier' id="profil">
            <p>Métier</p>
        </div>
        <div className='Ville' id="profil">
            <p>Ville</p>
        </div>
        <div className='Biographie' id="profil">
            <p>Bio</p>
        </div>
        <div className='Formation' id="profil">
            <p>À étudier : <br />
                - <br />
                -
            </p>
        </div>
        <a className='PhotoProfil'><img src={message}alt=""/></a>
        <button className='BoutonProfil'> Modifier le profil </button>
    </div>
    );
};

export default Profil