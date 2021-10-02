import React from 'react'

import "./BlogPost.css";

const getShortenedText = (str: string, maxLen: number, separator: string = ' '): string => {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
}

const getContentSnippet = (text: string): string => {
    return getShortenedText(text.replace(/(<([^>]+)>)/ig," "), 175) + "..."
}

type BlogPostProps = {
    title: string,
    imgURL: string,
    content: string,
    postURL: string,
}

const BlogPost = (props: BlogPostProps): JSX.Element => {

    const { 
        title, 
        imgURL, 
        content, 
        postURL,
    } : {
        title: string,
        imgURL: string,
        content: string,
        postURL: string,
    } = props
    let contentSnippet = getContentSnippet(content);

    return (

        <div
            className="blog-post">

            <h3
                className="post-title">
                { title }
            </h3>

            <img
                src= { imgURL }
                alt= { `Cover for "${ title }"`}
                className="post-img"/>

            <p
                className="post-content">
                { contentSnippet }
                <a
                    href= { postURL }
                    className="post-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    read more
                </a>
            </p>

        </div>
    )
}

export default BlogPost;