import '../styles/pages/addevenement.css'
import '../styles/pages/erreur.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Grid } from '@mui/material';

const AddEvenement = () => {
    return (
    <div>
        <Navigation/>
        <h2>Ajouter un évènement :</h2>
        <ul className='liste'>
            <li><input className="titre" id={"titre"} placeholder={"Titre"}/></li>
            <li><input id={"date"} placeholder={"Date"}/></li>
            <li><input id={"description"} placeholder={"Description"}/></li>
            <li><input id={"nbplaces"} placeholder={"Nombre de places"}/></li>
            <li><input id={"joindreimg"} placeholder={"Joindre une image"}/></li>
        <NavLink style={{ textDecoration: 'none' }} to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
            <li>Poster</li>        
        </NavLink>
        </ul>
        
    </div>
    );
};

export default AddEvenement