import React from 'react';
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
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Evenement</li>
                </NavLink>
                <NavLink to="/groupe" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Groupe</li>
                </NavLink>
                <NavLink to="/messagerie" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Messagerie</li>
                </NavLink>
                <NavLink to="/calendrier" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Calendrier</li>
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Profil</li>
                </NavLink>
            </ul>
        </div>
    );
};


export default Navigation;