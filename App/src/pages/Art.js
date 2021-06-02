import React, { useEffect, useState } from "react";
import { importAll }                  from "../util/ImageImporter.js";

import "../styles/pages/Photog.css";

const Art = () => {

    const [handDrawn, setHandDrawn] = useState([]);
    const [digital, setDigital]     = useState([]);
    const [posters, setPosters]     = useState([]);
    const [models, setModels]       = useState([]);

    useEffect(() => {
        setHandDrawn(importAll(require.context("../assets/art/handDrawn", false, /\.(png|jpe?g|svg)$/)));
        setDigital(importAll(require.context("../assets/art/digital", false, /\.(png|jpe?g|svg)$/)));
        setPosters(importAll(require.context("../assets/art/posters", false, /\.(png|jpe?g|svg)$/)));
        setModels(importAll(require.context("../assets/art/models", false, /\.(png|jpe?g|svg)$/)));
    }, []);

    const allArt = handDrawn.concat(digital).concat(posters).concat(models);
    
    const artDiv = (
        <div
            className="photos">
            { allArt.map((art, index) => (
                <img
                    key={ index }
                    src={ art }
                    alt={`artwork-${ index }`}
                    className="photo"
                />
            ))}
        </div>
    )

    return (
        <div
            className="photog-page">
            { artDiv }
        </div>
    )
}

export default Art;