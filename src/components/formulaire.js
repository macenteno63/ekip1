import './formulaire.css'
import { useState } from 'react'
function click() {
    console.log("fkldjfks");
}

function Formulaire(){
    let [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
            <div id={"formu"}>
                <form method={"POST"}>
                    <h1>Inscription</h1>
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
                    <p onClick={() => setIsOpen(false)} >connexion</p>
                </form>
            </div>

    ) : (
        <div id={"formu"}>
            <form method={"POST"}>
                <h1>Connexion</h1>
                <label htmlFor={"mail"}></label>
                <input type={"email"} id={"mail"} placeholder={"Email"}/>
                <label htmlFor={"MDP"}></label>
                <input type={"password"} id={"MDP"} placeholder={"Mot de Passe"}/>
                <label htmlFor={"boutonSubmit"}></label>
                <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
                <p onClick={() => setIsOpen(true)} >inscription</p>
            </form>
        </div>
    )
}

export default Formulaire