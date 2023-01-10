import React, {useContext} from 'react';
// Comme href en HTML deviendront des ancres (a)
import { NavLink } from 'react-router-dom';
import '../styles/components/navigation.css';
import {FaComments, FaUserCircle, FaSignOutAlt, FaBullhorn, FaCommentDots} from "react-icons/fa";
import axios from "axios";
import cookie from "js-cookie";
import {UidContext} from "./AppContext";

const Navigation = () => {
    const uid = useContext(UidContext)
    const removeCookie = (key) => {
        if (window !== "undefined") {
            cookie.remove(key, {expires: 1});
            document.location.reload(true);
        }
    };

    const logout = async () => {
        await axios({
            method: "get",
            url: `http://localhost:4000/api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie("jwt"))
            .catch((err) => console.log(err));
    };
    return (
        <div className="Navigation">
            <ul>
                <NavLink style={{ textDecoration: 'none' }} to="/formulaire" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Formulaire</li>
                    
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <a><FaComments className="IconNav"/></a> 
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        <p className="menu">Accueil</p>
                    </li>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/evenement" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <a><FaBullhorn className="IconNav"/></a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        <p className="menu">Evenement</p>
                    </li>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/messagerie" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <a><FaCommentDots className="IconNav"/></a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        <p className="menu">Messagerie</p>
                    </li>
                </NavLink>
                {/* <NavLink to="/calendrier" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Calendrier</li>
                </NavLink> */}
                <NavLink style={{ textDecoration: 'none' }} to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <a><FaUserCircle className="IconNav"/></a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        <p className="menu">Profil</p>
                    </li>
                </NavLink>
            </ul>
            {uid &&             <div onClick={logout}>
                <logout> <FaSignOutAlt className="IconNav"/> </logout>
            </div>}


        </div>
    );
};


export default Navigation;