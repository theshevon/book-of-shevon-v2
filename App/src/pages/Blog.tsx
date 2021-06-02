import React, { useEffect, useState } from "react";

import BlogPost         from "../components/BlogPost";
import BlogPostSkeleton from "../components/BlogPostSkeleton";

import "../styles/pages/Blog.css";

const MEDIUM_BLOG_LINK = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shevon_mendis";

type Post = {
    title: string,
    thumbnail: string,
    description: string,
    link: string,
}

const Blog = () => {

    const [date, setDate] = useState<string>('');
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        
        const currDate = new Date().toDateString();
        let day = currDate.substring(0,3);
        let mm = currDate.substring(4, 7);
        let dd  = currDate.substring(8, 10);
        let yyyy = currDate.substring(11);

        setDate(`${ day }, ${ dd } ${ mm } ${ yyyy }`);

        fetch(MEDIUM_BLOG_LINK)
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(feed => {
                setPosts(feed.items.filter((item: { categories: string[] }) => item.categories.length > 0));
                setLoading(false);
            })
    }, []);

    let blog_posts = null;
    
    if (!loading) {
        if (posts.length === 0){
            blog_posts = (
                <h1
                    className="sorry-msg">
                    Sorry, no posts have been published yet&nbsp;
                    <span
                        role="img"
                        aria-label="jsx-a11y/accessible-emoji">
                        o(╥﹏╥)o
                    </span>
                </h1>
            );
        } else{
            blog_posts = (
                <div
                    className="blog-posts">
                    { posts.map((post, index) => (
                        <BlogPost key={ index }
                            title = { post.title }
                            imgURL = { post.thumbnail }
                            content = { post.description }
                            postURL = { post.link }
                        />
                    ))}
                </div>
            );
        }
    } else {
        blog_posts = (
            <div
                className="skeleton-blog-posts">
                <BlogPostSkeleton />
            </div>
        );
    }

    return (

        <div
            className="blog-page">

            <div
                className="blog-header">

                    <h1
                        className="blog-title">
                            Blog
                    </h1>

                    <div
                        className="thicc-line">
                    </div>
                    <div
                        className="thin-line">
                    </div>

                    <div
                        className="blog-details">
                        <p
                            className="detail detail-1">NO.{ posts.length }
                        </p>
                        <p
                            className="detail detail-2">{ date }
                            </p>
                        <p
                            className="detail detail-3">NUGGET EDITION
                            </p>
                    </div>

                    <div
                        className="thin-line">
                    </div>
                    <div
                        className="thicc-line">
                    </div>
            </div>

            { blog_posts }

        </div>

    )
}

export default Blog;