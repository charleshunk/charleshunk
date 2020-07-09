import React from 'react';

import './about.styles.scss';

import heroVideo from '../../videos/IMWA-swim.mp4';

const AboutPage = () => {
    return(
        <div className='about-page'>
            <div className='hero-video'>
                <video autoPlay muted loop id='herovideo'>
                    <source src={heroVideo} type='video/mp4'></source>                    
                </video>
                <div className='over-video'></div>
            </div>
        </div>
    )
};

export default AboutPage;