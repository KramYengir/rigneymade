import React from "react";
import faqItems from "@/data/faqItems";
import FAQ from "@/components/FAQ/FAQ";

const FAQPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">FAQ</h1>
        <p className="sub-heading">- Frequently Asked Questions -</p>
      </div>
      <FAQ
        items={faqItems}
        categories={["Web Development", "Logo Design", "General"]}
      />
    </>
  );
};

export default FAQPage;
