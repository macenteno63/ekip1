import '../styles/pages/formulaire.css'
import './ReinitialisationMdp.js'
import React from 'react';
import SignInForm from '../components/log/SignInForm';

const Connexion = () => {
    return (
        <div id={"CentrerFormulaire"}>
            <SignInForm/>
        </div>
    );
};

export default Connexion