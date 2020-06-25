import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext({
    blogPosts: []
});

const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    
    const readBlogPosts = async () => {
        const contentful = require('contentful');
        const client = await contentful.createClient({
            space: 'xibx55xw1egf',
            accessToken: 'snWnF9Mk9TZLCZQ-4PCkCoX8Bgh5jInBjiEFZwcDXbY'
        });
        const entry = await client.getEntries({'content_type': 'blogPost'});
        const posts = entry.items.map(item => item.fields);
        setBlogPosts(posts);
    };

    useEffect(() => {
        console.log('Now that we have mounted, then readBlogPosts only once ...');
        readBlogPosts();
        return () => {
            console.log('bye bye, baby!');
        }
    }, []);

    useEffect(() => {
        if(blogPosts.length !== 0) {
            console.log('blogPosts have finally been loaded ...');
            console.log(blogPosts);
        }
    });

    return (<BlogContext.Provider
    value={{ blogPosts }}
    >
        {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;