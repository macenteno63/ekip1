import React from 'react';
import {useSelector} from 'react-redux';
import EventItem from './EventItem';

const EventList = (props) => {
    const events = useSelector(state => state.events);
    return (
        <ul>
            {events.map(event => <EventItem key={event._id} scaleValue={event} />)}
        </ul>
    );
}

export default EventList;