import React from "react";
import Image from "next/image";
import profileImg from "@/assets/images/profile-img.webp";

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="rm-container">
        <div className="grid gap-2 justify-center text-center py-24">
          <h2 className="h2">Who we are</h2>
          <p className="sub-heading">- our story -</p>
        </div>
        <div className="grid sm:grid-cols-2 items-center gap-y-12">
          <div className="relative grid mx-auto rounded-full overflow-hidden">
            <Image
              src={profileImg}
              alt="profile picture of Mark Rigney"
              className=" h-80 w-auto"
            />
          </div>
          <p className=" max-w-prose">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
