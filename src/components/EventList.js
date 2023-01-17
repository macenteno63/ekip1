import {useSelector} from 'react-redux';
import EventItem from './event/EventItem';
import React from 'react';


const EventList = () => {
    const events = useSelector(state => state.event.event)
    const users = useSelector(state => state.utilisateurs.utilisateurs);
    return (
        <>
                {events === null ? <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <grid></grid>
                    </div> :
                    events.map((event) => {
                                return <EventItem event={event} users={users} key={event._id}/>;
                    })}
        </>
    );
}

export default EventList;