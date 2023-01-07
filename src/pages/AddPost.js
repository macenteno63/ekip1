import '../styles/pages/addpost.css'
import React, {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import {updateBio, uploadPicture} from "../reducers/user.reducer";
import {useDispatch} from "react-redux";
import {createPost} from "../reducers/postSlice";
import {UidContext} from "../components/AppContext";

const AddPost = () => {
    const [message,setMessage] = useState("")
    const uid = useContext(UidContext);
    const dispatch = useDispatch()
    const [file,setFile] = useState()
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("message", message);
        data.append("posterId", uid);
        data.append("file", file);
        console.log(data);
        dispatch(createPost(data));
    };
    return (
    <div class="grid-container">
        <div class="grid-item">
            <Navigation/>
        </div>

        <div class="grid-item">
           <h2 className="titre">Ajouter un post :</h2>

                <form action="" onSubmit={handlePicture} className="upload-pic">
                    <ul className="liste">
                    <label htmlFor="file">Changer d'image :</label>
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
                        <input type="submit" value="Envoyer" />

                        {/*<NavLink style={{ textDecoration: 'none' }} to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>*/}
                        {/*    <li><input className="ProfilCommun" id={"Modifier"} type="button" value="Modifier" onClick={(e)=>dispatch(createPost(uid,filename,message)}/></li>                </NavLink>*/}
                    </ul>

                </form>

        </div>
        
    </div>
    );
};

export default AddPost