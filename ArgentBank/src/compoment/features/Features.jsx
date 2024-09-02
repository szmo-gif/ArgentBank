import React from 'react';
import './Features.css';

function Features( { src, alt, title, text } ) {
  return (
    <figure className="feature-item">
          <img src={src} alt={alt}/>
          <figcaption>
          <h3>{title}</h3>
          <p>{text}</p>
          </figcaption>
    </figure>
  );
}

export default Features;
