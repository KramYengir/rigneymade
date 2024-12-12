import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <section>
      <div className="rm-container flex flex-wrap items-center justify-center gap-x-32 gap-y-12 py-16 sm:py-32">
        <div className="rounded-full overflow-hidden">
          <img
            src={"/images/profile-img.webp"}
            alt="profile picture of Mark Rigney"
            className=" h-64 sm:h-96 w-auto"
          />
        </div>

        <div className="grid gap-2">
          <h2 className="max-w-[26ch] uppercase text-2xl lg:text-4xl font-extrabold px-2 sm:px-0">
            <span className="font-medium text-lg sm:text-xl xl:text-2xl">
              one step at a time{" "}
            </span>
            <br />
            Simplifying Digital Solutions for Your Business
          </h2>
          <p className="max-w-lg  text-balance px-2 sm:px-0">
            I'm Mark, an Irish web developer living in Liverpool, with a genuine
            love for helping people. After graduating in Software Development, I
            stepped away from the office world and took a completely different
            path, managing and cooking at a popular fish & chip shop. It was
            during this time that I discovered how much I enjoy helping others
            with their digital needs.
            <br />
            <br />
            After taking on the challenge of making a website for the shop, I
            began dedicating my free time to web development, aiming to start a
            small business that could make digital services more accessible to
            those who might find them daunting. Along the way, I found myself
            also creating logos and graphics for friends and business owners — a
            creative process that turned out to be both enjoyable and
            fulfilling. As a result, RigneyMade expanded to include logo design,
            bringing brands to life with both form and function.
            <br />
            <br />
            At RigneyMade, I bring a commitment to approachability and
            integrity. I&apos;m here to offer down-to-earth, honest support,
            whether you&apos;re just starting out or ready to give your business
            a fresh digital presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
