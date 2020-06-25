import React from 'react';

import './blog-list.styles.scss';

import BlogItem from '../blog-item/blog-item.component';

const BlogList = ({ list }) => {

    return(
        <div className='blog-list'>
            {
                list.length ? (
                list.map((blogPost,id) => {
                    const tempDate = new Date(blogPost.date);
                    const newDate = (tempDate) => {
                        const options = { year: "numeric",
                                month: "long", day: "numeric" }
                        return new Date(tempDate).toLocaleDateString(
                            'en-US', options)
                    };
                    return(
                    <BlogItem
                        key={id}
                        title={blogPost.title}
                        subtitle={blogPost.subtitle}
                        headlineImage={blogPost.headlineImage.fields.file.url}
                        date={newDate(tempDate)}
                        id={blogPost.urlTag}
                    />
                    )
                })
                ) :
                (
                    <div className='not-found'>Post Not Found</div>
                )
            }
        </div>
    )
};

export default BlogList;