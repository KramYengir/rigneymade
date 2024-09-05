"use client";

import React from "react";
import Image from "next/image";
import desktopBG from "../assets/images/rigneymade-bg.webp";
import mobileBG from "../assets/images/rigneymade-bg-mobile.webp";
import desktopDarkBG from "../assets/images/rigneymade-bg-dark.webp";
import mobileDarkBG from "../assets/images/rigneymade-bg-mobile-dark.webp";

const BackgroundImage = () => {
  return (
    <>
      {/* Light Mode Images */}
      <div className="fixed inset-0 -z-10 block dark:hidden">
        <Image
          src={desktopBG}
          alt="faded background image of various web development graphics"
          className="hidden lg:block absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />
        <Image
          src={mobileBG}
          alt="faded background image of various web development graphics"
          className="lg:hidden absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />
      </div>

      {/* Dark Mode Images */}
      <div className="fixed inset-0 -z-10 hidden dark:block">
        <Image
          src={desktopDarkBG}
          alt="faded background image of various web development graphics"
          className="hidden lg:block absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />
        <Image
          src={mobileDarkBG}
          alt="faded background image of various web development graphics"
          className="lg:hidden absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />
      </div>
    </>
  );
};

export default BackgroundImage;
