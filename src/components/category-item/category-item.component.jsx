import React from 'react';

import './category-item.styles.scss';

const subtitleItem = (type) => {
    switch(type) {
        case 'fivecontinents':
            return('IRONMAN Five Continent Challenge');
        case 'sixmajors':
            return('Abbott World Marathon Majors');
        case 'road2kona':
            return('The Big Dance');
        case 'road2boston':
            return('The hard road to Beantown');
        case 'norseman':
            return(`The world's toughest triathlon`);
        default:
            return null;
    }
}

const CategoryItem = ({ type }) => {
    return(
        <div className='category-item'>
            <div className={`background ${type}`}></div>
            <div className='content'>
                <div className='title'>{`#${type}`}</div>
                <span className='subtitle'>{subtitleItem(type)}</span>
            </div>
        </div>
    )
};

export default CategoryItem;