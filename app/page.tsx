import Hero from "@/components/Hero";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="rm-container">
      <Hero />

      {/* what we do section */}
      <section>
        <h2 className="uppercase text-3xl sm:text-4xl font-bold tracking-wider text-center text-rm-blue-700 dark:text-rm-blue-600">
          What we do
        </h2>
        <div className="grid md:flex gap-y-16 justify-evenly my-24">
          <article className="grid justify-items-center text-center text-balance gap-4 max-w-xs sm:max-w-sm">
            <h3 className="uppercase text-xl sm:text-2xl font-medium">
              <span className="text-rm-blue-700 dark:text-rm-blue-600">
                Website
              </span>{" "}
              Design
            </h3>
            <p>
              Performant & Responsive Websites built from scratch - no builders
              or templates. Our websites are designed to suit your needs.
            </p>
            <Link href="/services" className="btn-primary">
              More Info
            </Link>
          </article>
          <hr className="w-12 mx-auto md:hidden border-t-2 border-rm-blue-700 dark:border-rm-blue-600" />
          <article className="grid justify-items-center text-center text-balance gap-4 max-w-xs sm:max-w-sm">
            <h3 className="uppercase text-xl sm:text-2xl font-medium">
              {" "}
              <span className="text-rm-blue-700 dark:text-rm-blue-600">
                Logo
              </span>{" "}
              Design
            </h3>
            <p>
              Bespoke Logo Design provided in various colors, formats and sizes
              to suit any need - whether it be a business card or a billboard.
            </p>
            <Link href="/services" className="btn-primary">
              More Info
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
