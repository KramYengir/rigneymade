import React, { ReactNode } from "react";

interface ProcessCardProps {
  icon: string;
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
    <div className="flex flex-col gap-8 text-center max-w-xs py-12 shadow-lg rounded-2xl border bg-white dark:bg-neutral-900/80 ">
      <img src={icon} alt={title} className="h-24 w-auto mx-auto" aria-hidden />
      <div className="relative grid items-center justify-center">
        <h4 className="text-4xl text-rm-primary-700 dark:text-rm-primary-400 font-bold">
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
