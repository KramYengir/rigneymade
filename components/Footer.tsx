import React from "react";
import Image from "next/image";
import whiteLogo from "@/assets/images/rm-logo-white.svg";
import { Arimo } from "next/font/google";

const arimo = Arimo({
  weight: ["600", "400", "500", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-rm-primary-950 dark:from-rm-50 to-rm-primary-600 dark:to-transparent pt-32 text-white">
      <div className="flex flex-wrap gap-8 gap-y-24 items-start justify-evenly px-12">
        <div className="flex-1 grid sm:flex items-center justify-center">
          <Image
            src={whiteLogo}
            alt="rigneymade logo - a handwritten r m"
            className="h-auto w-24 md:w-32 mx-auto sm:mx-0"
          />
          <div className="grid text-center">
            <p
              className={`${arimo.className} text-3xl tracking-wider font-bold`}
            >
              RigneyMade
            </p>
            <p
              className={`${arimo.className} uppercase tracking-widest text-sm `}
            >
              Digital Designs
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-start justify-evenly gap-12">
          <div className="grid gap-2 md:gap-4">
            <p className="uppercase font-bold">Navigation</p>
            <hr className="border-white/20 dark:border-neutral-900/20" />
            <p className="capitalize">home</p>
            <p className="capitalize">about us</p>
            <p className="capitalize">services</p>
            <p className="capitalize">portfolio</p>
            <p className="capitalize">contact us</p>
          </div>
          <div className="grid gap-2 md:gap-4">
            <p className="uppercase font-bold">Services</p>
            <hr className="border-white/20 dark:border-neutral-900/20" />
            <p className="capitalize">Website Design</p>
            <p className="capitalize">Website Optimization</p>
            <p className="capitalize">Logo Design</p>
            <p className="capitalize">Digital Solutions</p>
          </div>
        </div>
      </div>
      <div className="mt-24 pb-2 text-center">
        <small className="mx-auto ">
          RigneyMade {new Date().getFullYear()} &copy; - All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
