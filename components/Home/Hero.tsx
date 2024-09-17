import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImgLight from "@/assets/images/hero-img-light.webp";
import heroImgDark from "@/assets/images/hero-img-dark.webp";
import { CldImage } from "next-cloudinary";
import CloudImg from "../CloudImg";

const Hero = () => {
  return (
    <section className="rm-container grid md:grid-cols-2 gap-8 items-center justify-evenly min-h-[90vh] pt-24">
      {/* heading & call to action */}
      <div className="grid gap-8 mx-auto max-w-prose text-balance">
        <h1
          aria-label="Small Business in need of a Website or Logo?"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
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
        {/* <Image
          src={heroImgLight}
          alt="Hero Image"
          className="z-10 dark:hidden"
        />
        <Image
          src={heroImgDark}
          alt="Hero Image"
          className="z-10 hidden dark:block"
        /> */}
        <CloudImg
          src={"/hero-img-light_p5lfcr.webp"}
          alt="a mockup of a laptop, phone and business card"
          className="z-10 pl-6 sm:pl-0 dark:hidden"
        />

        <CloudImg
          src={"/hero-img-dark_drrnoj.webp"}
          alt="a mockup of a laptop, phone and business card"
          className="z-10 pl-6 sm:pl-0 hidden dark:block"
        />
      </div>
    </section>
  );
};

export default Hero;
