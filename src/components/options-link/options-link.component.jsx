import React from 'react';
import { Link } from 'react-router-dom';

import './options-link.styles.scss';

const OptionsLink = ({ to, children }) => {
    return(
        <div className='button-marker-pair'>
            <Link to={to} className='options-link-button'>
                { children }
            </Link>
            <div className='options-link-marker'></div>
        </div>
    )
};

export default OptionsLink;