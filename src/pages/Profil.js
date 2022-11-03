import '../styles/pages/erreur.css'
import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import axios from "axios";

const Profil = () => {
    const [nom,setNom] = useState([]);
    let test = document.getElementById("test");
     // axios.get('http://localhost:4000/api/user/all')
     //     .then((res) =>{
     //        console.log(res);
     //        nom = res;
     //        test = nom[1];
     //        console.log(test);
     // })
    fetch('http://localhost:4000/api/user/all')
        .then((resp)=>{
            return resp.json();
        })
        .then((res)=>{
            setNom(res);
    });
    nom.forEach((plant) => console.log(plant.nom));
    return (
    <div>
        <Navigation/>
        <h1>Profil</h1>
        <ul>
            {nom.map((user) => (
                <li>{user.nom}</li>
            ))}
        </ul>
    </div>
    );
};

export default Profil