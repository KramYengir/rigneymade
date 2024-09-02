"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import blackLogo from "@/assets/images/rm-logo-black.svg";
import blueLogo from "@/assets/images/rm-logo-blue.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 dark:bg-neutral-900/20 backdrop-blur-sm w-full z-10">
      <div className="rm-container">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex justify-between">
            {/* Logo or Brand */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                <Image
                  src={blackLogo}
                  alt="rigneymade logo - a handwritten r m"
                  className="h-12 w-auto dark:hidden"
                ></Image>
                <Image
                  src={blueLogo}
                  alt="rigneymade logo - a handwritten r m"
                  className="h-12 w-auto hidden dark:block"
                ></Image>
              </Link>
            </div>
            {/* Desktop Menu Links */}
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <Link
                href="/"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="grid justify-start px-6 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className="block py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
