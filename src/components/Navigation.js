import React from 'react';
// Comme href en HTML deviendront des ancres (a)
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul>
                <NavLink to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Profil</li>
                </NavLink>
            </ul>
        </div>
    );
};


export default Navigation;