import React from "react"

import SEO from "../components/seo"
import "../stylesheets/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => {

	return (

		<div>

			<SEO title="Home" />

			<div
				className="site-title-container">

				<h1
					className="site-title">
					The Book of Shevon
					<span
						id="dot"
						style={{color:"white"}}>
						.
					</span>
				</h1>

				<div
					className="links">
					<a
						href="mailto:shevonmendis98@gmail.com">
						<FontAwesomeIcon
							icon={ faEnvelope }/>
					</a>
					<a
						href="https://github.com/theshevon"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={ faGithub }/>
					</a>
					<a
						href="https://www.linkedin.com/in/mendiss"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={ faLinkedin }/>
					</a>
					<a
						href="https://medium.com/@shevon_mendis"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon
							icon={ faMedium }/>
					</a>
				</div>

			</div>

		</div>
	)
}

export default IndexPage
