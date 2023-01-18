import '../styles/components/personne.css'
import React from 'react';
import Popup from "reactjs-popup";

function Personne(props) {
    const user = props.scaleValue;
    return (
        <Popup trigger={<li>{user.nom}</li>}
               position={["bottom center", "bottom right", "bottom left"]}
               closeOnDocumentClick>
            <div>
                <p>{user.email}</p>
                <img src={user.picture} alt={"pp navigation"}/>
            </div>
        </Popup>
    );
}

export default Personne;
