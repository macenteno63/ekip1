import '../styles/pages/erreur.css'
import React, {useState, useEffect} from 'react';
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
        {/*<Groupe/>*/}
        <Personne scaleValue={nom}/>
        <h2>Fil de discussion :</h2>
        <button className="button">
            <span>Ajouter un Post</span>
            <svg viewBox="0 0 13 10" height="20px" width="30px">
                <path d="M1,5 L11,5"></path>
                <path d="M6,5 V11,5"></path>
                <path d="M6,5 V-11,5"></path>
            </svg>
        </button>
    </div>
    );
};

export default Accueil