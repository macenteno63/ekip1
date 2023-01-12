import '../styles/pages/addpost.css'
import React, {useContext, useState} from 'react';
import Navigation from '../components/Navigation';
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
        window.location= "/"
    };
    return (
    <div className="grid-container">
        <div className="grid-item">
            <Navigation/>
        </div>

        <div className="grid-item">
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
                        <li><input id={"message"} placeholder={"  Message"} onChange={(e)=> setMessage(e.target.value)}/></li>
                        <input id='poster' type="submit" value="Envoyer"/>

                        {/*<NavLink style={{ textDecoration: 'none' }} to="/accueil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>*/}
                        {/*    <li><input className="ProfilCommun" id={"Modifier"} type="button" value="Modifier" onClick={(e)=>dispatch(createPost(uid,filename,message)}/></li>                </NavLink>*/}
                    </ul>

                </form>

        </div>
        
    </div>
    );
};

export default AddPost