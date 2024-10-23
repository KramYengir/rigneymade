import React from "react";
import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
  {
    image: "/images/ferryhill-portfolio-mockup.webp",
    imageDark: "/images/ferryhill-portfolio-mockup.webp",
    imageAlt: "laptop and mobile phone mockup showing ferryhill website",
    title: "Ferryhill Fish & Chips",
    productType: "Website & Logo",
    description:
      "An informative website for a popular Fish and Chip restaurant in Manchester",
    link: "https://www.ferryhillfishandchips.com",
  },
  {
    image: "/images/rigney-reviews-portfolio-mockup.webp",
    imageDark: "/images/rigney-reviews-portfolio-mockup.webp",
    imageAlt: "laptop and mobile phone mockup showing rigney reviews website",
    title: "Rigney Reviews",
    productType: "Website & Logo",
    description:
      "A review blog template, allowing  clients to update blog content independently via a headless CMS",
    link: "https://www.rigneyreviews.com",
  },
  {
    image: "/images/bgcm-logo-black.png",
    imageDark: "/images/bgcm-logo-white.png",
    imageAlt:
      "two business card mockups, one black and one white, showing the logo for brian grimes cabinet making",
    title: "BG Cabinet Making",
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
              imageUrl={item.image}
              imageDarkUrl={item.imageDark}
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
