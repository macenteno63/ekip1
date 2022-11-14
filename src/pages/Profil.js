import '../styles/pages/profil.css'
import message from '../images/message.png';
import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import BoutonBasPage from '../components/BoutonBasPage';
import EditIcon from '@mui/icons-material/Edit';
import {useContext} from "react";
import {UidContext} from "../components/AppContext";


const Profil = () => {
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
    <div className={"Profil"}>
        <Navigation />
        {uid ? (

            <div>
                <h2> Profil :</h2>
                <p className='EditIcon'><EditIcon sx={{ fontSize: 40 }}/></p>
                <div className='NomPrenom' id="profil">
                    <p>{user.nom} {user.prenom}</p>
                </div>
                <div className='Age' id="profil">
                    <p>age</p>
                </div>
                <div className='Email' id="profil">
                    <p>{user.email}</p>
                </div>
                <div className='Metier' id="profil">
                    <p>Métier</p>
                </div>
                <div className='Ville' id="profil">
                    <p>Ville</p>
                </div>
                <div className='Biographie' id="profil">
                    <p>Bio</p>
                </div>
                <div className='Formation' id="profil">
                    <p>À étudier : <br />
                        - <br />
                        -
                    </p>
                </div>
                <a className='PhotoProfil'><img src={message}alt=""/></a>
                <BoutonBasPage className="button" ></BoutonBasPage>
            </div>
        ) : (
            <h2>DeConnecté</h2>
        )}
    </div>
    );
};

export default Profil