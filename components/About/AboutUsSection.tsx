import React from "react";

const AboutUsSection = () => {
  return (
    <section>
      <div className="rm-container grid md:grid-cols-2 items-center justify-center gap-y-12 py-32">
        <div className="relative grid mx-auto rounded-full overflow-hidden">
          <img
            src={"/images/profile-img.webp"}
            alt="profile picture of Mark Rigney"
            className=" h-80 w-auto"
          />
        </div>
        <div className="grid gap-2">
          <h2 className="uppercase text-2xl lg:text-4xl font-light px-2 sm:px-0">
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
