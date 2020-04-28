import React from 'react';

import "../stylesheets/blog-post.css"
import "../stylesheets/blog-post-skeleton.css";

const BlogPostSkeleton = () => {

    let skelton = (
        <div
            className="blog-post skeleton-blog-post">

            <div
                className="post-title skeleton-post-title">
            </div>

            <div
                className="post-img skeleton-post-img"/>

            <p
                className="post-content skeleton-post-content">
            </p>

            <p
                className="post-content skeleton-post-content">
            </p>

        </div>
    );

    return (
        <div>
            { skelton }
            { skelton }
            { skelton }
        </div>
    )
}

export default BlogPostSkeleton;