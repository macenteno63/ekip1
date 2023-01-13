import React, {useState} from 'react';
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import '../styles/pages/modifyprofil.css'
import {useDispatch, useSelector} from "react-redux";
import {updateBio} from "../reducers/user.reducer";

const ModifyProfil = () => {
    const user = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    const [bio,setBio] = useState(user.bio);
    const [metier,setMetier] = useState(user.metier);
    const [ville,setVille] = useState(user.ville);
    const [age,setAge] = useState(user.age);
    // useEffect(()=>{
    //     const fetchUser = async () =>{
    //         await fetch(`http://localhost:4000/api/user/${uid}`)
    //             .then((resp)=>{
    //                 return resp.json();
    //             })
    //             .then((res)=>{
    //                 setUser(res);
    //             })
    //             .catch((err) => console.log(err));
    //     }
    //     fetchUser();
    // }, [uid])
    return (
        <div className="grid-container">
            <div className="grid-item">
                <Navigation/>
            </div>

            <div className="grid-item">
                <h2>Modifier le profil :</h2>
                    <ul className="liste">
                        <li>age : <input type="number" min={0} max={100} defaultValue={age} onChange={(e)=> setAge(e.target.value)}/></li>
                        <li>Metier : <br/> <input className="ProfilCommun" id={"Metier"} defaultValue={metier} onChange={(e)=> setMetier(e.target.value)}/></li>
                        <li>Ville :<br/> <input className="ProfilCommun" id={"Ville"} defaultValue={ville} onChange={(e)=> setVille(e.target.value)}/></li>
                        <li>Biographie : <br/> <textarea className="ProfilCommun" id={"Biographie"} defaultValue={bio} onChange={(e)=> setBio(e.target.value)}/></li>
                        <NavLink style={{ textDecoration: 'none' }} to="/profil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                            <li><input className="ProfilCommun" id={"Modifier"} type="button" value="Modifier" onClick={(e)=>dispatch(updateBio(user._id,bio,metier,ville,age))}/></li>

                        </NavLink>
                    </ul>
            </div>
    </div>
    );
};

export default ModifyProfil;