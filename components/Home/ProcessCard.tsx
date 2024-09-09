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
    <div className="flex flex-col gap-8 text-center max-w-xs py-12 shadow-md rounded-2xl bg-white/80 dark:bg-neutral-900/40 ">
      <Image
        src={icon}
        alt={title}
        className="h-24 w-auto mx-auto"
        aria-hidden
      />
      <div className="relative grid items-center justify-center">
        <h4 className="text-4xl text-rm-blue-700 dark:text-rm-blue-400 font-bold">
          {title}
        </h4>
        <p className="absolute left-[50%] -translate-x-[50%] grid items-center text-9xl font-bold text-pink-400/20 dark:text-pink-300/20">
          {number}
        </p>
      </div>
      <p className="tracking-widest px-12 py-6 text-balance">{description}</p>
    </div>
  );
};

export default ProcessCard;
