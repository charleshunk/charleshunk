import React from 'react';

import './main.styles.scss';

import SectionIntro from '../../components/section-intro/section-intro.component';

import SECTION_INTRO_DATA from './section-intro.data';
import heroImageMain from '../../images/hero-image.JPG';

const MainPage = () => {
    return(
        <div className='main-page'>
            <div className='hero-image-main-container'>        
                <img className='hero-image-main'
                    src={heroImageMain}
                    alt='Welcome to charleshunk.com'
                />
                <div className='image-cover-top'></div>
                <div className='image-cover-bottom'></div>
                <div className='image-cover-left'></div>
                <div className='image-cover-right'></div>
                <div className='image-cover-center'></div>
            </div>
            <div className='welcome-banner'>
                <div className='welcome-to-pre'>welcome to</div>
                <div className='welcome-to-main'>charleshunk.com</div>
            </div>
            <div className='section-intros'>
            {
                SECTION_INTRO_DATA.map((item, id) => (
                    <SectionIntro
                    title={item.title}
                    text={item.text}
                    imageUrl={item.imageUrl}
                    key={id}
                    />
                ))
            }
            </div>
        </div>
    )
};

export default MainPage;