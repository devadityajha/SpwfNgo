import React from "react";
import HeroSection from "../component/home/HeroSection";
import MissionBanner from "../component/home/MissionBanner";
import PartnersBar from "../component/home/PartnersBar";
import PathsSection from "../component/home/PathsSection";
import ProgramsSection from "../component/home/ProgrammesSection";
import StatsSection from "../component/home/StatsSection";
import StoriesSection from "../component/home/StoriesSection";
import CampaignsSection from "../component/home/CampaignsSection";
import RewriteChildhoodSection from "../component/home/RewriteChildhoodSection";
import Footer from "../component/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PartnersBar />
      <MissionBanner />
      <PathsSection />
      <ProgramsSection />
      <StatsSection />
      <StoriesSection />
      <CampaignsSection />
      <RewriteChildhoodSection />
    </div>
  );
};

export default HomePage;
