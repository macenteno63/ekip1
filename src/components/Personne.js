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

{/*{users.map((user) => (*/}
{/*    <li>{user.nom}</li>*/}
{/*))}*/}
export default Personne;