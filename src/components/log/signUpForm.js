import React, {useState} from 'react';
import axios from "axios";
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
                }
            })
            .catch((err) => console.log(err));
    };
    return (
    <div id={"formu"}>
        <form onSubmit={handleRegister} action={""}>
            <h1>S'incrire</h1>
            <label htmlFor={"prenom"}></label>
            <input type={"text"} id={"prenom"} placeholder={"Prenom"} onChange={(e)=> setPrenom(e.target.value)} value={prenom}/>
            <label htmlFor={"nom"}></label>
            <input type={"text"} id={"nom"} placeholder={"Nom"} onChange={(e)=> setNom(e.target.value)} value={nom}/>
            <label htmlFor={"mail"}></label>
            <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} value={email}/>
            <label htmlFor={"MDP"}></label>
            <input type={"password"} id={"password"} name={"password"} placeholder={"Mot de Passe"} onChange={(e)=> setPassword(e.target.value)} value={password}/>
            <div className={"password error"}></div>
            <label htmlFor={"boutonSubmit"}></label>
            <input type={"submit"} id={"boutonSubmit"} value={"S'incrire"}/>
        </form>
    </div>
    );
};

export default SignUpForm;