import React, { useContext } from 'react';

import './main.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

import { Link } from 'react-router-dom';

import { SECTION_INTRO_DATA } from './section-intro.data';

const MainPage = () => {

    const { colourScheme } = useContext(ToggleContext);

    let styleWelcome = {
        backgroundColor: colourScheme ? '#FFC40C' : '#333',
        borderColor: colourScheme ? '#333' : 'white'
    };
    
    let styleWelcomeTwo = {
        color: colourScheme ? '#333' : 'white'
    };

    return(
        <div className='main-page'>
            <div className='hero-image-main-container'>        
                <div className='image-cover-top'></div>
                <div className='image-cover-bottom'></div>
                <div className='image-cover-left'></div>
                <div className='image-cover-right'></div>
                <div className='image-cover-center'></div>
            </div>
            <div className='welcome-banner' style={styleWelcome}>
                <div className='welcome-to-pre' style={styleWelcomeTwo}>welcome to</div>
                <div className='welcome-to-main' style={styleWelcomeTwo}>charleshunk.com</div>
            </div>
            <div className='section-intros'>
                <div className='parallax parallax-one'>
                    <div className='over-parallax'></div>
                    <div className='desc-parallax'>
                        <h1 className='section-desc'>
                            {SECTION_INTRO_DATA[0].text}
                        </h1>
                        <Link className='section-link' to='/about'>
                            LEARN MORE
                        </Link>
                    </div>
                </div>
                <div className='section-block'>

                </div>
                <div className='parallax parallax-two'>
                    <div className='over-parallax'></div>
                    <div className='desc-parallax'>
                        <h1 className='section-desc'>
                            {SECTION_INTRO_DATA[2].text}
                        </h1>
                        <Link className='section-link' to='/blog'>
                            LEARN MORE
                        </Link>                        
                    </div>
                </div>
                <div className='section-block'>

                </div>
            </div>
        </div>
    )
};

export default MainPage;