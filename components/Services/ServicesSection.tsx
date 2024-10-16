import React from "react";
import Image from "next/image";
import developImg from "@/assets/images/web-dev.png";
import designImg from "@/assets/images/logo-design.png";

const ServicesSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h1-bg">
        <h1 className="h2">Services</h1>
        <p className="sub-heading">- what we do -</p>
      </div>
      <div className="rm-container">
        {/* web development services */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-16 mt-24 mb-32">
          {/* image */}
          <div className="flex flex-col mx-auto ">
            <Image
              src={developImg}
              alt="profile picture of Mark Rigney"
              className="h-48 md:h-72 w-auto"
            />
          </div>

          {/* text */}
          <div className="grid gap-12 max-w-prose">
            <div className="grid gap-2">
              <div className="grid">
                <p className="uppercase tracking-wider text-xs bg-rm-primary-600/25 px-4 py-1 text-center rounded-t-lg max-w-fit">
                  Our Primary Service
                </p>
                <h2 className="uppercase text-4xl tracking-wider font-light">
                  <span className="font-bold">Web</span> Development
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                voluptates fugit placeat, ea repellendus enim, aspernatur, quasi
                iure rerum quisquam dolores quia libero ipsum ullam minus
                tempora beatae? Ea, ullam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis fuga delectus officiis, odit repudiandae facilis
                minus provident et doloribus ipsam eius magnam id nihil aliquid
                iusto. Reiciendis deleniti ea libero!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
              <div className="grid gap-2">
                <h4 className="uppercase text-lg tracking-wider">
                  Fully{" "}
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
        <div className="flex flex-wrap md:flex-row-reverse gap-x-4 gap-y-12 items-center mt-24">
          {/* image */}
          <div className="flex flex-col mx-auto ">
            <Image
              src={designImg}
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
                iure rerum quisquam dolores quia libero ipsum ullam minus
                tempora beatae? Ea, ullam.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis fuga delectus officiis, odit repudiandae facilis
                minus provident et doloribus ipsam eius magnam id nihil aliquid
                iusto. Reiciendis deleniti ea libero!
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
              <div className="grid gap-2">
                <h4 className="uppercase text-lg tracking-wider">
                  Fully{" "}
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
                  <span className="font-bold text-rm-primary-700 dark:text-rm-primary-600">
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
      </div>
    </section>
  );
};

export default ServicesSection;
