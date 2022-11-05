import React, {useState} from 'react';
import axios from "axios";


const SignInForm = () => {
        const [mail, setMail] = useState("");
        const [password, setPassword] = useState("");

        const handleLogin = (e) => {
            e.preventDefault();
            const emailError = document.querySelector(".email.error");
            const passwordError = document.querySelector(".password.error");
            axios({
                method: "post",
                url: "http://localhost:4000/api/user/login",
                data: {
                    mail,
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
        <div id={"formu"}>
            <form onSubmit={handleLogin} action={""}>
                <h1>Se connecter</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"mail"} name={"mail"} placeholder={"Email"} onChange={(e)=> setMail(e.target.value)} value={mail}/>
                <div className="email error"></div>
                <label htmlFor={"password"}></label>
                <input type={"password"} id={"password"} name={"password"} placeholder={"Mot de Passe"} onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <div className="password error"></div>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
            </form>
        </div>
    );
};

export default SignInForm;