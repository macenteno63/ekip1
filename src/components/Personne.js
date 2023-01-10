import '../styles/components/personne.css'
import React from 'react';

function Personne(props) {
    const user = props.scaleValue;
    return (
        <div>
                <li>{user.nom}</li>
        </div>
    );
}
export default Personne;