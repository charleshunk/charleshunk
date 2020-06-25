import React, { useContext } from 'react';

import './header.styles.scss';

import { BlogContext } from '../../provider/blog/blog.provider';

import TitleLink from '../title-link/title-link.component';
import OptionsLink from '../options-link/options-link.component';

const Header = () => {
    
    const { positionBlog } = useContext(BlogContext);
    console.log(`We are reading: ${positionBlog}`)

    return(
        <div className='header'>
            <div className='actual-header'>
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
                    <OptionsLink to='/blog'>
                        BLOG
                    </OptionsLink>
                </div>
            </div>
            <div className='read-blog-location' style={{width: `${positionBlog}%`}}></div>
        </div>
    );
};

export default Header;