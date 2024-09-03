import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImgLight from "@/assets/images/hero-img-light.webp";
import heroImgDark from "@/assets/images/hero-img-dark.webp";

const Hero = () => {
  return (
    <section className="flex flex-row-reverse sm:flex-row flex-wrap gap-y-6 items-center justify-center py-24 px-4 md:px-0">
      {/* heading & call to action */}
      <div className="grid gap-8 max-w-prose text-balance">
        <h1 className="text-4xl sm:text-6xl font-medium">
          <span className="text-rm-blue-600">Small Business</span> in need of a
          <span className="text-rm-blue-600"> Website</span> or
          <span className="text-rm-blue-600"> Logo</span>?
        </h1>
        <p className="sm:text-xl max-w-lg">
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
      <div className="relative flex-1">
        <Image
          src={heroImgDark}
          alt="Hero Image"
          objectFit="cover"
          className="z-10 dark:hidden"
        />
        <Image
          src={heroImgLight}
          alt="Hero Image"
          objectFit="cover"
          className="z-10 hidden dark:block"
        />
      </div>
    </section>
  );
};

export default Hero;
