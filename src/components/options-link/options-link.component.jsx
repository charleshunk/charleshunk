import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './options-link.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

const OptionsLink = ({ to, children }) => {
    
    const { colourScheme } = useContext(ToggleContext);

    let styleText = {
        color: colourScheme ? '#333' : 'white'
    };

    let styleMarker = {
        backgroundColor: colourScheme ? 'orangered' : '#61BBDF'
    };

    let styleHover = {
        backgroundColor: colourScheme ? 'orangered' : '#61BBDF'
    };

    return(
        <div className='button-marker-pair'>
            <Link
                to={to}
                className='options-link-button'
                style={styleText}
                onMouseOver={styleHover}>
                { children }
            </Link>
            <div className='options-link-marker' style={styleMarker}></div>
        </div>
    )
};

export default OptionsLink;