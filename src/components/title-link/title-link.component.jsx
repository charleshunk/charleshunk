import React from 'react';
import { Link } from 'react-router-dom';

import './title-link.styles.scss';

const TitleLink = ({ to, children }) => {
    return(
        <div className='title-link'>
            <Link to={to} className='title'>
                { children }
            </Link>
        </div>
    )
};

export default TitleLink;