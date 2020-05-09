import React from 'react';

import './category-header.styles.scss';

import CategoryHeaderIcon from '../category-header-icon/category-header-icon.component';

const CategoryHeader = ({ type }) => {
    
    const itemTypes = (type) => {
        switch(type) {
            case 'tri':
                return(['swim','bike','run']);
            case 'run':
                return(['run']);
            default:
                return null;
        }
    }

    return(
        <div className='category-header'>
            {
                itemTypes(type).map(
                    itemType => (
                        <CategoryHeaderIcon type={itemType}/>
                    )
                )
            }
        </div>
    )
};

export default CategoryHeader;