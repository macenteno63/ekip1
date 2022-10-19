import '../styles/pages/formulaire.css'
import './ReinitialisationMdp.js'
import { useState } from 'react'

function Formulaire(){
    let [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
            <div id={"formuIns"}>
                <form method={"POST"}>
                    <h1> Inscription</h1>
                    <label htmlFor={"prenom"}></label>
                    <input type={"text"} id={"prenom"} placeholder={"Prenom"}/>
                    <label htmlFor={"nom"}></label>
                    <input type={"text"} id={"nom"} placeholder={"Nom"}/>
                    <label htmlFor={"mail"}></label>
                    <input type={"email"} id={"mail"} placeholder={"Email"}/>
                    <label htmlFor={"MDP"}></label>
                    <input type={"password"} id={"MDP"} placeholder={"Mot de Passe"}/>
                    <label htmlFor={"boutonSubmit"}></label>
                    <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
                </form>
                <div className="inscription">
                    <a className="text"> Déjà un compte ? </a>
                    <a className="inscriptionlien" id={"hover"} onClick={() => setIsOpen(false)} >Connexion</a>
                    <button onclick="ReinitialiserMDP()">Button</button> 
                </div>
            </div>

    ) : (
        <div id={"formu"}>
            <form method={"POST"}>
                <h1>Se connecter</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"mail"} placeholder={"Email"}/>
                <label htmlFor={"MDP"}></label>
                <input type={"password"} id={"MDP"} placeholder={"Mot de Passe"}/>
                <label htmlFor={"boutonSubmit"}></label>
                <p className="mdp" onClick={() => setIsOpen(true)} >Mot de passe oublié ?</p>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
            </form>
            <nav className="inscription">
                <a className="text"> Pas encore de compte ? </a>
                <a className="inscriptionlien" id={"hover"} onClick={() => setIsOpen(true)} > S'inscrire </a>
            </nav>
        </div>
    )
}

export default Formulaire