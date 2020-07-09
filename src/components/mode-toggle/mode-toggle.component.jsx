import React, { useState, useEffect, useRef, useContext } from 'react';

import './mode-toggle.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

import toggleMoon from '../../images/toggle-moon.png';
import toggleSun from '../../images/toggle-sun.png';

const ModeToggle = () => {

    const { colourScheme, toggleScheme } = useContext(ToggleContext);

    const [isHighlighted, setHighlighted] = useState(false);

    const highlightedClass = useRef('');
    const firstTime = useRef(true);

    const checkedClass = colourScheme ? 'toggled' : '';

    const toggleThumb = () => {
        toggleScheme();
        highlightedClass.current = 'highlighted';
    };

    useEffect(() => {
        if(!firstTime.current) {
            const timer = setTimeout(() => {
                setHighlighted(isHighlighted => !isHighlighted)
            }, 1500);
            highlightedClass.current = '';
            return () => clearTimeout(timer);
        }

        else {
            firstTime.current = false;
        }

    }, [colourScheme]);

    return(
        <div className='mode-toggle'>
            <div className='toggle-track'>
                <div className='toggle-moon'>
                    <img
                    src={toggleMoon}
                    width='16'
                    height='16'
                    alt=''
                    ></img>
                </div>
                <div className='toggle-sun'>
                <img
                    src={toggleSun}
                    width='16'
                    height='16'
                    alt=''
                    ></img>
                </div>
            </div>
            <div className={`toggle-thumb
                ${checkedClass}
                ${highlightedClass.current}`}
                onClick={toggleThumb}></div>
        </div>
    )
};

export default ModeToggle;