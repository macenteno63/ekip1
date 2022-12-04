import '../styles/pages/evenement.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CelluleEvent from '../components/CelluleEvent';
import BoutonBasPage from '../components/BoutonBasPage';

const Evenement = () => {
    return (
    <div className="grid-containerEvent">

        <div>
            <Navigation/>
        </div>

        <div>
            <h2>Évènement :</h2>

            <div className="grid-containerEventTab">
                <CelluleEvent/>
                <CelluleEvent/>
                <CelluleEvent/>
                <CelluleEvent/>

            </div>
            
            <NavLink style={{ textDecoration: 'none' }} to="/addevenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <BoutonBasPage scaleValue='Ajouter un évenement'/>        
            </NavLink>
        </div>  
    </div>
    );
};

export default Evenement