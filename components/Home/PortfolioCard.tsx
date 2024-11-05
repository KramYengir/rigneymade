import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  imageUrl: string;
  imageDarkUrl: string;
  imageAlt: string;
  title: string;
  productType: string;
  description: string;
  link: string;
}

const PortfolioCard = ({
  imageUrl,
  imageDarkUrl,
  imageAlt,
  title,
  productType,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <div className="grid gap-2 min-h-[480px] max-w-80 py-6 px-6 shadow-xl shadow-gray-400 dark:shadow-rm-primary-800/60 rounded-lg bg-white/95 dark:bg-inherit dark:bg-gradient-to-b dark:from-neutral-50/20">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-36 w-auto mx-auto dark:hidden"
      />
      <img
        src={imageDarkUrl}
        alt={imageAlt}
        className="hidden h-36 w-auto mx-auto dark:block"
      />
      <div className="flex flex-col justify-between gap-2 ">
        <div className="grid justify-start">
          <h3 className="uppercase text-xl xl:text-xl text-balance text-rm-primary-700 dark:text-rm-primary-50 font-extrabold">
            {title}
          </h3>
          <p className="text-sm font-light">{productType}</p>
        </div>
        <p className="leading-relaxed">{description}</p>
        <div className="flex flex-col gap-2">
          <a href={link} className="btn-primary">
            Check it out
          </a>
          {/* <Link href={"/services"} className="btn-secondary">
            See Testimonial
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
