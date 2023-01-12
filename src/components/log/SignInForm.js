import React, {useState} from 'react';
import axios from "axios";
import MentionContact from '../MentionContact';
import Logo from '../../images/Logo.png';
import fond from '../../images/fond.jpg';

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

    return (
        
        <div id={"FormuCnx"}>
            <img className='ImageFond' src={fond} alt={"imageFond"}/>
            <MentionContact/>
            <form className='Formulaire' id={"FormuConnex"} onSubmit={handleLogin} action={""}>
                <h1 className='Titre'>Se connecter</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"email"} name={"email"} placeholder={"Email"} onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <div className="email error"/>
                <label htmlFor={"password"}></label>
                <input type={"password"} id={"password"} name={"password"} placeholder={"Mot de Passe"} onChange={(e)=> setPassword(e.target.value)} value={password}/>
                {/* <NavLink to={"/reinitialisationMdp"}>mot de passe oublié</NavLink> */}
                <div className="password error"></div>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
            </form>
            <div className="couleurLogoCnx">
            <img className="imageLogoCnx" src={Logo} alt={"logo"}/>
            </div>
        </div>

    
    );
};

export default SignInForm;