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
          <p className="max-w-96 text-center md:text-left text-balance px-2 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit
            quae repudiandae dolor, neque iusto numquam, voluptatibus odio
            impedit labore illum? Fugit animi officia inventore delectus sit
            maiores expedita. Eos?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit
            quae repudiandae dolor, neque iusto numquam, voluptatibus odio
            impedit labore illum? Fugit animi officia inventore delectus sit
            maiores expedita. Eos?
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
