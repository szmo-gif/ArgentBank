import React from 'react';
import featuresData from './features.json';

import './Features.css';

function Features() {
    return (
        <section className="features">
            {featuresData.features.map((feature, index) => (
                <div className="feature-item" key={index}>
                    <img src={feature.src} alt={feature.alt} className='feature-icon'/>
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p>{feature.text}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;
