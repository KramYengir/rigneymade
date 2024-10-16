import React from "react";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/assets/images/profile-img.webp";

const AboutSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center py-16 h2-bg">
        <h2 className="h2">Who we are</h2>
        <p className="sub-heading">- our story -</p>
      </div>
      <div className="grid md:grid-cols-2 items-center justify-center gap-y-12 py-32">
        <div className="grid mx-auto rounded-xl overflow-hidden border-8 border-rm-primary-800">
          <Image
            src={profileImg}
            alt="profile picture of Mark Rigney"
            className=" h-80 w-auto"
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
