import '../styles/pages/evenement.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';

const Evenement = () => {
    return (
    <div className="Evenement">
        <grc>

            <gri>
                <Navigation/>
            </gri>

            <gri>
                <h2 className="titre">Évènement :</h2>
                <NavLink style={{ textDecoration: 'none' }} to="/addevenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <p>Ajouter un évènement</p>        
                </NavLink>

                <div class="grid-container2">
                    <div class="grid-item">
                        <img src="../images/event.png"/>
                        <div className="event">
                            <h3>titre</h3>
                            <p className="text">description date</p>
                    
                        </div>
                    </div>
                    <div class="grid-item2">
                        <img src="../images/event.png"/>
                        <div className="event">
                            <h3>titre</h3>
                            <p className="text">description date</p>
                    
                        </div>
                    </div>
                </div>

            </gri>
        
        </grc>
    </div>
    );
};

export default Evenement