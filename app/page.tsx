import Hero from "@/components/Home/Hero";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrowImg from "@/assets/images/rm-arrow-down.webp";
import arrowDarkImg from "@/assets/images/rm-arrow-down-dark.webp";
import ProcessSection from "@/components/Home/ProcessSection";
import PortfolioSection from "@/components/Home/PortfolioSection";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* what we do section */}
      <section className="rm-container">
        <div className="grid gap-2 justify-center text-center py-24">
          <h2 className="h2">What we do</h2>
          <p className="sub-heading">- how we can help -</p>
        </div>
        <div className="grid md:flex gap-y-16 justify-evenly sm:my-24">
          <article className="grid justify-items-center text-center text-balance gap-4 max-w-xs sm:max-w-sm">
            <h3 className="uppercase text-xl sm:text-2xl">
              <span className="font-medium text-rm-blue-700 dark:text-rm-blue-600">
                Website
              </span>{" "}
              Design
            </h3>
            <p>
              Performant & Responsive Websites built from scratch - no builders
              or templates. Our websites are designed to suit your needs.
            </p>
            <Link href="/services" className="btn-primary">
              More Info
            </Link>
          </article>
          <hr className="w-12 mx-auto md:hidden border-t-2 border-rm-blue-700 dark:border-rm-blue-600" />
          <article className="grid justify-items-center text-center text-balance gap-4 max-w-xs sm:max-w-sm">
            <h3 className="uppercase text-xl sm:text-2xl ">
              {" "}
              <span className="font-medium text-rm-blue-700 dark:text-rm-blue-600">
                Logo
              </span>{" "}
              Design
            </h3>
            <p>
              Bespoke Logo Design provided in various colors, formats and sizes
              to suit any need - whether it be a business card or a billboard.
            </p>
            <Link href="/services" className="btn-primary">
              More Info
            </Link>
          </article>
        </div>
        <div className="relative mt-24">
          <p className="mx-auto font-medium text-center text-balance text-2xl sm:text-4xl max-w-xs sm:max-w-screen-md">
            Whether it&apos;s a{" "}
            <span className="font-medium text-rm-blue-700 dark:text-rm-blue-600">
              Website
            </span>{" "}
            or{" "}
            <span className="font-medium text-rm-blue-700 dark:text-rm-blue-600">
              Logo
            </span>
            , the{" "}
            <span className="font-medium text-rm-blue-700 dark:text-rm-blue-600">
              process
            </span>{" "}
            is the same
          </p>
        </div>
        <Image
          src={arrowImg}
          alt="arrow"
          className=" aspect-auto h-24 sm:h-36 w-auto dark:hidden mx-auto"
        />
        <Image
          src={arrowDarkImg}
          alt="arrow"
          className=" aspect-auto h-24 sm:h-36 w-auto hidden dark:block mx-auto"
        />
      </section>
      <ProcessSection />
      <PortfolioSection />
    </>
  );
};

export default HomePage;
