import Link from "next/link";
import React from "react";
import {
  Check,
  CheckCheck,
  CheckCircle,
  CheckCircleIcon,
  CheckSquareIcon,
} from "lucide-react";

interface PricingCardProps {
  headingA: string;
  headingB: string;
  description: string;
  bullets: string[];
  startingAt: boolean;
  price: string;
  monthlyPlan: boolean;
}

const PricingCard = ({
  headingA,
  headingB,
  description,
  bullets,
  startingAt,
  price,
  monthlyPlan,
}: PricingCardProps) => {
  if (!monthlyPlan)
    return (
      <div
        className={`min-h-[500px] max-w-sm flex flex-col items-center justify-start text-center px-6 pt-12 pb-24 border-t-8 border-rm-primary-700 rounded-md shadow-xl shadow-rm-primary-950/60 dark:shadow-rm-primary-600/40 bg-stone-50 dark:bg-inherit dark:bg-gradient-to-b dark:from-neutral-50/20`}
      >
        <h4 className="text-2xl uppercase tracking-wider text-center mb-2">
          <span className="text-rm-primary-700 dark:text-rm-primary-400 font-bold">
            {headingA}{" "}
          </span>
          {headingB}
        </h4>
        <p className="max-w-[36ch] font-light text-balance mb-6">
          {description}
        </p>
        <ul className="grid gap-2 text-left text-sm text-balance font-medium list-inside mb-12">
          {bullets.map((item, index) => (
            <li key={index} className="flex items-center gap-2 font-light">
              <span className="text-rm-primary-700 text-xl">
                <CheckCircle />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="font-light capitalize">
          {startingAt ? "starting at" : "only"}
        </p>
        <p className="text-4xl md:text-5xl font-extrabold text-rm-primary-700 dark:text-rm-primary-400">
          {price}
        </p>
        <Link href="/contact" className="btn-secondary mt-8">
          Get Started!
        </Link>
      </div>
    );
  else
    return (
      <div
        className={`min-h-96 max-w-screen-sm flex flex-col items-center justify-start text-center px-6 pt-12 pb-24 mx-auto dark:border-8 dark:border-rm-primary-100 rounded-md shadow-xl shadow-rm-primary-950/60 dark:shadow-rm-primary-600/40 bg-gradient-radial from-rm-primary-900  to-rm-primary-950 dark:bg-inherit dark:bg-gradient-to-b dark:from-neutral-50/20 text-white`}
      >
        <h4 className="text-3xl uppercase tracking-wider text-center mb-2">
          <span className="text-rm-primary-50 dark:text-rm-primary-400 font-extrabold">
            {headingA}{" "}
          </span>
          {headingB}
        </h4>
        <p className="uppercase text-sm font-semibold text-balance tracking-wider mb-12">
          {description}
        </p>
        <ul className="grid md:grid-cols-2 gap-y-2 gap-x-12 justify-center text-left text-sm text-balance font-medium list-inside mb-12">
          {bullets.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-white font-light"
            >
              <span className="text-xl">
                <CheckCircle />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-6xl text-rm-primary-50 font-extrabold">
          {price}
          <span className="text-sm font-medium text-neutral-50/80">/month</span>
        </p>
        <Link href="/contact" className="btn-primary mt-12">
          Get Started!
        </Link>
      </div>
    );
};

export default PricingCard;
