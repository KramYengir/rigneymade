import Image from "next/image";
import React from "react";
import profileImg from "@/assets/images/profile-img.webp";

const AboutUsSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h2">About us</h1>
        <p className="sub-heading">- our story -</p>
      </div>
      <div className="rm-container grid md:grid-cols-2 items-center justify-center gap-y-12 py-32">
        <div className="relative grid mx-auto rounded-full overflow-hidden">
          <Image
            src={profileImg}
            alt="profile picture of Mark Rigney"
            className=" h-80 w-auto"
          />
        </div>
        <div className="grid gap-2">
          <h2 className="uppercase text-2xl font-light px-2 sm:px-0">
            Behind{" "}
            <span className="font-bold text-rm-primary-700">RigneyMade</span>
          </h2>
          <p className="max-w-lg  text-balance px-2 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit
            quae repudiandae dolor, neque iusto numquam, voluptatibus odio
            impedit labore illum? Fugit animi officia inventore delectus sit
            maiores expedita. Eos?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedneque
            iusto numquam, odit quae repudiandae dolor, neque iusto numquam,
            voluptatibus odio impedit labore illum? Fugit animi officia
            inventore delectus sit maiores expedita. Eos?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
