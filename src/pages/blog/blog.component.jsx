import React, { useState, useEffect } from 'react';

import RenderedBlogPost from '../../components/rendered-blog-post/rendered-blog-post.component';

import './blog.styles.scss';

const BlogPage = () => {
    const [blogPost, setBlogPost] = useState(null);

    const readBlogPost = async () => {
        const contentful = require('contentful');
        const client = await contentful.createClient({
            space: 'xibx55xw1egf',
            accessToken: 'snWnF9Mk9TZLCZQ-4PCkCoX8Bgh5jInBjiEFZwcDXbY'
        });
        const entry = await client.getEntries({'content_type': 'blogPost'});
        const post = entry.items[0].fields;
        setBlogPost(post);
    };

    useEffect(() => {
        readBlogPost();
    }, []);

    useEffect(() => {
        if(blogPost) {
            console.log(blogPost);
        }
    }, [blogPost])
    
    if (!blogPost) {
        return (
            <div>is loading ...</div>
        )
    }

    return(
        <div className='blog-page'>
            <RenderedBlogPost blogPost={blogPost} />
        </div>
    )
};

export default BlogPage;