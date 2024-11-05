import React from "react";
import AboutUsSection from "@/components/About/AboutUsSection";
import ToolsSection from "@/components/About/ToolsSection";
import ValuesSection from "@/components/About/ValuesSection";

const AboutPage = () => {
  return (
    <div>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">About Us</h1>
        <p className="h1-sub-heading">- our story -</p>
      </div>
      <AboutUsSection />
      <ValuesSection />
      <ToolsSection />
    </div>
  );
};

export default AboutPage;
