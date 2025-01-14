import Hero from "@/components/Home/Hero";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrowImg from "@/assets/images/rm-arrow-down.webp";
import arrowDarkImg from "@/assets/images/rm-arrow-down-dark.webp";
import ProcessSection from "@/components/Home/ProcessSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import AboutSection from "@/components/Home/AboutSection";

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* what we do section */}
      <section>
        <div className="grid gap-2 justify-center text-center h2-bg">
          <h2 className="h2">What we do</h2>
          <p className="sub-heading">- how we can help -</p>
        </div>
        <div className="rm-container flex flex-wrap justify-center gap-8 md:gap-x-20 py-16 px-4 md:px-0 sm:mt-20 bg-white dark:bg-transparent  shadow-lg dark:shadow-none">
          {/* Website Design Card */}
          <article className="sm:min-w-96 flex flex-col items-start gap-4 p-8 ">
            <div className="relative">
              {/* <p className="absolute -top-3 uppercase tracking-widest text-xs font-semibold">
                Our Primary Service
              </p> */}
              <h3 className="uppercase text-2xl md:text-3xl xl:text-5xl font-extrabold text-rm-primary-700 dark:text-rm-primary-500">
                Web Development
              </h3>
            </div>
            <p className="max-w-sm md:max-w-md lg:max-w-lg">
              We craft custom, responsive websites tailored to your business
              needs. By building from scratch, we ensure a unique and
              high-performing online presence that engages visitors across all
              devices, providing an exceptional user experience without the
              constraints of templates.
            </p>
            <Link href="/services" className="btn-secondary mt-auto">
              More Info
            </Link>
          </article>

          {/* Logo Design Card */}
          <article className="sm:min-w-96 flex flex-col items-start gap-4 p-8 bg-gray-100 dark:bg-neutral-800/90 rounded-xl">
            <h3 className="uppercase text-2xl md:text-3xl xl:text-5xl font-extrabold text-rm-primary-950 dark:text-white">
              Logo Design
            </h3>
            <p className="max-w-sm md:max-w-md lg:max-w-lg ">
              Our bespoke logo designs capture the essence of your brand. We
              create versatile logos that stand out across various platforms,
              ensuring they are memorable and adaptable for everything from
              business cards to billboards, helping to establish a strong and
              cohesive brand identity.
            </p>
            <Link href="/services" className="btn-secondary mt-auto">
              More Info
            </Link>
          </article>
        </div>

        <div className="relative mt-24">
          <p className="mx-auto font-medium text-center text-balance text-2xl sm:text-4xl max-w-xs sm:max-w-screen-md">
            Whether it&apos;s a{" "}
            <span className="font-bold text-rm-primary-700 dark:text-rm-primary-500">
              Website
            </span>{" "}
            or{" "}
            <span className="font-bold text-rm-primary-700 dark:text-rm-primary-500">
              Logo
            </span>
            , the{" "}
            <span className="italic font-medium text-rm-primary-700 dark:text-rm-primary-500">
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
      <AboutSection />
    </>
  );
};

export default HomePage;
