import React from "react";

import "../styles/pages/YouTube.css";

const YouTube = () => {
    
    return (
        <div
            className="music-page">

            <h1
                className="music-page-title">
                YouTube
            </h1>

            <div className="music-videos">

                <div className="music-vid">
                    <iframe
                        title="dlbia"
                        src="https://www.youtube-nocookie.com/embed/EDajeXIr6Jg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>Don't Look Back in Anger - Noel Gallagher</p>
                </div>

                <div className="music-vid">
                    <iframe
                        title="ilmb"
                        src="https://www.youtube-nocookie.com/embed/a2CVi2pXNxA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <p>I Like Me Better - Lauv</p>
                </div>

            </div>
        </div>
    )
}

export default YouTube;