import React from "react";
import HeroSection from "./HeroSection";
import { useProductContext } from "./context/ProductContext.js";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return <HeroSection myData={data} />;
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;