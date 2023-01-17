import '../styles/pages/profil.css'
import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";
import UploadImg from "../components/UploadImg";
import {isEmpty} from "../components/utils";

const Profil = () => {
    const user = useSelector(state => state.users.users);
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
    
    // console.log(user);
    return (
    <div>
        <Navigation />
        {user !==null ? (

            <div className='Profil'>
                {/* <p className='EditIcon'><EditIcon sx={{ fontSize: 40 }}/></p> */}
                <div className='NomPrenom' id="profil">
                    <p>{user.nom} {user.prenom}</p>
                </div>
                <div className='Age' id="profil">
                    <p>Age : {user.age}</p>
                </div>
                <div className='Email' id="profil">
                    <p>{user.email}</p>
                </div>
                <div className='Metier' id="profil">
                    <p>Metier : {user.metier}</p>
                </div>
                <div className='Ville' id="profil">
                    <p>Ville : {user.ville}</p>
                </div>
                <div className='Biographie' id="profil">
                    <p>Bio : {user.bio} </p>
                </div>

                { isEmpty(user) ? <p>pas de photo</p>:<a className='PhotoProfil'><img src={user.picture} alt="photo de profil"/></a>}

                <div className='InputImage'>
                    <UploadImg/>
                </div>

                <NavLink style={{ textDecoration: 'none' }} to="/modifyprofil" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                <button className='button' id='boutonProfil'>
                    <span>Modifier le profil</span>
                    <svg width="30" height="30" viewBox="0 0 8 25"> <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg>

                </button>
                </NavLink>
            </div>
        ) : (
            <h2>Deconnecté</h2>
        )}
    </div>
    );
};

export default Profil