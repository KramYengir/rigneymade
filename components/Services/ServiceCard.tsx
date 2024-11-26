import React from "react";

interface ServiceCardProps {
  headingA: string;
  headingB: string;
  paragraph: string;
}

const ServiceCard = ({ headingA, headingB, paragraph }: ServiceCardProps) => {
  return (
    <div className="grid gap-2">
      <h4 className="uppercase text-lg tracking-wider">
        {headingA}{" "}
        <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
          {headingB}
        </span>
      </h4>
      <p className="text-balance font-light md:max-w-[30ch]">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
