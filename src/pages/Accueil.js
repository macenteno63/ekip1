import '../styles/pages/erreur.css'
import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import Groupe from '../components/Groupe';
import Personne from "../components/Personne";

const Accueil = () => {
    const [nom,setNom] = useState([]);
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
    return (
    <div>
        <Navigation/>
        {/*<Groupe/>*/}
        <Personne scaleValue={nom}/>
    </div>
    );
};

export default Accueil