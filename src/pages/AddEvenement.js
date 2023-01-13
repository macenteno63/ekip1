import '../styles/pages/addevenement.css'
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {createEvent} from "../reducers/eventSlice";
import {UidContext} from "../components/AppContext";

const AddEvenement = () => {
    const [description,setDescription] = useState("")
    const [titre,setTitre] = useState("")
    const [date, setDate] = useState("")
    const [nbplaces, setNbplaces] = useState("")
    const uid = useContext(UidContext);
    const dispatch = useDispatch()
    const [file,setFile] = useState()
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("description", description);
        data.append("titre", titre)
        data.append("date",date)
        data.append("nbplaces",nbplaces)
        data.append("posterId", uid);
        data.append("file", file);
        console.log(data);
        dispatch(createEvent(data));
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
                    <li><input id={"titre"} placeholder={"Titre"} onChange={(e)=> setTitre(e.target.value)}/></li>
                    <li>Date de l'évenement : <input id={"date"} type="date" onChange={(e)=> setDate(e.target.value)}/></li>
                    <li><input id={"description"} placeholder={"  Description"} onChange={(e)=> setDescription(e.target.value)}/></li>
                    <li><input id={"nbplaces"} placeholder={"  Nombre de places"} onChange={(e)=> setNbplaces(e.target.value)}/></li>
                    <input id='poster' type="submit" value="Envoyer"/>
                    </ul>

                </form>
        </div>
    </div>
    );
};

export default AddEvenement