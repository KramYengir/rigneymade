import Link from "next/link";
import React from "react";

const AnyQuestions = () => {
  return (
    <section className="rm-container mt-24 py-12">
      <h2 className="px-2 sm:px-0 text-center text-3xl sm:text-4xl text-rm-primary-700 dark:text-rm-primary-400 font-bold uppercase">
        Have any questions?{" "}
      </h2>
      <div className="flex flex-wrap justify-center gap-12 text-center my-20">
        <div className="flex flex-wrap justify-center gap-4 max-w-xs text-balance">
          <p className="sm:text-xl">
            Drop us a message and we'll be glad to help.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-xs text-balance">
          <p className="sm:text-xl">
            Check out our <em>Frequently Asked Questions</em> page.
          </p>
          <Link href="/faq" className="btn-secondary">
            See FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestions;
