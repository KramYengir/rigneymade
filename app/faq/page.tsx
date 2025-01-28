import React from "react";
import Link from "next/link";
import faqItems from "@/data/faqItems";
import FAQ from "@/components/FAQ/FAQ";
import Head from "next/head";

export const metadata = {
  title: "FAQ | RigneyMade",
  description:
    "Have questions about RigneyMade? Visit our FAQ page for answers to common questions about our website and logo design services, pricing, timelines, and more.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://www.rigneymade.com/faq",
    siteName: "RigneyMade",
    title: "FAQ | RigneyMade",
    description:
      "Have questions about RigneyMade? Visit our FAQ page for answers to common questions about our website and logo design services, pricing, timelines, and more.",
    images: [
      {
        url: "https://www.rigneymade.com/og.png",
        width: 1200,
        height: 630,
        alt: "RigneyMade - Digital Designs",
      },
    ],
  },
};

const FAQPage = () => {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does a website cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A single or multi-page website (up to 5 pages) starts from £800.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a logo cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A logo design costs £400 and includes a brand guide, two revisions, and necessary formats.",
                },
              },
              {
                "@type": "Question",
                name: "Do you make eCommerce websites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We currently don’t offer eCommerce website development. While we prefer creating tailored solutions over using template platforms like Shopify, eCommerce sites are complex. We want to ensure we can deliver exceptional results before offering this service.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer ongoing support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, ongoing support is available through our Complete Package, which costs £300 per month for six months.",
                },
              },
              {
                "@type": "Question",
                name: "Where are you based?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are based in Liverpool, but we work with clients across the UK and Ireland.",
                },
              },
            ],
          })}
        </script>
      </Head>
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
          src="/images/faq_bubble.webp"
          alt="FAQ Bubble"
          width={480}
          className="dark:hidden"
        />
        <img
          src="/images/faq_bubble_dark.webp"
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
