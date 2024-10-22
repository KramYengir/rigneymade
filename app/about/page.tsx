import React from "react";
import AboutUsSection from "@/components/About/AboutUsSection";
import ToolsSection from "@/components/About/ToolsSection";

const AboutPage = () => {
  return (
    <div>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">About Us</h1>
        <p className="sub-heading">- our story -</p>
      </div>
      <AboutUsSection />
      <ToolsSection />
    </div>
  );
};

export default AboutPage;
