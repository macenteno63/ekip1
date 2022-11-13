import React from 'react';
import '../styles/components/BoutonBasPage.css'

const BoutonBasPage = ({className}) => {
    return (
        <div>
            <button className={className}>
            <span>Ajouter un Post</span>
            <svg viewBox="0 0 13 10" height="20px" width="39px">
                <path d="M6,5 L16,5"></path>
                <path d="M11,5 V11,5"></path>
                <path d="M11,5 V-11,5"></path>
            </svg>
        </button>
        </div>
    );
};

export default BoutonBasPage;