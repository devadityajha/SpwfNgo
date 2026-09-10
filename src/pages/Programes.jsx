import React from "react";
import HeroSection from "../component/Programs/HeroSection";
import ProgramsList from "../component/Programs/ProgramsList";
import StoriesChange from "../component/Programs/StoriesChange";
import RewriteChildhoodSection from "../component/home/RewriteChildhoodSection";

const Programes = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ProgramsList />
      <StoriesChange />
      <RewriteChildhoodSection />
    </div>
  );
};

export default Programes;
