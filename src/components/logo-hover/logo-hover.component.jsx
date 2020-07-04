import React from 'react';

import './logo-hover.styles.scss';

const LogoHover = ({ imageA, imageB, link }) => {
    return(
        <div className='logo-hover'>
            <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='logo-hover-container'
            >
                <img
                    className='logo-original'
                    src={imageA}
                    alt=''></img>
                <img
                    className='logo-alternative'
                    src={imageB}
                    alt=''></img>
            </a>
        </div>
    )
};

export default LogoHover;