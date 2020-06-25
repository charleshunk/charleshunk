import React from 'react';

import './rendered-blog-post.styles.scss';

const renderParagraph = (node, id) => {
    return(
        <div key={id} className='paragraph'>
            {
                node.content.map((subnode, id) => {
                    if(subnode.marks.length > 0) {
                        if(subnode.marks[0].type === 'bold') {
                            return(<b key={id}>{subnode.value}</b>)
                        }
                        else {
                            return(<div key={id}></div>)
                        }
                    }
                    else {
                        return(<span key={id}>{subnode.value}</span>)
                    }
                })
            }
            <br />
        </div>
    )
};

const renderAsset = (node, id) => {
    return(
        <div key={id} className='embedded-asset'>
            <br />
            <img
                className='embedded-image'
                src={node.data.target.fields.file.url}
                alt={node.data.target.fields.title} />
            <br />
        </div>
    )
};

const renderOrderedList = (node, id) => {
    return(
        <div key={id} className='ordered-list'>
            <ol>
                {
                    node.content.map((subnode, id) => {
                        return(
                            <li key={id}>{subnode.content[0].content[0].value}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
};

const renderUnorderedList = (node, id) => {
    return(
        <div key={id} className='unordered-list'>
            <ul>
                {
                    node.content.map((subnode, id) => {
                        return(
                            <li key={id}>{subnode.content[0].content[0].value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

const renderContent = (contentArray) => {
    return(
        <div>
            {
                contentArray.map( (node, id) => {
                    switch(node.nodeType) {
                        case 'paragraph':
                            return(renderParagraph(node, id))
                        case 'embedded-asset-block':
                            return(renderAsset(node, id))
                        case 'ordered-list':
                            return(renderOrderedList(node, id))
                        case 'unordered-list':
                            return(renderUnorderedList(node, id))
                        default:
                            return(<div key={id}></div>)
                    }
                })
            }
        </div>
    )
};

const RenderedBlogPost = ({ blogPosts, postId }) => {
    
    const blogPostToRender = blogPosts.filter
        (blogPost => blogPost.urlTag === postId);

    return(
        <div className='rendered-blog-post'>
            <div className='blog-post-header'>
                <h1>{blogPostToRender[0].title}</h1>
                <h2>{blogPostToRender[0].subtitle}</h2>
                <div className='blog-post-header-image-container'>
                    <img src={blogPostToRender[0].headlineImage.fields.file.url}
                        alt={blogPostToRender[0].headlineImage.fields.title}
                        className='blog-post-header-image'/>
                </div>
            </div>
            <div className='blog-post-body'>
                {
                    renderContent(blogPostToRender[0].body.content)
                }
            </div>
        </div>
    )
};

export default RenderedBlogPost;