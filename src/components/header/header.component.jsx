import React from 'react';

import './header.styles.scss';

import TitleLink from '../title-link/title-link.component';
import OptionsLink from '../options-link/options-link.component';

const Header = () => {

    return(
        <div className='header'>
            <div className='title'>
                <TitleLink to='/'>
                    charleshunk.com
                </TitleLink>
            </div>
            <div className='options'>
                <OptionsLink to='/about'>
                    ABOUT
                </OptionsLink>
                <OptionsLink to='/challenges'>
                    CHALLENGES
                </OptionsLink>
                <OptionsLink to='/calendar'>
                    CALENDAR
                </OptionsLink>
            </div>
        </div>
    );
};

export default Header;