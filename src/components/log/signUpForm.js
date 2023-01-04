import React, {useState} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import MentionContact from '../MentionContact';
import Logo from '../../images/Logo.png';
//require('dotenv').config({path: './.env'})
const SignUpForm = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const nomError = document.querySelector(".nom.error");
        const prenomError = document.querySelector(".prenom.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        await axios({
            method: "post",
            url: `http://localhost:4000/api/user/register`,
            withCredentials: false,
            data: {
                prenom,
                nom,
                email,
                password,
            },
        })
            .then((res) => {
                if (res.data.errors){
                    prenomError.innerHTML = res.data.errors.prenom;
                    nomError.innerHTML = res.data.errors.nom;
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                }else {
                    window.location = "/formulaire";
                }
            })
            .catch((err) => console.log(err));
    };
    return (
    <div id={"FormuIns"}>
        <MentionContact/>
        <form className='Formulaire' id={"FormuInscr"} onSubmit={handleRegister} action={""}>
            <h1>S'inscrire</h1>
            <label htmlFor={"prenom"}></label>
            <input type={"text"} id={"prenom"} placeholder={"Prenom"} onChange={(e)=> setPrenom(e.target.value)} value={prenom}/>
            <div className={"prenom error"}></div>
            <label htmlFor={"nom"}></label>
            <input type={"text"} id={"nom"} placeholder={"Nom"} onChange={(e)=> setNom(e.target.value)} value={nom}/>
            <div className={"nom error"}></div>
            <label htmlFor={"email"}></label>
            <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <div className={"email error"}></div>
            <label htmlFor={"password"}></label>
            <input type={"password"} id={"password"} name={"password"} placeholder={"Mot de Passe"} onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <div className={"password error"}></div>
            <label htmlFor={"boutonSubmit"}></label>
            <input type={"submit"} id={"boutonSubmit"} value={"S'incrire"}/>
        </form>
        <div className="couleurLogoIns">
            <img className="imageLogoIns" src={Logo}/>
        </div>
    </div>
    );
};

export default SignUpForm;