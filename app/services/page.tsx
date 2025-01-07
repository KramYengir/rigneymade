import React from "react";
import ServicesSection from "@/components/Services/ServicesSection";
import PricingSection from "@/components/Services/PricingSection";
import AnyQuestions from "@/components/AnyQuestions";

export const metadata = {
  title: "Services | RigneyMade",
  description:
    "Explore RigneyMade’s services: custom website development and logo design tailored to small and new businesses. Affordable plans, professional designs, and digital solutions to elevate your brand.",
};

const ServicesPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Services</h1>
        <p className="h1-sub-heading">- what we do -</p>
      </div>
      <ServicesSection />
      <PricingSection />

      {/* have any questions section */}
      <AnyQuestions />
    </>
  );
};

export default ServicesPage;
