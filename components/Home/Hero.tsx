import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImgLight from "@/assets/images/hero-img-light.webp";
import heroImgDark from "@/assets/images/hero-img-dark.webp";

const Hero = () => {
  return (
    <section className="rm-container grid md:grid-cols-2 gap-8 items-center justify-evenly min-h-[90vh] pt-24">
      {/* heading & call to action */}
      <div className="grid gap-8 max-w-prose text-balance">
        <h1 className="text-4xl lg:text-6xl font-medium">
          <span className="text-rm-primary-600 dark:text-rm-primary-500">
            Small Business
          </span>{" "}
          in need of a
          <span className="text-rm-primary-600 dark:text-rm-primary-500">
            {" "}
            Website
          </span>{" "}
          or
          <span className="text-rm-primary-600 dark:text-rm-primary-500">
            {" "}
            Logo
          </span>
          ?
        </h1>
        <p className="sm:text-lg max-w-lg">
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
      <div className="flex-1 mt-auto md:mt-0">
        <Image
          src={heroImgLight}
          alt="Hero Image"
          className="z-10 dark:hidden"
        />
        <Image
          src={heroImgDark}
          alt="Hero Image"
          className="z-10 hidden dark:block"
        />
      </div>
    </section>
  );
};

export default Hero;
