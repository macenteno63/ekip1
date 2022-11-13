import '../styles/pages/erreur.css'
import '../styles/pages/profil.css'
import '../styles/pages/accueil.css'
import message from '../images/message.png';
import React from 'react';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';
import EditIcon from '@mui/icons-material/Edit';

const Profil = () => {
    return (
    <div>
        <Navigation />
        
        <h2> Profil :</h2>
        <p className='EditIcon'><EditIcon sx={{ fontSize: 40 }}/></p>
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
        <BoutonBasPage className="button" ></BoutonBasPage>
    </div>
    );
};

export default Profil