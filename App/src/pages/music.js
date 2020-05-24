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

                    <div class="music-vid">
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/EDajeXIr6Jg"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <p>Don't Look Back in Anger - Noel Gallagher</p>
                    </div>

                    <div class="music-vid">
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/a2CVi2pXNxA"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <p>I Like Me Better - Lauv</p>
                    </div>

                </div>

            </div>
        </Layout>

    )
}

export default music;


