import {useSelector} from 'react-redux';
import EventItem from './event/EventItem';
import React from 'react';


const EventList = () => {
    const events = useSelector(state => state.events.events);
    return (
        <div>
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
                    </div> :
                    events.map((event) => {
                        return (
                            <EventItem event={event}/>
                        )
                    })}

        </div>
    );
}

export default EventList;