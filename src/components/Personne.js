import '../styles/components/personne.css'
import React from 'react';
import Popup from "reactjs-popup";

function Personne(props) {
    const user = props.scaleValue;
    return (
        <div>
            <Popup trigger={<li>{user.nom}</li>}
                   position={["bottom center", "bottom right", "bottom left"]}
                   closeOnDocumentClick>
                <div>{user.email}</div>
            </Popup>
        </div>
    );
}
export default Personne;