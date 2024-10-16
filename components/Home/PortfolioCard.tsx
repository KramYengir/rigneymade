import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  productType: string;
  description: string;
  link: string;
}

const PortfolioCard = ({
  image,
  imageAlt,
  title,
  productType,
  description,
  link,
}: PortfolioCardProps) => {
  return (
    <div className="grid gap-2 min-h-[460px] max-w-80 py-6 px-6 shadow-lg shadow-rm-primary-950/40 rounded-lg border-b-8 border-rm-primary-700 bg-white/95 dark:bg-inherit dark:bg-gradient-to-b dark:from-neutral-50/20 ">
      <Image src={image} alt={imageAlt} className="h-auto w-auto mx-auto" />
      <div className="flex flex-col justify-evenly gap-2 ">
        <div className="grid justify-start">
          <h3 className="text-xl text-balance text-rm-primary-900 dark:text-rm-primary-50 font-bold">
            {title}
          </h3>
          <p className="text-sm font-light">{productType}</p>
        </div>
        <p>{description}</p>
        <Link href={link} className="btn-primary">
          View
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
