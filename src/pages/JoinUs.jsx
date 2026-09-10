import React from "react";
import HeroSection from "../component/JoinUs/HeroSection";
import VolunteerWithUs from "../component/JoinUs/VolunteerWithUs";
import WhyJoinUs from "../component/JoinUs/WhyJoinUs";
import JobOpenings from "../component/JoinUs/JobOpenings";
import ContactUs from "../component/JoinUs/ContactUs";
import Faq from "../component/JoinUs/Faq";

const JoinUs = () => {
  return (
    <div>
      <HeroSection />
      <WhyJoinUs />
      <VolunteerWithUs />
      <JobOpenings />
      <ContactUs />
      <Faq />
    </div>
  );
};

export default JoinUs;
