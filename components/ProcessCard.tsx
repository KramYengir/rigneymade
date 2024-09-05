import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ProcessCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  number: string;
}

const ProcessCard = ({
  icon,
  title,
  description,
  number,
}: ProcessCardProps) => {
  return (
    <div className="relative grid gap-2 text-center max-w-xs py-12 shadow-md rounded-2xl bg-white/80 dark:bg-neutral-900/40 backdrop-blur-sm">
      <Image
        src={icon}
        alt={title}
        className="h-32 w-auto mx-auto"
        aria-hidden
      />
      <h4 className="text-xl sm:text-2xl text-rm-blue-700 dark:text-rm-blue-400 font-bold">
        {title}
      </h4>
      <p className="px-16 text-balance">{description}</p>
      <p className="absolute inset-0 top-[5%] grid items-center text-8xl font-bold text-rm-blue-600/20 dark:text-rm-blue-400/20">
        {number}
      </p>
    </div>
  );
};

export default ProcessCard;
