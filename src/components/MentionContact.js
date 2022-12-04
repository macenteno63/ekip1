import React from 'react';
// Comme href en HTML deviendront des ancres (a)
import '../styles/components/mentioncontact.css';
import { NavLink } from 'react-router-dom';


const MentionContact = () => {
    return (
        <div className="MentionContact">
        <ul>
            <NavLink style={{ textDecoration: 'none' }} to="/mentions" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <li>
                    <p>Mentions légales</p>
                </li>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <li>
                    <p>Contact</p>
                </li>
            </NavLink>
        </ul>
    </div>
    );
};

export default MentionContact;