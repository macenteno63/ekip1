import React from "react"
import '../styles/pages/reinitialisationMdp.css'

function ReinitialiserMDP(){
return <div id={"Reinitialiser"}>
                <form className="FormuMDP" method={"POST"}>
                    <h1> Réinitialiser le mot de passe :</h1>
                    <p>Entrez l'adresse e-mail que vous avez utilisée pour vous inscrire à EKIP. Nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
                    <input type={"email"} id={"mail"} placeholder={"Email"}/>
                    <label htmlFor={"MDP"}></label>
                    <input type={"submit"} id={"boutonSubmit"} value={"Se connecter"}/>
                </form>
                <div className="inscription">
                    <p className="text"> Déjà un compte ? </p>
                    {/* href pour le moment à changer si on fait la page */}
                    <p className="inscriptionlien" id={"hover"} href="/formulaire">Connexion</p>
                    
                </div>
        </div>
}
export default ReinitialiserMDP