import React from 'react';
import HeroSection from './HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct.js';


const Home = () => {
  const data = {
    name : "Fayzan store",
  };

  return (
    <>
    <HeroSection myData= {data} />
    <FeatureProduct />
    <Services />
    <Trusted />
    </>
  );
};

export default Home;
