import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteEvent} from '../actions/event.actions';

const EventItem = (props) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{props.scaleValue.name}</span>
            <button onClick={() => dispatch(deleteEvent(props.scaleValue._id))}>Supprimer</button>
        </li>
    );
}

export default EventItem;
