"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arimo } from "next/font/google";

import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import blackLogo from "@/assets/images/rm-logo-black.svg";
import primaryLogo from "@/assets/images/rm-logo-blue.svg";

const arimo = Arimo({
  weight: ["600", "400", "500", "700"],
  subsets: ["latin"],
});

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when the window is resized to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-rm-primary-700 dark:text-rm-primary-200 font-bold"
      : "hover:text-gray-700 dark:hover:text-rm-primary-200";

  return (
    <nav className="fixed bg-white/80 dark:bg-neutral-900/20 backdrop-blur-sm w-full z-10">
      <div className="rm-container">
        <div className="flex items-center justify-between py-6">
          <div className="flex-1 flex justify-between">
            {/* Logo or Brand */}
            <div>
              <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                <Image
                  src={blackLogo}
                  alt="rigneymade logo - a handwritten r m"
                  className="h-12 w-auto dark:hidden"
                />
                <Image
                  src={primaryLogo}
                  alt="rigneymade logo - a handwritten r m"
                  className="h-12 w-auto hidden dark:block"
                />
                <div className="grid text-center">
                  <p
                    className={`${arimo.className} text-xl tracking-wide font-medium`}
                  >
                    RigneyMade
                  </p>
                  <p
                    className={`${arimo.className} uppercase tracking-wider text-xs text-rm-primary-700 dark:text-rm-primary-300`}
                  >
                    Digital Designs
                  </p>
                </div>
              </Link>
            </div>
            {/* Desktop Menu Links */}
            <div className="hidden md:flex sm:space-x-8 items-center">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${linkClasses(
                  "/"
                )}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium ${linkClasses(
                  "/about"
                )}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium ${linkClasses(
                  "/services"
                )}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium ${linkClasses(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-rm-primary-700 dark:text-rm-primary-50 dark:hover:text-rm-primary-200 focus:outline-none"
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
        <div className="md:hidden">
          <div className="grid justify-start px-6 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className={`block py-2 rounded-md text-base font-medium ${linkClasses(
                "/"
              )}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 rounded-md text-base font-medium ${linkClasses(
                "/about"
              )}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block py-2 rounded-md text-base font-medium ${linkClasses(
                "/services"
              )}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block py-2 rounded-md text-base font-medium ${linkClasses(
                "/contact"
              )}`}
              onClick={closeMenu}
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
