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
    <div className="items-stretch grid gap-6 text-center max-w-xs py-12 shadow-md rounded-2xl bg-white/80 dark:bg-neutral-900/40 backdrop-blur-sm">
      <Image
        src={icon}
        alt={title}
        className="h-32 w-auto mx-auto"
        aria-hidden
      />
      <div className="relative grid items-center justify-center">
        <h4 className="text-xl sm:text-2xl text-rm-blue-700 dark:text-rm-blue-400 font-bold">
          {title}
        </h4>
        <p className="absolute left-[50%] -translate-x-[50%] grid items-center text-8xl font-bold text-rm-blue-600/20 dark:text-rm-blue-400/20">
          {number}
        </p>
      </div>
      <p className="px-16 text-balance">{description}</p>
    </div>
  );
};

export default ProcessCard;
