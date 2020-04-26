import React from 'react';

import Layout from "../components/layout";
import photo from "../images/pic.jpg";

import "../stylesheets/about.css";

const AboutPage = () => {
    return (

        <Layout>
            <div
                className="about-page">

                <img
                    src={photo}
                    alt="portrait"
                    className="profile-pic"/>

                <h1>Shevon Mendis</h1>

            </div>
        </Layout>
    )
}

export default AboutPage;