import '../styles/pages/evenement.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';
import EventList from '../components/EventList';
import CelluleEvent from '../components/CelluleEvent';

const Evenement = () => {
    return (
    <div className="grid-containerEvent">

        <div>
            <Navigation/>
        </div>

        <div>
            <h2>Évènement :</h2>

            <div className="scroll-bar">
                <div className="grid-containerEventTab">
                    {/* <EventList/> */}
                    <CelluleEvent/>
                    <CelluleEvent/>
                </div>
            </div>
            
            <NavLink style={{ textDecoration: 'none' }} to="/addevenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <BoutonBasPage scaleValue='Ajouter un évenement'/>        
            </NavLink>
        </div>  
    </div>
    );
};

export default Evenement