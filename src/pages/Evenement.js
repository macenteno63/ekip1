import '../styles/pages/evenement.css'
import '../styles/pages/erreur.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';

const Evenement = () => {
    return (
    <div>
        <Navigation/>

        <NavLink style={{ textDecoration: 'none' }} to="/addevenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Add Event</li>
                    
        </NavLink>
        <BoutonBasPage scaleValue="Ajouter un évenement"></BoutonBasPage>
    </div>
    );
};

export default Evenement