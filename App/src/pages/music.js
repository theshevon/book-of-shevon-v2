import React from 'react'
import Layout from '../components/layout';

import "../stylesheets/music.css";

const music = () => {
    return (
        <Layout>
            <div
                className="music-page">

                <h1
                    className="music-page-title">
                    Music
                </h1>

                <div class="music-videos">

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/EDajeXIr6Jg"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <iframe
                        src="https://www.youtube-nocookie.com/embed/a2CVi2pXNxA"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                </div>

            </div>
        </Layout>

    )
}

export default music;


