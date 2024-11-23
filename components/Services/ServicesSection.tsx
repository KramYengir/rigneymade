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
              At RigneyMade, we specialize in helping small and new businesses
              take the next step by creating bespoke websites designed to meet
              their unique needs. Whether you’re looking to establish your
              online presence or elevate an existing site, we craft fully custom
              websites that reflect your vision and goals. We avoid templates
              and builders, ensuring every project is original and tailored to
              you.
            </p>
            <p>
              Our focus is on building high-performing, responsive, and
              user-friendly websites that leave a lasting impression on your
              audience. From planning and design to development and deployment,
              we’re here to make the process seamless, so you can focus on
              growing your business.
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
                Your website will look and perform flawlessly on any device,
                from desktops to tablets and smartphones.
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                High{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Performance
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                We prioritize speed and reliability, creating websites that load
                quickly and provide a smooth user experience.
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Fully{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Bespoke
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Every website is built from scratch, which guarantees a unique
                design that reflects your brand’s identity and goals
              </p>
            </div>
            <div className="grid gap-2">
              <h4 className="uppercase text-lg tracking-wider">
                Future{" "}
                <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                  Proof
                </span>
              </h4>
              <p className="text-balance font-light md:max-w-[30ch]">
                Our websites are built using modern frameworks like React and
                Next.js, making them easy to expand as your business grows.
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
