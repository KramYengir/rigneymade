import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="rm-container grid md:grid-cols-2 gap-8 items-center justify-evenly min-h-[95vh] pt-24">
        {/* heading & call to action */}
        <div className="grid gap-6 mx-auto max-w-prose text-balance">
          <h1
            aria-label="Small Business in need of a Website or Logo?"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          >
            <span className="text-rm-primary-600 dark:text-rm-primary-500 font-extrabold">
              Small Business
            </span>{" "}
            in need of a
            <span className="text-rm-primary-600 dark:text-rm-primary-500 font-extrabold">
              {" "}
              Website
            </span>{" "}
            or
            <span className="text-rm-primary-600 dark:text-rm-primary-500 font-extrabold">
              {" "}
              Logo?
            </span>
          </h1>
          <p className="sm:text-lg max-w-[360px] sm:max-w-lg">
            From design to development, we build everything from the ground up.
            Whether it's a full website or a smart logo, We&apos;ve got you
            covered!
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="btn-primary">
              Our Services
            </Link>
            <Link href="/services" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="flex-1">
          <img
            src="/images/hero-img-light.webp"
            alt="Hero Image"
            className="z-10 dark:hidden"
          />
          <img
            src="/images/hero-img-dark.webp"
            alt="Hero Image"
            className="z-10 hidden dark:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
