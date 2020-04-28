import React from 'react';

import './header.styles.scss';

import Logo from '../logo/logo.component';
import OptionsLink from '../options-link/options-link.component';

const Header = () => {

    return(
        <div className='header'>
            <Logo />
            <h1>First React Project</h1>
            <h2>Fix my currently sad-looking website!!!</h2>
            <OptionsLink>
                ABOUT
            </OptionsLink>
            <OptionsLink>
                CHALLENGES
            </OptionsLink>
            <OptionsLink>
                CALENDAR
            </OptionsLink>
        </div>
    );
};

export default Header;