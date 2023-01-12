import React from 'react';
import '../styles/components/celluleEvent.css';
import Event from '../images/TestEvent.jpg';
import {useSelector} from "react-redux";

const CelluleEvent = () => {
    const event = useSelector(state => state.event.event)
    return (
        <div className="grid-itemCellEvent">
            <img className="imageEvent" src={Event} alt={"celluleImg"}/>
            <div className="event">
                <h3>Match FCM-ASSE</h3>
                <p>par Groupe FanFoot</p>
                <p className="date">07/11/22</p>
            </div> 
        </div>
    );
};

export default CelluleEvent;