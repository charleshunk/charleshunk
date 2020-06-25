import React, { useContext, useRef, useEffect } from 'react';
import { BlogContext } from '../../provider/blog/blog.provider';

import RenderedBlogPost from '../rendered-blog-post/rendered-blog-post.component';

import './blog-post.styles.scss';

const BlogPost = ({ match }) => {
    const { blogPosts } = useContext(BlogContext);
    const blogReadLocation = useRef(0);
    console.log(match.params.blogPostId);
    console.log(blogPosts);

    const handleScroll = () => {
        const variableA = window.innerHeight;
        const variableC = document.documentElement.scrollHeight;
        const variableB = window.pageYOffset;
        const variableX = variableB * 100 / (variableC - variableA);
        console.log(`Previous Blog Read Location: ${blogReadLocation.current}%`);
        blogReadLocation.current = variableX.toFixed(2);
        console.log(`Blog Read Location: ${blogReadLocation.current}%`);    
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log('Activate Scroll Listener');

        return () => {
            console.log('Deactivate Scroll Listener');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className='blog-post'>
            {
                blogPosts.length ?
                (
                    <RenderedBlogPost
                    blogPosts={blogPosts}
                    postId={match.params.blogPostId} />
                )
                :
                (
                    <div className='loading-post'>Loading Post</div>
                )
            }
        </div>
    )
};

export default BlogPost;