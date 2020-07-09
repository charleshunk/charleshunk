import React, { useContext } from 'react';

import './section-intro.styles.scss';

import { ToggleContext } from '../../provider/toggle/toggle.provider';

const SectionIntro = ({ imageUrl, text, title }) => {

    const { colourScheme } = useContext(ToggleContext);

    return(
        <main className='section-intro'>

        </main>
    );
};

export default SectionIntro;