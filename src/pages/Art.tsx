import React, { useEffect, useState } from 'react';
import { importAll }                  from '../util/ImageImporter';

import '../styles/pages/Photog.css';

const Art = () => {

  const [handDrawn, setHandDrawn] = useState<string[]>([]);
  const [digital, setDigital]     = useState<string[]>([]);
  const [posters, setPosters]     = useState<string[]>([]);
  const [models, setModels]       = useState<string[]>([]);

  useEffect(() => {
    setHandDrawn(importAll(require.context('../assets/art/handDrawn', false, /\.(png|jpe?g|svg)$/)));
    setDigital(importAll(require.context('../assets/art/digital', false, /\.(png|jpe?g|svg)$/)));
    setPosters(importAll(require.context('../assets/art/posters', false, /\.(png|jpe?g|svg)$/)));
    setModels(importAll(require.context('../assets/art/models', false, /\.(png|jpe?g|svg)$/)));
  }, []);

  const allArt = handDrawn.concat(digital).concat(posters).concat(models);

  const artDiv = (
    <div
        className='photos'>
      { allArt.map((art, index) => (
        <img
            key={index}
            src={art}
            alt={`artwork-${ index }`}
            className='photo'
        />
      )) }
    </div>
  );

  return (
    <div
        className='photog-page'>
      { artDiv }
    </div>
  );
};

export default Art;
