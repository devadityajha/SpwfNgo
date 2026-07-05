import React from "react";
import causeArtwork from "../../assets/images/cause-artwork.png";
import kidsGroup from "../../assets/images/kidsGroup.png";

const campaigns = [
  {
    id: 1,
    title: "Bring Back Daily Meals",
    description:
      "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
    metricLabel: "Donations",
    metricPercentage: 62,
    raised: "₹3,12,000 Raised",
    goal: "₹6,00,000 Goal",
    buttonText: "Support Now",
    themeColor: "#FF5255",
  },
  {
    id: 2,
    title: "Bring Back Daily Meals",
    description:
      "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
    metricLabel: "Meals Donated",
    metricPercentage: 61,
    raised: "6,100 Donated",
    goal: "10,000 Goal",
    buttonText: "Support Now",
    themeColor: "#E4FF4C",
  },
  {
    id: 3,
    title: "Back-To-School Kits",
    description:
      "Equip children with essential school supplies so they can start their learning journey with confidence.",
    metricLabel: "Kits Donated",
    metricPercentage: 46,
    raised: "460 Donated",
    goal: "1,000 Goal",
    buttonText: "Donate a Kit",
    themeColor: "#5FBCFF",
  },
];

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col w-[668px] max-w-xl mx-auto lg:mx-0 relative z-10">
      {/* Header & Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center shrink-0">
          <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
        </div>
        <h3 className="text-[28px] font-semibold text-gray-900 leading-tight">
          {campaign.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 pr-4">
        {campaign.description}
      </p>

      {/* Progress Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[13px] font-semibold text-gray-900">
            {campaign.metricLabel}
          </span>
          <span className="text-[13px] font-semibold text-gray-900">
            {campaign.metricPercentage}% of Goal
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${campaign.metricPercentage}%`,
              backgroundColor: campaign.themeColor,
            }}
          ></div>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-[13px]">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: campaign.themeColor }}
            ></span>
            <span className="text-gray-600">{campaign.raised}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="text-gray-400">{campaign.goal}</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        className="w-full py-3.5 rounded-xl font-semibold text-gray-900 text-[17px] transition-opacity hover:opacity-90"
        style={{ backgroundColor: campaign.themeColor }}
      >
        {campaign.buttonText}
      </button>
    </div>
  );
};

const CampaignsSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FBFAF1] overflow-hidden py-16 lg:py-24 font-sans">
      {/* 
        BACKGROUND IMAGE 
        Locked height to 871px (from your Figma specs) and used object-top 
        so it perfectly cuts off exactly at the second card's progress bar.
      */}
      <img
        src={causeArtwork}
        alt=""
        className="absolute top-0 left-0 w-full h-[600px] object-cover object-top opacity-100 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[40px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        {/* Left Column */}
        <div className="lg:sticky lg:top-24 h-fit flex flex-col justify-start pt-8">
          <div className="max-w-md">
            <h2 className="text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.1] mb-6 text-gray-900">
              Join A Cause That's <br /> Live Right Now
            </h2>
            <p className="text-[15px] text-gray-800 leading-relaxed max-w-sm">
              Support active campaigns that provide education, nutrition, and
              opportunities for children who need them most.
            </p>
          </div>

          {/* FOREGROUND IMAGE */}
          <div className="mt-12 w-full max-w-[600px] -ml-4">
            <img
              src={kidsGroup}
              alt="Children reading and eating together"
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[30px]">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
