import React from "react"

import SEO from "../components/seo"
import "../stylesheets/blog.css"
import BlogPost from "../components/blogPost"


class BlogPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date : '',
            posts : [],
            loading : true
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
        .then(feed => this.setState({ posts : feed.items.filter(item => item.categories.length > 0), loading : false }))
    }

    render() {

        const { date, posts, loading } = this.state

        let blog_posts = null;
        if (!loading){
            if (posts.length === 0){
                blog_posts = (<h1> Sorry, no posts have been published yet :(</h1>)
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

            <div
                id="about-page">

                <SEO title="About" />

                <div
                    className="blog-header">


                        <h1
                            className="title">
                                Blog
                        </h1>

                        <div className="thicc-line"></div>
                        <div className="thin-line"></div>

                        <div
                            className="blog-details">
                            <p className="detail">NO.{ posts.length }</p>
                            <p className="detail">{ date }</p>
                            <p className="detail">F.O.B EDITION</p>
                        </div>

                        <div className="thin-line"></div>
                        <div className="thicc-line"></div>

                        { blog_posts }


                </div>


            </div>
        )
    }
}

export default BlogPage;
