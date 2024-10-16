import React from "react";
import Image from "next/image";
import Link from "next/link";
import mockupFerryhill from "@/assets/images/mockup-ferryhill.webp";
import mockupBGCM from "@/assets/images/mockup-bgcm.png";
import mockupReviews from "@/assets/images/mockup-reviews.webp";
import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
  {
    image: mockupFerryhill,
    imageAlt: "laptop and mobile phone mockup showing ferryhill website",
    title: "Ferryhill Fish & Chips",
    productType: "Website",
    description:
      "An informative website for a popular Fish and Chip restaurant in Manchester",
    link: "www.ferryhill.com",
  },
  {
    image: mockupReviews,
    imageAlt: "laptop and mobile phone mockup showing rigney reviews website",
    title: "Rigney Reviews",
    productType: "Website",
    description:
      "A review blog template, allowing  clients to update blog content independently via a headless CMS",
    link: "www.rigneyreviews.com",
  },
  {
    image: mockupBGCM,
    imageAlt:
      "two business card mockups, one black and one white, showing the logo for brian grimes cabinet making",
    title: "BGCM",
    productType: "Logo",
    description:
      "A meaningful logo for a fast-growing cabinet making company in Ireland - Brian Grimes Cabinet Making",
    link: "https://www.instagram.com/bgcabinetmaking/?hl=en-gb",
  },
];

const PortfolioSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center py-16 h2-bg">
        <h2 className="h2">our portfolio</h2>
        <p className="sub-heading">- Some of our work -</p>
      </div>

      <ul className="flex flex-wrap gap-8 gap-y-12 items-center justify-evenly py-32">
        {portfolioItems.map((item, index) => (
          <li key={index}>
            <PortfolioCard
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              productType={item.productType}
              description={item.description}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioSection;
