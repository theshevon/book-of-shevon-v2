import React, { useEffect, useState } from "react";
import { importAll }                  from "../util/ImageImporter";

import "../styles/pages/Photog.css";

const Photog = () => {

    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        setPhotos(importAll(require.context("../assets/photog", false, /\.(png|jpe?g|svg)$/)))
    }, []);

    const photosDiv = (
        <div
            className="photos">
            { photos.map((photo, index) => (
                <img
                    key={ index }
                    src={ photo }
                    alt={ `photog-${index}` }
                    className="photo"
                />
            )) }
        </div>
    );

    return (
        <div
            className="photog-page">
            { photosDiv }
        </div>
    )
}

export default Photog;