import React from "react";
import ServicesSection from "@/components/Services/ServicesSection";
import PricingSection from "@/components/Services/PricingSection";

const ServicesPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Services</h1>
        <p className="sub-heading">- what we do -</p>
      </div>
      <ServicesSection />
      <PricingSection />
    </>
  );
};

export default ServicesPage;
