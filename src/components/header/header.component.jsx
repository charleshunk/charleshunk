import React, { useContext } from 'react';

import './header.styles.scss';

import { BlogContext } from '../../provider/blog/blog.provider';
import { ToggleContext } from '../../provider/toggle/toggle.provider';

import TitleLink from '../title-link/title-link.component';
import OptionsLink from '../options-link/options-link.component';
import ModeToggle from '../mode-toggle/mode-toggle.component';

const Header = () => {
    
    const { positionBlog } = useContext(BlogContext);
    const { colourScheme } = useContext(ToggleContext);
    console.log(`We are reading: ${positionBlog}`)

    let styleHeader = {
        backgroundColor: colourScheme ? '#FFC40C' : '#333'
    };

    let styleBlogRead = {
        backgroundColor: colourScheme ? '#FFC40C' : '#333',
        width: `${100-positionBlog}%`,
    };

    return(
        <div className='header'>
            <div className='actual-header' style={styleHeader}>
                <div className='title'>
                    <TitleLink to='/'>
                        charleshunk.com
                    </TitleLink>
                </div>
                <div className='options'>
                    <OptionsLink to='/about'>
                        ABOUT
                    </OptionsLink>
                    <OptionsLink to='/calendar'>
                        CALENDAR
                    </OptionsLink>
                    <OptionsLink to='/blog'>
                        BLOG
                    </OptionsLink>
                    <OptionsLink to='/challenges'>
                        CHALLENGES
                    </OptionsLink>
                    <ModeToggle/>
                </div>
            </div>
            <div className='read-blog-location'>
                <div className='read-blog-location-left' style={{width: `${positionBlog}%`}}></div>
                <div className='read-blog-location-right'
                    style={styleBlogRead}
                    ></div>
            </div>
        </div>
    );
};

export default Header;