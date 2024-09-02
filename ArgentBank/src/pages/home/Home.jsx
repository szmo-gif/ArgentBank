import Banner from "../../compoment/banner/Banner"
import Features from "../../compoment/features/Features"

import { useState, useEffect } from 'react';

import featuresData from "../../compoment/features/features.json"

import './home.css';

export default function Home() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (Array.isArray(featuresData.features)) {
      setFeatures(featuresData.features);
    } else {
      console.error('Les données ne sont pas un tableau:', featuresData.features);
    }
  }, []);

  return (
    <main>
      <Banner />
      <div className="features">
        {features.map((feature, index) => (
          <Features key={index} {...feature} />
        ))}
      </div>
    </main>
  )
}