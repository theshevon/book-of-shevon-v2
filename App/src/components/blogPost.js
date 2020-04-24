import React from 'react'

import "../stylesheets/blog-post.css";

const getShortenedText = (str, maxLen, separator = ' ') => {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
}

const getContentSnippet = (text) => {
    return getShortenedText(text.replace(/(<([^>]+)>)/ig," "), 175) + "..."
}

const BlogPost = (props) => {

    const { title, imgURL, content, postURL } = props
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