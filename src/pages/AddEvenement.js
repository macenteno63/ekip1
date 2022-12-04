import '../styles/pages/addevenement.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AddEvenement = () => {
    return (
    <div className="grid-container">
        <div class="grid-item">
            <Navigation/>
        </div>

        <div className="grid-item">
           <h2>Ajouter un évènement :</h2>
            <ul className="liste">
                <li><input id={"titre"} placeholder={"  Titre"}/></li>
                <li><input id={"date"} type="date"/></li>
                <li><input id={"description"} placeholder={"  Description"}/></li>
                <li><input id={"nbplaces"} placeholder={"  Nombre de places"}/></li>
                <li><input type="file"/></li>
                <NavLink style={{ textDecoration: 'none' }} to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><input id={"poster"} type="button" value="        Poster"/></li>        
                </NavLink>
            </ul> 
        </div>
        
    </div>
    );
};

export default AddEvenement