import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './title-link.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

const TitleLink = ({ titleA, titleB, to, children }) => {
    
    const { colourScheme } = useContext(ToggleContext);

    let styleTitle = {
        color: colourScheme ? '#333' : 'white'
    };

    let styleAlternative = {
        color: colourScheme ? 'orangered' : '#61BBDF'
    };

    return(
        <div className='title-link'>
            <div className='title-container'>
                <Link to={to} className='actual-title' style={styleTitle}>
                    { children }
                </Link>
                <Link to={to} className='actual-title-alternative' style={styleAlternative}>
                    { children }
                </Link>
            </div>
        </div>
    )
};

export default TitleLink;