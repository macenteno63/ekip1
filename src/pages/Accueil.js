import '../styles/pages/erreur.css'
import '../styles/pages/accueil.css'
import Post from '../components/Post';
import Navigation from '../components/Navigation';
import Personne from "../components/Personne";
import BoutonBasPage from '../components/BoutonBasPage';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";

const Accueil = () => {
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    return (
        <div className="grid-containerPost">

            <div>
                <Navigation/>
            </div>

            <div className='container'>
                <h2>Fil de discussion :</h2>

                <div className="scroll-bar">
                    <div className="grid-containerPostTab">
                        <Post/>
                    </div>
                </div>
                <NavLink style={{textDecoration: 'none'}} to="/addpost"
                         className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <BoutonBasPage scaleValue="Ajouter un post"></BoutonBasPage>
                </NavLink>
            </div>

            <div>
                {users !== null && (
                    <div className={"Personne"}>
                        <p> Utilisateur:</p>
                        <ul>
                            {users.map((user) => <button onClick={event => console.log(user.nom)}><Personne scaleValue={user} key={user._id}/></button>)}
                        </ul>
                    </div>)}
            </div>


        </div>
    );
};

export default Accueil