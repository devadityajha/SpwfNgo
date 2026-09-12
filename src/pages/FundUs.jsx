import React from "react";

import HeroSection from "../component/fundus/HeroSection";
import WaysToGive from "../component/fundus/WaysToGive";
import Contribution from "../component/fundus/Contribution";
import Benefits from "../component/fundus/Benefits";
import TrustAtEveryStep from "../component/fundus/TrustAtEveryStep";

const FundUs = () => {
  return (
    <div>
      <HeroSection />
      <WaysToGive />
      <Contribution />
      <Benefits />
      <TrustAtEveryStep />
    </div>
  );
};

export default FundUs;
