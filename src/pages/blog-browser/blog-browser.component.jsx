import React, { useContext, useState } from 'react';
import { BlogContext } from '../../provider/blog/blog.provider';

import './blog-browser.styles.scss';

import BlogList from '../../components/blog-list/blog-list.component';
import SearchBox from '../../components/search-box/search-box.component';

const BlogBrowser = () => {
    const { blogPosts } = useContext(BlogContext);
    console.log(blogPosts[0]);
    
    const [searchField, setSearchField] = useState('');

    const filterPosts = (e) => setSearchField(e.target.value);

    console.log('rendering BlogBrowser ...');

    const filteredBlogPosts = blogPosts.filter(
        blogPost => blogPost.title.toLowerCase()
        .includes(searchField.toLowerCase()));

    return(
        <div className='blog-browser'>
            <div className='blog-left'>
                <BlogList list={filteredBlogPosts}/>
            </div>
            <div className='blog-right'>
                <div className='search-title'>Search</div>
                <div className='underline'></div>
                <SearchBox handleChange={filterPosts}/>
            </div>
        </div>
    )
};

export default BlogBrowser;