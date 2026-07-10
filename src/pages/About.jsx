// src/pages/About.jsx
import React from "react";
import AboutHero from "../component/about/AboutHero";

const About = () => {
  return (
    // Ensure this container doesn't have extra padding that pushes the content down
    <div className="w-full">
      <AboutHero />
      {/* <OurTeam /> */}
    </div>
  );
};

export default About;
