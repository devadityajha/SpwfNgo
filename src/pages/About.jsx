// src/pages/About.jsx
import React from "react";
import AboutHero from "../component/about/AboutHero";
import MissionBar from "../component/about/MissionBar";
import WhatDrivesUs from "../component/about/WhatDrivesUs";
import FutureWeEnvision from "../component/about/FutureWeEnvision";
import OurJourney from "../component/about/OurJourney";
import PersonCard from "../component/about/PersonCard";
import OurTeam from "../component/about/OurTeam";
import TrustAtEveryStep from "../component/about/TrustAtEveryStep";

const About = () => {
  return (
    // Ensure this container doesn't have extra padding that pushes the content down
    <div className="w-full">
      <AboutHero />
      <MissionBar />
      <WhatDrivesUs />
      <FutureWeEnvision />
      <OurJourney />
      <OurTeam />
      <TrustAtEveryStep />
    </div>
  );
};

export default About;
