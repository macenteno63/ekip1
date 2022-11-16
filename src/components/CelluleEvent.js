import React from 'react';
import '../styles/components/celluleEvent.css';
import Event from '../images/TestEvent.jpg';

const CelluleEvent = () => {
    return (
        <div className="grid-itemCellEvent">
            <img className="image" src={Event}/>
            <div className="event">
                <h3>Match FCM-ASSE</h3>
                <a>par Groupe FanFoot</a>
                <a className="date">07/11/22</a>
            </div> 
        </div>
    );
};

export default CelluleEvent;