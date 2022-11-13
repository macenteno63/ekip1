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
import axios from "axios";
import cookie from "js-cookie";

const Navigation = () => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1});
        }
    };

    const logout = async () => {
        await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie("jwt"))
            .catch((err) => console.log(err));

        window.location = "/formulaire";
    };
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
                {/* <NavLink to="/calendrier" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Calendrier</li>
                </NavLink> */}
                <NavLink to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><AccountCircleIcon sx={{ fontSize: 40 }}/> Profil</li>
                </NavLink>
            </ul>
            <div onClick={logout}>
                <logout> <ExitToAppIcon sx={{ color: grey[50], fontSize: 40}} /> </logout>
            </div>

        </div>
    );
};


export default Navigation;