import '../styles/pages/erreur.css'
import '../styles/pages/accueil.css'
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Personne from "../components/Personne";
import BoutonBasPage from '../components/BoutonBasPage';

const Accueil = () => {
    const [nom,setNom] = useState([]);
    useEffect(()=>{
        const fetchNom = async () =>{
            await fetch('http://localhost:4000/api/user/all')
                .then((resp)=>{
                    return resp.json();
                })
                .then((res)=>{
                    setNom(res);
                })
                .catch((err) => console.log(err));
        }
        fetchNom();
    }, [nom])

    return (
    <div>
        <Navigation/>
        <Personne scaleValue={nom}/>
        <h2>Fil de discussion :</h2>
        <BoutonBasPage className="button"></BoutonBasPage>
    </div>
    );
};

export default Accueil