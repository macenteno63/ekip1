import '../styles/pages/accueil.css'
import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Personne from '../components/Personne';

const Messagerie = () => {
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
        <h2>Messagerie</h2>
        
    </div>
    );
};

export default Messagerie