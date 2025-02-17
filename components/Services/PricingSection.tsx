import React from "react";
import PricingCard from "./PricingCard";
import Link from "next/link";

const products = [
  {
    headingA: "Web",
    headingB: "Development",
    description: "A standard single or multi page small business website",
    bullets: [
      "Up to 5 pages",
      "Free Hosting",
      "6 Months of Support",
      "1 Year Free Custom Domain",
    ],
    startingAt: true,
    price: "£600",
    monthly: false,
  },
  {
    headingA: "Logo",
    headingB: "Design",
    description: "A professional logo to represent your brand",
    bullets: [
      "All Necessary Formats",
      "2 Follow-Up Revisions",
      "1 Alternative Design",
      "Complete Brand Guide",
    ],
    startingAt: false,
    price: "£300",
    monthly: false,
  },
  {
    headingA: "Complete",
    headingB: "Package",
    description: "Design - Development - Support",
    bullets: [
      "Logo Included",
      "Graphics Assistance",
      "Tech Support",
      "Ongoing Updates",
      "Google Analytics",
      "Revisions as needed",
    ],
    startingAt: false,
    price: "£200",
    monthly: true,
  },
];

const PricingSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h2-bg">
        <h2 className="h2">Pricing</h2>
        <p className="sub-heading">- what we offer -</p>
        <p className="section-preface">
          When it comes to paying for a service, we provide two options which we
          feel are flexible enought to suit most customer needs.
        </p>
      </div>
      <div className="rm-container">
        <div className="grid gap-4 justify-center text-center py-24">
          <h3 className="border-b-2 border-rm-primary-950/10 dark:border-rm-primary-50/10 text-xl uppercase tracking-wider pb-2">
            <span className="text-rm-primary-700 dark:text-rm-primary-400 font-bold">
              01. Product
            </span>{" "}
            Plan
          </h3>
          <p className="font-light text-balance">
            This will be a once-off purchase of a specific product
          </p>
        </div>
        <div className="flex flex-wrap gap-8 gap-y-32 items-center justify-evenly pt-6 pb-32">
          <PricingCard
            headingA={products[0].headingA}
            headingB={products[0].headingB}
            description={products[0].description}
            bullets={products[0].bullets}
            startingAt={products[0].startingAt}
            price={products[0].price}
            monthlyPlan={products[0].monthly}
          />
          <PricingCard
            headingA={products[1].headingA}
            headingB={products[1].headingB}
            description={products[1].description}
            bullets={products[1].bullets}
            startingAt={products[1].startingAt}
            price={products[1].price}
            monthlyPlan={products[1].monthly}
          />
        </div>
        <div className="grid gap-4 justify-center text-center py-24">
          <h3 className="border-b-2 border-rm-primary-950/10 dark:border-rm-primary-50/10 text-xl uppercase tracking-wider pb-2">
            <span className="text-rm-primary-700 dark:text-rm-primary-400 font-bold">
              02. Monthly
            </span>{" "}
            Plan
          </h3>
          <p className="font-light text-balance max-w-prose">
            This 6-month contract is ideal for those just starting out, offering
            personalized support as I work alongside you to create, develop, and
            oversee your website and/or logo. I will also help with a range of
            other digital requirements to ensure your business gets off to a
            successful start.
          </p>
        </div>
        <PricingCard
          headingA={products[2].headingA}
          headingB={products[2].headingB}
          description={products[2].description}
          bullets={products[2].bullets}
          startingAt={products[2].startingAt}
          price={products[2].price}
          monthlyPlan={products[2].monthly}
        />
      </div>
    </section>
  );
};

export default PricingSection;
