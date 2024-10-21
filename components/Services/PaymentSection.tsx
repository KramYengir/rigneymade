import React from "react";
import PaymentCard from "./PaymentCard";

const products = [
  {
    headingA: "Web",
    headingB: "Development",
    description: "A standard single or multi page small business website",
    bullets: [
      "Free Hosting",
      "1 x Year of Support",
      "Domain Managment",
      "No Contracts",
    ],
    startingAt: true,
    price: "£500",
    yearly: false,
  },
  {
    headingA: "Logo",
    headingB: "Design",
    description: "A professional logo to represent your brand",
    bullets: [
      "All necessary formats",
      "2 follow-Up Revisions",
      "+1 Alternative Design",
      "100% Custom Work",
    ],
    startingAt: false,
    price: "£350",
    yearly: false,
  },
  {
    headingA: "Complete",
    headingB: "",
    description: "Design - Development - Support",
    bullets: [
      "Free Hosting",
      "24/7 Support",
      "Unlimited Updates",
      "Google Analytics",
      "Free Custom Domain",
      "Logo Included",
    ],
    startingAt: false,
    price: "£350",
    yearly: true,
  },
];

const PaymentSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h2-bg">
        <h2 className="h2">Pricing</h2>
        <p className="sub-heading">- what we offer -</p>
        <p className="text-balance font-light leading-6 px-6 sm:px-0 text-center max-w-prose mx-auto">
          When it comes to paying for a service, we provide two options which we
          feel are felxible enought to suit most customer needs.
        </p>
      </div>
      <div className="rm-container">
        <div className="grid gap-2 justify-center text-center py-24">
          <h3 className="text-xl uppercase  tracking-wider">
            <span className="text-rm-primary-700 dark:text-rm-primary-600 font-bold">
              01. Product
            </span>{" "}
            Plan
          </h3>
          <p className="font-light text-balance">
            This will be a once-off purchase of a specific product
          </p>
        </div>
        <div className="flex flex-wrap gap-8 gap-y-12 items-center justify-evenly py-6">
          <PaymentCard
            headingA={products[0].headingA}
            headingB={products[0].headingB}
            description={products[0].description}
            bullets={products[0].bullets}
            startingAt={products[0].startingAt}
            price={products[0].price}
            yearlyPlan={products[0].yearly}
          />
          <PaymentCard
            headingA={products[1].headingA}
            headingB={products[1].headingB}
            description={products[1].description}
            bullets={products[1].bullets}
            startingAt={products[1].startingAt}
            price={products[1].price}
            yearlyPlan={products[1].yearly}
          />
        </div>
        <div className="grid gap-2 justify-center text-center py-24">
          <h3 className="text-xl uppercase  tracking-wider">
            <span className="text-rm-primary-700 dark:text-rm-primary-600 font-bold">
              02. Yearly
            </span>{" "}
            Plan
          </h3>
          <p className="font-light text-balance max-w-prose">
            This is a 12-month contract where I essentially work for you,
            designing, developing and managing your website and/or logo
          </p>
        </div>
        <PaymentCard
          headingA={products[2].headingA}
          headingB={products[2].headingB}
          description={products[2].description}
          bullets={products[2].bullets}
          startingAt={products[2].startingAt}
          price={products[2].price}
          yearlyPlan={products[2].yearly}
        />
      </div>
    </section>
  );
};

export default PaymentSection;
