"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Arimo } from "next/font/google";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const arimo = Arimo({
  weight: ["600", "400", "500", "700"],
  subsets: ["latin"],
});

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle shadow effect when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      : "hover:scale-105 hover:text-rm-primary-800/70 dark:hover:text-rm-primary-200";

  return (
    <nav
      className={`fixed w-full z-10 transition-all backdrop-blur-md ${
        isScrolled
          ? "bg-neutral-50/80 shadow-md dark:bg-stone-950/80"
          : "bg-neutral-50/80 dark:bg-transparent"
      }`}
    >
      <div className="rm-container">
        <div className="flex items-center justify-between py-6">
          <div className="flex-1 flex justify-between">
            {/* Logo or Brand */}

            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <img
                src="/images/logo-web-title-dark.svg"
                alt="rigneymade logo - a handwritten r m"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/images/logo-web-title-light.svg"
                alt="rigneymade logo - a handwritten r m"
                className="h-10 w-auto hidden dark:block"
              />
            </Link>

            {/* Desktop Menu Links */}
            <div className="uppercase font-semibold text-xs hidden md:flex sm:space-x-8 items-center">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md ${linkClasses("/")}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md ${linkClasses("/about")}`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 rounded-md ${linkClasses("/services")}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md ${linkClasses("/contact")}`}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className={`px-3 py-2 rounded-md text-sm font-medium ${linkClasses(
                  "/faq"
                )}`}
              >
                FAQ
              </Link>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
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
        <div className="md:hidden dark:bg-neutral-800/90 shadow-md">
          <div className="grid text-center px-6 pt-2 pb-3 space-y-3 uppercase font-semibold text-sm">
            <Link
              href="/"
              className={`block py-2 rounded-md ${linkClasses("/")}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 rounded-md ${linkClasses("/about")}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block py-2 rounded-md ${linkClasses("/services")}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block py-2 rounded-md ${linkClasses("/contact")}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className={`block py-2 rounded-md ${linkClasses("/faq")}`}
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <div className="mx-auto" onClick={closeMenu}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
