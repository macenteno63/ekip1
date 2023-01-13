import React, {useEffect, useState} from 'react';
import {isEmpty} from "../utils";
import '../../styles/components/EventItem.css';
import {Link} from 'react-router-dom';

const EventItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr,setUserr] = useState([])
   function user (){
        console.log(props.event)
        props.users.forEach(element => element._id === props.event.posterId && setUserr(element))
        }

    useEffect(() => {
        !isEmpty(props.users) && setIsLoading(false);
        isEmpty(props.users) ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>en chargement</div>) : (<div className='grid-itemCellEvent'> <div className="event">
            
            <div>
                <Link style={{ textDecoration: 'none' }} to={'/signevent'} state= {{description: props.event.description, 
                                                                                    nbplaces: props.event.nbPlaces,
                                                                                    titre: props.event.titre,
                                                                                    image: props.event.picture,
                                                                                    nom: userr.nom + " " + userr.prenom,
                                                                                    date: props.event.date }} className={(nav) => (nav.isActive ? "nav-active" : "")} end> 
                <img className='imageEvent' src={`./event/${props.event.picture}`} alt={"imageEvent"}/>
                <hr/>
                <p>par {userr.prenom + " " + userr.nom}</p>
                {props.event.titre}
                <p className="date"> {props.event.date}</p>  
                <hr/> 
                </Link>
            </div>
            

            
        </div></div>)

    );
};

export default EventItem;