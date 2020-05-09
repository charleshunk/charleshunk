import React from 'react';

import './challenges.styles.scss';

import CategoryContainer from '../../components/category-container/category-container.component';

const ChallengesPage = () => {
    return(
        <div className='challenges'>
            <CategoryContainer type='tri'/>
            <CategoryContainer type='run'/>
        </div>
    )
};

export default ChallengesPage;