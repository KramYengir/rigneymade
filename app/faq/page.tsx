import React from "react";
import Link from "next/link";
import faqItems from "@/data/faqItems";
import FAQ from "@/components/FAQ/FAQ";

const FAQPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">FAQ</h1>
        <p className="sub-heading">- Frequently Asked Questions -</p>
      </div>
      <p className="font-light text-center text-balance mx-auto max-w-prose px-4 mt-12">
        Find answers to common questions about our services below. If you
        don&apos;t see what you&apos;re looking for, feel free to reach out
        through our{" "}
        <Link href={"/contact"} className="font-semibold">
          Contact page
        </Link>
        .
      </p>
      <FAQ
        items={faqItems}
        categories={["Web Development", "Logo Design", "General"]}
      />
    </>
  );
};

export default FAQPage;
