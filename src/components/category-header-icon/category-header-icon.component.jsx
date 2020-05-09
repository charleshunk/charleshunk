import React from 'react';

import './category-header-icon.styles.scss';

const CategoryHeaderIcon = ({ type }) => {
    return(
        <div className={`category-header-icon ${type}`}/>
    )
};

export default CategoryHeaderIcon;