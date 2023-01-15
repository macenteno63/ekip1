import React, {useContext} from 'react';
// Comme href en HTML deviendront des ancres (a)
import {NavLink} from 'react-router-dom';
import '../styles/components/navigation.css';
import {FaBullhorn, FaCommentDots, FaComments, FaSignOutAlt, FaUserCircle} from "react-icons/fa";
import axios from "axios";
import cookie from "js-cookie";
import LogoTransparent from '../images/LogoTransparent.png';
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
            url: `${process.env.REACT_APP_API_URL}/api/user/logout`,
            withCredentials: true,
        })
            .then(() => removeCookie("jwt"))
            .catch((err) => console.log(err));
    };
    return (
        <div className="navigation">
            <img src={LogoTransparent} alt=""/>
            <ul>
                <NavLink style={{textDecoration: 'none'}} to="/formulaire"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li><FaComments/> Formulaire</li>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} to="/accueil"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <FaComments/> Accueil
                    </li>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} to="/evenement"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <FaBullhorn/> Evenement
                    </li>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} to="/messagerie"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <FaCommentDots/> Messagerie
                    </li>
                </NavLink>
                {/* <NavLink to="/calendrier" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li>Calendrier</li>
                </NavLink> */}
                <NavLink style={{textDecoration: 'none'}} to="/profil"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <li className='BoutonNavig'>
                        <FaUserCircle/> Profil
                    </li>
                </NavLink>
            </ul>
            {uid && <div onClick={logout} className={"logout"}><FaSignOutAlt className="IconNav"/></div>}
        </div>
    );
};


export default Navigation;
