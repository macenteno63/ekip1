import Navigation from '../components/Navigation';
import React from 'react';
import { useLocation } from 'react-router-dom';


const SignEvent = (props) => {
const location = useLocation();
console.log(location.state.nbplaces)
const description = location.state.description
const nbplaces = location.state.nbplaces
const nom = location.state.nom
const image = location.state.image
const titre = location.state.titre
const date = location.state.date
    return (
       <div>
            <Navigation/>
            <h2>S'inscrire à un événement</h2>
            <h2>descri :{description}</h2>
            <h2>nbplaces :{nbplaces}</h2>
            <h2>nom : {nom}</h2>
            <h2>image : {image}</h2>
            <h2>titre :{titre}</h2>
            <h2>date :{date}</h2>

        </div>
    );
};

export default SignEvent;