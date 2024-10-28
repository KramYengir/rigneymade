import React from "react";
import Link from "next/link";
import faqItems from "@/data/faqItems";
import FAQ from "@/components/FAQ/FAQ";

const FAQPage = () => {
  return (
    <>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">FAQ</h1>
        <p className="h1-sub-heading">- Frequently Asked Questions -</p>
      </div>
      <h2 className="uppercase text-3xl sm:text-5xl 2xl:text-6xl font-extrabold tracking-wider text-center mt-24">
        Got a question?
      </h2>
      <p className="font-light text-center text-balance mx-auto max-w-[72ch] px-4 mt-6">
        Find answers to common questions about our services below. If you
        don&apos;t see what you&apos;re looking for, feel free to reach out
        through our{" "}
        <Link
          href={"/contact"}
          className="font-semibold text-rm-primary-700 dark:text-rm-primary-400 hover:text-rm-primary-600 dark:hover:text-rm-primary-200"
        >
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
