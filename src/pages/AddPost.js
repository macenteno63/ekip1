import '../styles/pages/addpost.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const AddPost = () => {
    return (
    <div class="grid-container">
        <div class="grid-item">
            <Navigation/>
        </div>

        <div class="grid-item">
           <h2 className="titre">Ajouter un post :</h2>
            <ul className="liste">
                <li><input id={"titre"} placeholder={"  Titre"}/></li>
                <li><input id={"description"} placeholder={"  Description"}/></li>
                
                <NavLink style={{ textDecoration: 'none' }} to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><input id={"poster"} type="button" value="        Poster"/></li>        
                </NavLink>
            </ul> 
        </div>
        
    </div>
    );
};

export default AddPost