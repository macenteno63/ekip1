import React, {useEffect, useState} from 'react';
import {isEmpty} from "../utils";
import '../../styles/components/EventItem.css';
import {Link} from 'react-router-dom';

const EventItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr, setUserr] = useState([])

    function user() {
        console.log(props.event)
        props.users.forEach(element => element._id === props.event.posterId && setUserr(element))
    }

    useEffect(() => {
        !isEmpty(props.users) && setIsLoading(false);
        isEmpty(props.users) ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>en chargement</div>) : (
            <div className='grid-block'>
                <Link style={{textDecoration: 'none'}} to={'/signevent'} state={{
                    description: props.event.description,
                    nbplaces: props.event.nbPlaces,
                    titre: props.event.titre,
                    image: props.event.picture,
                    nom: userr.nom + " " + userr.prenom,
                    date: props.event.date
                }} className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <img src={`./event/${props.event.picture}`} alt={"imageEvent"}/>
                    <div className="bottom">
                        <p className="title">{props.event.titre}</p>
                        <div className="grid c2 fr1">
                            <p className="author">par {userr.prenom + " " + userr.nom}</p>
                            <p> {props.event.date.split("-")[2].slice(0, 2) + "/" + props.event.date.split("-")[1] + "/" + props.event.date.split("-")[0]}</p>
                        </div>
                    </div>
                </Link>
            </div>)

    );
};

export default EventItem;
