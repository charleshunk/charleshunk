import React from 'react';

import './category-container.styles.scss';

import CategoryHeader from '../category-header/category-header.component';
import CategoryItem from '../category-item/category-item.component';

const CategoryContainer = ({ type }) => {
    
    const itemType = (type) => {
        switch(type) {
            case 'tri':
                return(['fivecontinents','road2kona','norseman']);
            case 'run':
                return(['sixmajors','road2boston']);
            default:
                return null;
        }
    }
    
    return(
        <div className='category-container'>
            <CategoryHeader type={type}/>
            {
                itemType(type).map( (item, id) => 
                    <CategoryItem key={id} type={item}/>)
            }
        </div>
    )
};

export default CategoryContainer;