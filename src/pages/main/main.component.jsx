import React, { useContext } from 'react';

import './main.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

import { Link } from 'react-router-dom';

import { SECTION_INTRO_DATA } from './section-intro.data';
import cholulaSauce from '../../images/cholula-sauce.png';

const MainPage = () => {

    const { colourScheme } = useContext(ToggleContext);

    const styleWelcome = {
        backgroundColor: colourScheme ? '#FFC40C' : '#333' 
    };
    
    const styleWelcomeTwo = {
        color: colourScheme ? '#333' : 'white'
    };

    const styleButton = {
        backgroundColor: colourScheme ? 'orangered' : '#61BBDF',
    };

    const styleTriangle = {
        borderBottomColor: colourScheme ? '#FFC40C' : '#333'
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
                        <Link className='section-link' to='/about' style={styleButton}>
                            LEARN MORE
                        </Link>
                    </div>
                </div>
                <div className='section-block' style={styleWelcome}>
                    <div className='section-desc-container'>
                        <h1 className='section-desc' style={styleWelcomeTwo}>
                            {SECTION_INTRO_DATA[1].text}
                        </h1>
                        <Link className='section-link' to='/calendar' style={styleButton}>
                            LEARN MORE
                        </Link>
                    </div>
                    <div className='section-image image-one'>
                        <div className='triangle' style={styleTriangle}></div>
                        <div className='over-section-image'></div>
                    </div>
                </div>
                <div className='parallax parallax-two'>
                    <div className='over-parallax'></div>
                    <div className='desc-parallax'>
                        <h1 className='section-desc'>
                            {SECTION_INTRO_DATA[2].text}
                        </h1>
                        <Link className='section-link' to='/blog' style={styleButton}>
                            LEARN MORE
                        </Link>                        
                    </div>
                </div>
                <div className='section-block' style={styleWelcome}>
                <div className='section-desc-container'>
                        <h1 className='section-desc' style={styleWelcomeTwo}>
                            {SECTION_INTRO_DATA[3].text}
                        </h1>
                        <img src={cholulaSauce} className='cholula'></img>
                        <Link className='section-link' to='/challenges' style={styleButton}>
                            LEARN MORE
                        </Link>
                    </div>
                    <div className='section-image image-two'>
                        <div className='triangle' style={styleTriangle}></div>
                        <div className='over-section-image'></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainPage;