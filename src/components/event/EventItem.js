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
        !isEmpty(props.users[0]) && setIsLoading(false);
        isEmpty(props.users) ? console.log("loading") : user()
    }, [props.users]);
    return (
        isLoading ? (<div>null</div>) : (<div className='grid-itemCellEvent'> <div className="event">
            {/*<img*/}
            {/*    src={*/}
            {/*        !isEmpty(users[0]) &&*/}
            {/*        users*/}
            {/*            .map((user) => {*/}
            {/*                if (user._id === props.post.posterId){*/}
            {/*                    return user.picture;*/}
            {/*                }*/}
            {/*                else return null;*/}
            {/*            })*/}
            {/*            .join("")*/}
            {/*    }*/}
            {/*    alt="poster-pic"*/}
            {/*/>*/}
            <hr/>
            <div>
                <a>
                <img src={`./event/${props.event.picture}`} alt={"imageEvent"}/>
                <h3>par {userr.nom + " " +userr.prenom}</h3>
                {props.event.titre}
                <p className="date"> {props.event.date}</p>
                </a>
            </div>

            <hr/>
        </div></div>)

    );
};

export default EventItem;