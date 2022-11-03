import '../styles/pages/erreur.css'
import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import axios from "axios";
import Personne from "../components/Personne";

const Profil = () => {
    return (
    <div>
        <Navigation/>
        <h1>Profil</h1>
    </div>
    );
};

export default Profil