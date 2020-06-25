import React from 'react';
import { Route } from 'react-router-dom';

import BlogBrowser from '../blog-browser/blog-browser.component';
import BlogPost from '../../components/blog-post/blog-post.component';

const BlogPage = ({ match }) => {
    console.log('BlogPage first!');
    return(
        <div className='blog-page'>
            <Route exact path={`${match.path}`}
                component={BlogBrowser}
            />
            <Route path={`${match.path}/:blogPostId`}
                component={BlogPost}
            />
        </div>
    )
};

export default BlogPage;