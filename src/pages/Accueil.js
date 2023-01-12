import '../styles/pages/erreur.css'
import '../styles/pages/accueil.css'
import React, {useState} from 'react';
import Post from '../components/Post';
import Navigation from '../components/Navigation';
import Personne from "../components/Personne";
import BoutonBasPage from '../components/BoutonBasPage';
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";

const Accueil = () => {
    const [nom,setNom] = useState([]);
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    // useEffect(()=>{
    //     const fetchNom = async () =>{
    //         await fetch('http://localhost:4000/api/user/all')
    //             .then((resp)=>{
    //                 return resp.json();
    //             })
    //             .then((res)=>{
    //                 setNom(res);
    //             })
    //             .catch((err) => console.log(err));
    //     }
    //     fetchNom();
    // }, [nom])


  // useEffect(() => {
  //   getPostt();
  // }, [dispatch]);
    return (
    <div className="grid-containerPost">
            <Navigation/>

        <div className='container'>
            <h2>Fil de discussion :</h2>
            
            <div className="scroll-bar">
                <div className="grid-containerPostTab">
                    <Post/>
                </div>
            </div>
            <NavLink style={{ textDecoration: 'none' }} to="/addpost" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <BoutonBasPage scaleValue="Ajouter un post"></BoutonBasPage>       
            </NavLink>
        </div>

        <div>
            {users !== null && <Personne scaleValue={users}/>}
        </div>

        
        
        
    </div>
    );
};

export default Accueil