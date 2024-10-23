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
    <div className="grid gap-2 min-h-[460px] max-w-80 py-6 px-6 shadow-lg shadow-rm-primary-950/80 rounded-lg border-b-8 border-rm-primary-700 bg-white/95 dark:bg-inherit dark:bg-gradient-to-b dark:from-neutral-50/20 ">
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
      <div className="flex flex-col justify-evenly gap-2 ">
        <div className="grid justify-start">
          <h3 className="text-2xl xl:text-2xl text-balance text-rm-primary-900 dark:text-rm-primary-50 font-extrabold">
            {title}
          </h3>
          <p className="text-sm font-light">{productType}</p>
        </div>
        <p className="leading-relaxed">{description}</p>
        <Link href={link} className="btn-primary">
          Check it out
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
