import React, {useState} from 'react';
import axios from "axios";


const SignInForm = () => {
        const [mail, setMail] = useState("");
        const [MDP, setMDP] = useState("");

        const handleLogin = (e) => {
            e.preventDefault();
            const emailError = document.querySelector(".email.error");
            const passwordError = document.querySelector(".password.error");
            axios.get("http://localhost:4000/api/user/getuser")
                .then(function(response){
                    console.log("la requete marche");
                })
        };

    return (
        <div id={"formu"}>
            <form onSubmit={handleLogin} action={""}>
                <h1>Se connecter</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"mail"} name={"mail"} placeholder={"Email"} onChange={(e)=> setMail(e.target.value)} value={mail}/>
                <label htmlFor={"MDP"}></label>
                <input type={"password"} id={"MDP"} name={"MDP"} placeholder={"Mot de Passe"} onChange={(e)=> setMDP(e.target.value)} value={MDP}/>
                <label htmlFor={"MDP"}></label>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
            </form>
        </div>
    );
};

export default SignInForm;