import '../styles/pages/common.css'
import '../styles/pages/grid.css'
import React from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';
import EventList from '../components/EventList';

const Evenement = () => {
    return (
        <>
            <Navigation/>
            <div className="main-container">
                <h2>Évènement :</h2>
                <NavLink style={{textDecoration: 'none'}} to="/addevenement"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <BoutonBasPage scaleValue='Ajouter un évenement'/>
                </NavLink>
                <div className="grid c2 p2">
                    <EventList/>
                </div>
            </div>
        </>
    );
};

export default Evenement
