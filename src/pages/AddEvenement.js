import '../styles/pages/addevenement.css'
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {createEvent} from "../reducers/eventSlice";
import {UidContext} from "../components/AppContext";

const AddEvenement = () => {
    const [message,setMessage] = useState("")
    const uid = useContext(UidContext);
    const dispatch = useDispatch()
    const [file,setFile] = useState()
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        // data.append("message", message);
        // data.append("posterId", uid);
        // data.append("file", file);
        console.log(data);
        // dispatch(createPost(data));
        window.location= "/"
    };
    return (
    <div className="grid-container">
        <div class="grid-item">
            <Navigation/>
        </div>

        <div className="grid-item">
            <h2 className="titre">Ajouter un évènement :</h2>
                <form action="" onSubmit={handlePicture} className="upload-pic">
                    <ul className="liste">
                    <label htmlFor="file">Choisir une image :</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <li><input id={"titre"} placeholder={"Titre"}/></li>
                    <li>Date de l'évenement : <input id={"date"} type="date"/></li>
                    <li><input id={"description"} placeholder={"  Description"}/></li>
                    <li><input id={"nbplaces"} placeholder={"  Nombre de places"}/></li>
                    <input id='poster' type="submit" value="Envoyer"/>
                    </ul>

                </form>
        </div>

        <div class="grid-item">
           <h2 className="titre">Ajouter un post :</h2>

                <form action="" onSubmit={handlePicture} className="upload-pic">
                    <ul className="liste">
                    <label htmlFor="file">Choisir une image :</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <br/>
                        <li><input id={"titre"} placeholder={"  Titre"}/></li>
                        <li><input id={"description"} placeholder={"  Description"} onChange={(e)=> setMessage(e.target.value)}/></li>
                        <input type="submit" value="Envoyer"/>

                        {/*<NavLink style={{ textDecoration: 'none' }} to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>*/}
                        {/*    <li><input className="ProfilCommun" id={"Modifier"} type="button" value="Modifier" onClick={(e)=>dispatch(createPost(uid,filename,message)}/></li>                </NavLink>*/}
                    </ul>

                </form>

        </div>
        
    </div>
    );
};

export default AddEvenement