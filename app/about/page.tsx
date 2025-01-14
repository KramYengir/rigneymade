import React from "react";
import AboutUsSection from "@/components/About/AboutUsSection";
import ToolsSection from "@/components/About/ToolsSection";
import ValuesSection from "@/components/About/ValuesSection";

export const metadata = {
  title: "About Us | RigneyMade",
  description:
    "Learn about RigneyMade, a Liverpool-based business specializing in bespoke website and logo design for small and new businesses. Discover our values, story, and commitment to helping you succeed.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://www.rigneymade.com/about",
    siteName: "RigneyMade",
    title: "About Us | RigneyMade",
    description:
      "Learn about RigneyMade, a Liverpool-based business specializing in bespoke website and logo design for small and new businesses. Discover our values, story, and commitment to helping you succeed.",
    images: [
      {
        url: "https://www.rigneymade.com/og.png",
        width: 1200,
        height: 630,
        alt: "RigneyMade - Digital Designs",
      },
    ],
  },
};

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
