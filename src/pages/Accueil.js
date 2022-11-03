import '../styles/pages/accueil.css'
import React from 'react';
import Navigation from '../components/Navigation';
import Groupe from '../components/Groupe';

const Accueil = () => {
    return (
    <div>
        <Navigation/>
        <Groupe/>
        <h2>Fil de discussion :</h2>
        <button class="button">
            <span>Ajouter un Post</span>
            <svg viewBox="0 0 13 10" height="20px" width="30px">
                <path d="M1,5 L11,5"></path>
                <path d="M6,5 V11,5"></path>
                <path d="M6,5 V-11,5"></path>
            </svg>
        </button>
    </div>
    );
};

export default Accueil