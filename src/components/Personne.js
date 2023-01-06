import '../styles/components/personne.css'
import React from 'react';

function Personne(props) {
    const nom = props.scaleValue;
    return (
        <div className={"Personne"}>
            
            <ul>
                <p>Utilisateurs :</p>
                {nom.map((user) => (
                    <li>{user.nom}</li>
                ))}
            </ul>
        </div>
    );
}


export default Personne;