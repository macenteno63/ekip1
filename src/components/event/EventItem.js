import React from 'react';
import { useSelector} from "react-redux";

const EventItem = () => {
    const event = useSelector(state => state.eventReducer);
    return (
            <div className="grid-itemCellEvent">
                { event.picture === "undefined" ? <p>pas de photo</p>:<a className='imageEvent'><img src={require(`../${event.picture}`)} alt="photo de l'event"/></a>}
                <div className="event">
                    <h3>{event.titre}</h3>
                    <a>{event.posterId}</a>
                    <a className="date">{event.date}</a>
                </div> 
            </div>
    );
};

export default EventItem;
