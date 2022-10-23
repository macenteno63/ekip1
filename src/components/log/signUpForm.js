import React from 'react';

const SignUpForm = () => {
    return (
    <div id={"formu"}>
        <form action={""}>
            <h1>S'incrire</h1>
            <label htmlFor={"prenom"}></label>
            <input type={"text"} id={"prenom"} placeholder={"Prenom"}/>
            <label htmlFor={"nom"}></label>
            <input type={"text"} id={"nom"} placeholder={"Nom"}/>
            <label htmlFor={"mail"}></label>
            <input type={"email"} id={"mail"} name={"mail"} placeholder={"Email"}/>
            <label htmlFor={"MDP"}></label>
            <input type={"password"} id={"MDP"} name={"MDP"} placeholder={"Mot de Passe"}/>
            <label htmlFor={"boutonSubmit"}></label>
            <input type={"submit"} id={"boutonSubmit"} value={"S'incrire"}/>
        </form>
    </div>
    );
};

export default SignUpForm;