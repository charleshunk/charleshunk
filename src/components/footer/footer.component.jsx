import React from 'react';

import './footer.styles.scss';

import LogoHover from '../logo-hover/logo-hover.component';

import instaLogo from '../../images/insta-logo-2.png';
import instaLogoAlt from '../../images/insta-logo-3.png';
import stravaLogo from '../../images/strava-logo-2.png';
import stravaLogoAlt from '../../images/strava-logo-3.png';
import heartIcon from '../../images/heart-icon.png';
import scrollUpCaret from '../../images/scroll-up-caret-2.png';
import scrollUpCaretAlt from '../../images/scroll-up-caret-3.png';

const Footer = () => {
    
    const scrollToTop = () => {
        console.log('vamos pa rribaaaaa');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
    
    return(
        <div className='footer'>
            <div className='contact-me'>
                <span className='follow-me'>FOLLOW ME</span>
                <div className='footer-logos'>
                    <LogoHover
                        imageA={instaLogo}
                        imageB={instaLogoAlt}
                        link={'https://www.instagram.com/charleshunk/'}
                    />
                    <LogoHover
                        imageA={stravaLogo}
                        imageB={stravaLogoAlt}
                        link={'https://www.strava.com/athletes/charleshunk'}
                    />
                </div>
            </div>
            <div className='copyright'>
                <div className='copyright-title'>
                    <div className='copyright-title-content'>
                        <div className='copyright-title-left'>
                            © 2020 made with
                        </div>
                        <div className='copyright-title-center'>
                            <img src={heartIcon} alt=''></img>
                        </div>
                        <div className='copyright-title-center-two'>
                            for
                        </div>
                        <div className='copyright-title-right'>
                            charleshunk.com
                        </div>
                    </div>
                </div>
                <div className='copyright-subtitle'>
                    <div className='copyright-subtitle-content'>
                        ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;