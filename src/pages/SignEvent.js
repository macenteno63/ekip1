import Navigation from '../components/Navigation';
import React from 'react';
import { useLocation } from 'react-router-dom';


const SignEvent = () => {
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
            <div className="main-container">
                <h1>Détail de l'évènement</h1>
                <p>S'inscrire à un événement</p>
                <p className="detail-title">Description</p>
                <p className="label">{description}</p>
                <p className="detail-title">Nombre de place</p>
                <p>{nbplaces}</p>
                <p className="detail-title">Nom</p>
                <p>{nom}</p>
                <p className="detail-title">Image </p>
                <img className='imageEvt' src={`./event/${image}`} alt='ImageEvent'/>
                <p className="detail-title">Titre</p>
                <p>{titre}</p>
                <p className="detail-title">Date</p>
                <p>{date}</p>
            </div>

        </div>
    );
};

export default SignEvent;