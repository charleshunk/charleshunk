import React, { useContext } from 'react';

import './footer.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

import LogoHover from '../logo-hover/logo-hover.component';

import instaLogoWhite from '../../images/insta-logo-2.png';
import instaLogoBlue from '../../images/insta-logo-3.png';
import instaLogoGray from '../../images/insta-logo-4.png';
import instaLogoOrangered from '../../images/insta-logo-5.png';
import stravaLogoWhite from '../../images/strava-logo-2.png';
import stravaLogoBlue from '../../images/strava-logo-3.png';
import stravaLogoGray from '../../images/strava-logo-4.png';
import stravaLogoOrangered from '../../images/strava-logo-5.png';
import heartIcon from '../../images/heart-icon.png';

const Footer = () => {
    
    const scrollToTop = () => {
        console.log('vamos pa rribaaaaa');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
    
    const { colourScheme } = useContext(ToggleContext);
    
    let styleFooter = {
        backgroundColor: colourScheme ? '#FFC40C' : '#333',
        color: colourScheme ? '#333' : 'white'
    };
    
    let instaLogo = colourScheme ? instaLogoGray : instaLogoWhite;
    let instaLogoAlt = colourScheme ? instaLogoOrangered : instaLogoBlue;

    let stravaLogo = colourScheme ? stravaLogoGray : stravaLogoWhite;
    let stravaLogoAlt = colourScheme ? stravaLogoOrangered : stravaLogoBlue;

    return(
        <div className='footer' style={styleFooter}>
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