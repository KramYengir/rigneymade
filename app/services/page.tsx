import React from "react";
import ServicesSection from "@/components/Services/ServicesSection";
import PricingSection from "@/components/Services/PricingSection";
import Link from "next/link";

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
      <section className="rm-container mt-24 py-12">
        <h2 className="px-2 sm:px-0 text-center text-3xl sm:text-4xl text-rm-primary-700 dark:text-rm-primary-400 font-bold uppercase">
          Have any questions?{" "}
        </h2>
        <div className="flex flex-wrap justify-center gap-12 text-center my-20">
          <div className="flex flex-wrap justify-center gap-4 max-w-xs text-balance">
            <p className="sm:text-xl">
              Drop us a message and we'll be glad to help.
            </p>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-xs text-balance">
            <p className="sm:text-xl">
              Check out our <em>Frequently Asked Questions</em> page.
            </p>
            <Link href="/faq" className="btn-secondary">
              See FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
