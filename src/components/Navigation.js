import React from 'react';
import event from '../images/event.png';
import message from '../images/message.png';
// Comme href en HTML deviendront des ancres (a)
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { grey } from '@mui/material/colors';
import MessageIcon from '@mui/icons-material/Message';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ForumIcon from '@mui/icons-material/Forum';

const Navigation = () => {
    return (
        <div className="Navigation">
            <ul>
                <NavLink to="/formulaire" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Formulaire</li>
                    
                </NavLink>
                <NavLink to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><ForumIcon sx={{ fontSize: 40 }}/> Accueil</li>
                </NavLink>
                <NavLink to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><CelebrationIcon sx={{ fontSize: 40 }}/> Evenement</li>
                </NavLink>
                <NavLink to="/messagerie" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><MessageIcon sx={{ fontSize: 40 }}/> Messagerie</li>
                </NavLink>
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><AccountCircleIcon sx={{ fontSize: 40 }}/> Profil</li>
                </NavLink>
            </ul>
            <logout> <ExitToAppIcon sx={{ color: grey[50], fontSize: 40}} /> </logout>
        </div>
    );
};


export default Navigation;