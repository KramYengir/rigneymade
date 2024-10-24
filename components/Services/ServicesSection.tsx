import React from "react";

const ServicesSection = () => {
  return (
    <section className="rm-container pb-36">
      {/* web development services */}
      <div className="flex flex-wrap justify-evenly items-center gap-x-4 gap-y-16 mt-24 mb-32">
        {/* image */}
        <div className="flex flex-col">
          <img
            src={"/images/web-dev.png"}
            alt="profile picture of Mark Rigney"
            className="h-48 md:h-72 w-auto"
          />
        </div>

        {/* text */}
        <div className="flex-auto grid gap-12 max-w-prose">
          <div className="grid gap-2">
            <div className="grid">
              {/* <p className="uppercase tracking-wider text-xs bg-rm-primary-600/25 px-4 py-1 text-center rounded-t-lg max-w-fit">
                  Our Primary Service
                </p> */}
              <h2 className="uppercase text-3xl lg:text-4xl tracking-wider font-light">
                <span className="font-bold">Web</span> Development
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptates fugit placeat, ea repellendus enim, aspernatur, quasi
              iure rerum quisquam dolores quia libero ipsum ullam minus tempora
              beatae? Ea, ullam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga delectus officiis, odit repudiandae facilis minus
              provident et doloribus ipsam eius magnam id nihil aliquid iusto.
              Reiciendis deleniti ea libero!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* logo design services */}
      <div className="flex flex-wrap justify-evenly md:flex-row-reverse gap-x-4 gap-y-12 items-center mt-24">
        {/* image */}
        <div className="flex flex-col">
          <img
            src={"/images/logo-design.png"}
            alt="profile picture of Mark Rigney"
            className="h-48 md:h-72 w-auto"
          />
        </div>

        {/* text */}
        <div className="grid gap-12 max-w-prose">
          <div className="grid gap-2">
            <h2 className="uppercase text-4xl tracking-wider font-light">
              <span className="font-bold">Logo</span> Design
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptates fugit placeat, ea repellendus enim, aspernatur, quasi
              iure rerum quisquam dolores quia libero ipsum ullam minus tempora
              beatae? Ea, ullam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga delectus officiis, odit repudiandae facilis minus
              provident et doloribus ipsam eius magnam id nihil aliquid iusto.
              Reiciendis deleniti ea libero!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Responsive
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                tenetur incidunt ducimus molestias?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
