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
        <div className="rounded-xl overflow-hidden border-8 border-transparent dark:border-rm-primary-50">
          <img
            src={"/images/profile-img.webp"}
            alt="profile picture of Mark Rigney"
            className=" h-96 w-auto"
          />
        </div>
        <div className="grid gap-2">
          <h3 className="uppercase text-2xl sm:text-3xl xl:text-4xl font-bold text-left">
            <span className="font-semibold text-lg sm:text-xl xl:text-2xl">
              Hi, I'm Mark{" "}
            </span>
            <br /> Your Partner in <br />
            Web & Logo Design
          </h3>
          <p className="max-w-md text-center md:text-left  px-2 sm:px-0">
            With a background in Software Development and a genuine passion for
            helping small businesses thrive, I'm here to simplify the digital
            side of things for those who may find it overwhelming. From creating
            engaging websites to designing unique logos, I&apos;m committed to
            making digital services more accessible, personal, and impactful.
          </p>
          <Link
            href={"/about"}
            className="btn-secondary mt-4 justify-self-center sm:justify-self-start"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
