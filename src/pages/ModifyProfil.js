import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import '../styles/pages/modifyprofil.css'
import {useContext} from "react";
import {UidContext} from "../components/AppContext";

const ModifyProfil = () => {
    const uid = useContext(UidContext);
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const fetchUser = async () =>{
            await fetch(`http://localhost:4000/api/user/${uid}`)
                .then((resp)=>{
                    return resp.json();
                })
                .then((res)=>{
                    setUser(res);
                })
                .catch((err) => console.log(err));
        }
        fetchUser();
    }, [uid])
    return (
        <div className="grid-container">
            <div className="grid-item">
                <Navigation/>
            </div>

            <div className="grid-item">
                <h2>Modifier le profil :</h2>
                    <ul className="liste">
                        <li>Date de naissance : <input type="date"/></li>
                        <li>Metier : <br/> <input className="ProfilCommun" id={"Metier"} placeholder={user.metier}/></li>
                        <li>Ville :<br/> <input className="ProfilCommun" id={"Ville"} placeholder={user.ville}/></li>
                        <li>Biographie : <br/> <input className="ProfilCommun" id={"Biographie"} placeholder={user.bio}/></li>
                        <li>Études / diplôme obtenu :<br/><input className="ProfilCommun" id={"Etudes"} placeholder={user.etudes}/></li>
                        <NavLink style={{ textDecoration: 'none' }} to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                            <li><input className="ProfilCommun" id={"Modifier"} type="button" value="Modifier"/></li>        
                        </NavLink>
                    </ul> 
            </div>
    </div>
    );
};

export default ModifyProfil;