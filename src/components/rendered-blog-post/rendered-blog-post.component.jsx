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
                        default:
                            return(<div key={id}></div>)
                    }
                })
            }
        </div>
    )
};

const RenderedBlogPost = ({ blogPost }) => {
    return(
        <div className='blog-post'>
            <div className='blog-post-header'>
                <h1>{blogPost.title}</h1>
                <h2>{blogPost.subtitle}</h2>
                <div className='blog-post-header-image-container'>
                    <img src={blogPost.headlineImage.fields.file.url}
                        alt={blogPost.headlineImage.fields.title}
                        className='blog-post-header-image'/>
                </div>
            </div>
            <div className='blog-post-body'>
                {
                    renderContent(blogPost.body.content)
                }
            </div>
        </div>
    )
};

export default RenderedBlogPost;