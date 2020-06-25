import React from 'react';
import { withRouter } from 'react-router-dom';

import './blog-item.styles.scss';

const BlogItem = ({ title, subtitle, headlineImage, date, history, match, id }) => {
    return(
        <div className='blog-item'>
            <img className='blog-image' alt={title} src={headlineImage}
                onClick={() => history.push(`${match.url}/${id}`)}/>
            <div className='blog-item-description'>
                <div className='blog-item-title'
                    onClick={() => history.push(`${match.url}/${id}`)
                    }>{title}</div>
                <div className='blog-item-subtitle'>{subtitle}</div>
                <div className='blog-item-date'>{date}</div>
            </div>
        </div>
    )
};

export default withRouter(BlogItem);