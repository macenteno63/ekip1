import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {isEmpty} from "../utils";
import '../../styles/components/celluleEvent.css';

const EventItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userr,setUserr] = useState([])
    const test = useSelector(state => state.utilisateurs.utilisateurs)
   function user (){
        console.log(props.events)
        props.users.forEach(element => element._id === props.event.posterId && setUserr(element))
        }

    useEffect(() => {
        !isEmpty(props.users) && setIsLoading(false);
        isEmpty(props.users) ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>en chargement</div>) : (<div className='grid-itemCellEvent'> <div className="event">
            <hr/>
            <div>
                <a>
                <img className='imageEvent' src={`./event/${props.event.picture}`} alt={"imageEvent"}/>
                <p>par {userr.prenom + " " + userr.nom}</p>
                {props.event.titre}
                {props.event.posterId}
                <p className="date"> {props.event.date}</p>
                </a>
            </div>

            <hr/>
        </div></div>)

    );
};

export default EventItem;