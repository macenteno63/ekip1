import React from 'react';
import '../styles/components/BoutonBasPage.css';

function BoutonBasPage(props) {
    const nom = props.scaleValue;
    return (
        <button className='button'>
            <span>{nom}</span>
            <svg viewBox="0 0 13 10" height="20px" width="39px">
                <path d="M6,5 L16,5"/>
                <path d="M11,5 V11,5"/>
                <path d="M11,5 V-11,5"/>
            </svg>
        </button>
    );
}

export default BoutonBasPage;
