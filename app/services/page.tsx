import React from "react";
import ServicesSection from "@/components/Services/ServicesSection";
import PricingSection from "@/components/Services/PricingSection";
import AnyQuestions from "@/components/AnyQuestions";
import Head from "next/head";

export const metadata = {
  title: "Services | RigneyMade",
  description:
    "Explore RigneyMade’s services: custom website development and logo design tailored to small and new businesses. Affordable plans, professional designs, and digital solutions to elevate your brand.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://www.rigneymade.com/services",
    siteName: "RigneyMade",
    title: "Services | RigneyMade",
    description:
      "Explore RigneyMade’s services: custom website development and logo design tailored to small and new businesses. Affordable plans, professional designs, and digital solutions to elevate your brand.",
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

const ServicesPage = () => {
  return (
    <>
      {/* JSON-LD for Services */}
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Development",
            description:
              "Custom single or multi-page websites (up to 5 pages), designed and optimized for your business.",
            provider: {
              "@type": "Organization",
              name: "RigneyMade",
              url: "https://www.rigneymade.com",
            },
            priceRange: "£800+",
            areaServed: [
              {
                "@type": "Country",
                name: "United Kingdom",
              },
              {
                "@type": "Country",
                name: "Ireland",
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Logo Design",
            description:
              "Professional logo design including a brand guide and necessary formats for use.",
            provider: {
              "@type": "Organization",
              name: "RigneyMade",
              url: "https://www.rigneymade.com",
            },
            priceRange: "£400",
            areaServed: [
              {
                "@type": "Country",
                name: "United Kingdom",
              },
              {
                "@type": "Country",
                name: "Ireland",
              },
            ],
          })}
        </script>
      </Head>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h1">Services</h1>
        <p className="h1-sub-heading">- what we do -</p>
      </div>
      <ServicesSection />
      <PricingSection />

      {/* have any questions section */}
      <AnyQuestions />
    </>
  );
};

export default ServicesPage;
