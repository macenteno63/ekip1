import React, {useState} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";
import MentionContact from '../MentionContact';


const SignInForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleLogin = (e) => {
            e.preventDefault();
            const emailError = document.querySelector(".email.error");
            const passwordError = document.querySelector(".password.error");
                axios({
                    method: "post",
                    url: "http://localhost:4000/api/user/login",
                    withCredentials: true,
                    data: {
                        email,
                        password,
                    },
                })
                    .then((res) => {
                        console.log(res);
                        if (res.data.errors) {
                            emailError.innerHTML = res.data.errors.email;
                            passwordError.innerHTML = res.data.errors.password;
                        }else {
                            window.location = "/";
                        }
                    })
                    .catch((err) => console.log(err));
            }
            // let test = {
            //     method: "post",
            //     body: {
            //         mail,
            //         password,
            //     }
            // }
            //
            // fetch("http://localhost:4000/api/user/login", test).then((res) => console.log(res)).catch((err)=>console.log(err))

    return (
        
        <div id={"formu"}>
            <MentionContact/>
            <form className='Formu' onSubmit={handleLogin} action={""}>
                <h1>Se connecter</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <div className="email error"/>
                <label htmlFor={"password"}></label>
                <input type={"password"} id={"password"} name={"password"} placeholder={"Mot de Passe"} onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <NavLink to={"/reinitialisationMdp"}>mot de passe oublié</NavLink>
                <div className="password error"></div>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
            </form>
        </div>
    );
};

export default SignInForm;