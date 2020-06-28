import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ handleChange }) => {
    return(
        <div className='search-box'>
            <svg
            class='lupita'
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'>
                <circle
                cx='5.6'
                cy='5.6'
                r='5.1'
                stroke='#7E7E7E'>
                </circle>
                <path
                d='M9.5415 9.10215 L14.0001 13.0667'
                stroke='#7E7E7E'>
                </path>
            </svg>
            <input
            className='searchie'
            type='search'
            placeholder='search...'
            onChange={handleChange}
            />
        </div>
    )
};

export default SearchBox;