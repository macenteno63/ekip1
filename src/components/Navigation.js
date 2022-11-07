import React from 'react';
import event from '../images/event.png';
import message from '../images/message.png';
// Comme href en HTML deviendront des ancres (a)
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul>
                <NavLink to="/formulaire" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Formulaire</li>
                </NavLink>
                <NavLink to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <div className="mover"></div>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <img className="ImageEvent" src={event} alt="" ></img>
                    <li>Evenement</li>
                </NavLink>
                <NavLink to="/messagerie" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <img className="ImageMessage" src={message} alt=""></img>
                    <li>Messagerie</li>
                </NavLink>
                {/* <NavLink to="/calendrier" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Calendrier</li>
                </NavLink> */}
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Profil</li>
                </NavLink>
            </ul>
        </div>
    );
};


export default Navigation;