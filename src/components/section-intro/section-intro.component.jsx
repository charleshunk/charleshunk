import React from 'react';

import './section-intro.styles.scss';

const SectionIntro = ({ imageUrl, text, title }) => {
    return(
        <div className='section-intro'>
            <img
                className='section-image'
                src={imageUrl}
                alt=''
            ></img>
            <div className='section-description'>
                <div className='section-desc-text'>
                    { text }
                </div><br/>
                <div className='section-desc-title'>
                    {`check out the ${title} section`}
                </div>
            </div>
        </div>
    );
};

export default SectionIntro;