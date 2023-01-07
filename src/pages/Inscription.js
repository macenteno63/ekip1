import '../styles/pages/formulaire.css'
import './ReinitialisationMdp.js'
import React from 'react';
import SignUpForm from '../components/log/signUpForm';

const Inscription = () => {
    return (
        <div id={"CentrerFormulaire"}>
            <SignUpForm/>
        </div>
    );
};

export default Inscription