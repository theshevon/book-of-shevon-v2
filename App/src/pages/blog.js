import React from "react";

import SEO              from "../components/seo";
import Layout           from "../components/layout";
import BlogPost         from "../components/BlogPost";
import BlogPostSkeleton from "../components/BlogPostSkeleton";

import "../stylesheets/blog.css";

class BlogPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date : '',
            posts : [],
            loading : false
        }
    }

    componentDidMount(){

        const currDate = new Date().toDateString()
        let day = currDate.substring(0,3)
        let mm = currDate.substring(4, 7)
        let dd  = currDate.substring(8, 10)
        let yyyy = currDate.substring(11)

        this.setState({ date : `${ day }, ${ dd } ${ mm } ${ yyyy }` })

        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shevon_mendis")
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(feed =>
                    this.setState({
                                    posts : feed.items.filter(item =>
                                        item.categories.length > 0),
                                    loading : false }))
    }

    render() {

        const { date, posts, loading } = this.state

        let blog_posts = (
            <div
                className="skeleton-blog-posts">
                <BlogPostSkeleton />
            </div>
        );

        if (!loading){
            if (posts.length === 0){
                blog_posts =
                    (<h1
                        className="sorry-msg">
                        Sorry, no posts have been published yet 😞
                    </h1>)
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
                )
            }
        }

        return (

            <Layout
                id="about-page">

                <SEO title="About" />

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
                                className="detail detail-3">F.O.B EDITION
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

            </Layout>
        )
    }
}

export default BlogPage;
