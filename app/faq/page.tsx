import React from "react";
import Link from "next/link";
import faqItems from "@/data/faqItems";
import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
  title: "FAQ | RigneyMade",
  description:
    "Have questions about RigneyMade? Visit our FAQ page for answers to common questions about our website and logo design services, pricing, timelines, and more",
};

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
      <div className="flex justify-center mx-auto mt-16">
        <img
          src="/images/faq_bubble_SVG.svg"
          alt="FAQ Bubble"
          width={480}
          className="dark:hidden"
        />
        <img
          src="/images/faq_bubble_dark_SVG.svg"
          alt="FAQ Bubble"
          width={480}
          className="hidden dark:block"
        />
      </div>
      <FAQ
        items={faqItems}
        categories={["Web Development", "Logo Design", "General"]}
      />
    </>
  );
};

export default FAQPage;
