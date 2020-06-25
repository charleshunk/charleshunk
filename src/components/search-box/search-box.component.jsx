import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ handleChange }) => {
    return(
        <input
        className='search'
        type='search'
        placeholder='search blog posts'
        onChange={handleChange}
        />
    )
};

export default SearchBox;