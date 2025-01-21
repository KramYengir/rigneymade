import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center py-16 h2-bg">
        <h2 className="h2">Who we are</h2>
        <p className="sub-heading">- our story -</p>
      </div>
      <div className="rm-container flex flex-wrap items-center justify-center gap-x-32 gap-y-12 py-32">
        <div className="rounded-sm overflow-hidden border-8 border-transparent shadow-lg shadow-black/60 dark:border-rm-primary-50">
          <img
            src={"/images/me-with-camera.webp"}
            alt="profile picture of Mark Rigney"
            className=" h-96 w-auto"
          />
        </div>
        <div className="grid gap-2">
          <h3 className="uppercase text-2xl sm:text-3xl xl:text-4xl font-bold text-left px-2 sm:px-0">
            <span className="font-semibold text-lg sm:text-xl xl:text-2xl">
              Hi, I'm Mark{" "}
            </span>
            <br /> Your Partner in <br />
            Web & Logo Design
          </h3>
          <p className="max-w-md text-left px-2 sm:px-0">
            With a background in Software Development and a real enthusiasm for
            helping small businesses succeed, I strive to simplify the digital
            aspects for those who find it daunting. From developing captivating
            websites to creating custom logos, I am focused on making digital
            services more approachable, personal, and impactful.
          </p>
          <Link
            href={"/about"}
            className="btn-secondary mt-4 justify-self-start"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
