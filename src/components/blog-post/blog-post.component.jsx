import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../provider/blog/blog.provider';

import RenderedBlogPost from '../rendered-blog-post/rendered-blog-post.component';

import './blog-post.styles.scss';

const BlogPost = ({ match }) => {
    const { blogPosts, progressBlog } = useContext(BlogContext);

    const handleScroll = () => {
        const variableA = window.innerHeight;
        const variableC = document.documentElement.scrollHeight;
        const variableB = window.pageYOffset;
        const variableX = variableB * 100 / (variableC - variableA);
        progressBlog(variableX.toFixed(2));
        console.log(`Blog Read Location: ${variableX.toFixed(2)}%`);    
    };

    useEffect(() => {
        console.log(match.params.blogPostId);
        console.log(blogPosts);
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log('Activate Scroll Listener');

        return () => {
            progressBlog(0);
            console.log('Deactivate Scroll Listener');
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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