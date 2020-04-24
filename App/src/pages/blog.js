import React from "react"

import SEO from "../components/seo"
import "../stylesheets/blog.css"

const BlogPage = () => {

    const currDate = new Date().toDateString()
    let day = currDate.substring(0,3)
    let mm = currDate.substring(4, 7)
    let dd  = currDate.substring(8, 10)
    let yyyy = currDate.substring(11)

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
                        <p>NO.{}</p>
                        <p>{day}, {dd} {mm} {yyyy}</p>
                        <p>F.O.B EDITION</p>
                    </div>

                    <div className="thin-line"></div>
                    <div className="thicc-line"></div>




            </div>


		</div>
	)
}

export default BlogPage
