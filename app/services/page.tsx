import React from "react";
import ServicesSection from "@/components/Services/ServicesSection";
import PaymentSection from "@/components/Services/PaymentSection";

const ServicesPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Services</h1>
        <p className="sub-heading">- what we do -</p>
      </div>
      <ServicesSection />
      <PaymentSection />
    </>
  );
};

export default ServicesPage;
