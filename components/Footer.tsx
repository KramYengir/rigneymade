import React from "react";
import Image from "next/image";
import { Arimo } from "next/font/google";
import Link from "next/link";

const arimo = Arimo({
  weight: ["600", "400", "500", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-rm-primary-950 pt-64 mt-36 text-white">
      <div className="flex flex-wrap gap-x-12 gap-y-24 items-start justify-evenly px-12">
        <img
          src={"/images/logo-title-large-white.svg"}
          alt="rigneymade logo - a handwritten r m"
          className="h-20 xl:h-24 w-auto mx-auto sm:mx-0"
        />
        <div className="flex items-start gap-36 md:gap-64">
          <div className="grid gap-2 md:gap-4">
            <p className="uppercase font-bold">Navigation</p>
            <hr className="border-white/20 dark:border-neutral-900/20" />
            <ul className="grid gap-2 md:gap-4">
              <Link href="/" className="capitalize hover:font-semibold">
                home
              </Link>
              <Link href="/about" className="capitalize hover:font-semibold">
                about us
              </Link>
              <Link href="/services" className="capitalize hover:font-semibold">
                services
              </Link>
              <Link href="contact" className="capitalize hover:font-semibold">
                contact us
              </Link>
              <Link href="faq" className="capitalize hover:font-semibold">
                FAQ
              </Link>
            </ul>
          </div>
          <div className="grid gap-2 md:gap-4">
            <p className="uppercase font-bold">Services</p>
            <hr className="border-white/20 dark:border-neutral-900/20" />
            <ul className="grid gap-2 md:gap-4">
              <li>
                <p className="capitalize">Website Design</p>
              </li>
              <li>
                <p className="capitalize">Website Optimization</p>
              </li>
              <li>
                <p className="capitalize">Logo Design</p>
              </li>
              <li>
                <p className="capitalize">Digital Solutions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 w-full mt-24 pb-2 text-center">
        <img
          src="/images/rm-logo-white.svg"
          alt="rigney made logo"
          className="h-6"
        />
        <small>
          RigneyMade {new Date().getFullYear()} &copy; - All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
