import React from "react";
import ServiceCard from "../Services/ServiceCard";

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
              <h2 className="uppercase text-3xl lg:text-4xl tracking-wider font-light">
                <span className="font-bold">Web</span> Development
              </h2>
            </div>
            <p>
              At RigneyMade, we specialize in helping small and new businesses
              take the next step by creating affordable bespoke websites
              designed to meet their unique needs. Whether you’re looking to
              establish your online presence or elevate an existing site, we
              craft fully custom websites that reflect your vision and goals. We
              avoid templates and builders, ensuring every project is original
              and tailored to you.
            </p>
            <p>
              Our focus is on building high-performing, responsive, and
              user-friendly websites that leave a strong impression on your
              audience. From planning and design to development and deployment,
              we’re here to make the process seamless, so you can focus on
              growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
            <ServiceCard
              headingA="Highly"
              headingB="Responsive"
              paragraph="Your website will look and perform flawlessly on any device,
                from desktops to tablets and smartphones."
            />
            <ServiceCard
              headingA="Peak"
              headingB="Performance"
              paragraph=" We prioritize speed and reliability, creating websites that load
                quickly and provide a smooth user experience."
            />
            <ServiceCard
              headingA="Completely"
              headingB="Bespoke"
              paragraph="Your website will be built from scratch, which guarantees a unique
                design that reflects your brand’s identity and goals."
            />
            <ServiceCard
              headingA="Fully"
              headingB="Accessible"
              paragraph="We work hard to
                ensure that your website is user-friendly and accessible to all users, including those with
                disabilities."
            />
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
              Your logo is often the first impression of your business, and it
              should be memorable. At Rigneymade, we design logos that reflect
              your brand’s identity, capturing its essence in a way that feels
              authentic and stands out from the crowd.
            </p>
            <p>
              We create designs that stick—simple, recognizable, and versatile
              for both digital and print. Whether you’re starting a new business
              or refreshing your brand, we’ll craft a logo that tells your story
              and leaves a lasting impression.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 gap-y-8 items-start">
            <ServiceCard
              headingA="Tailored"
              headingB="Concepts"
              paragraph="Every logo is unique and created specifically for your business, ensuring it truly reflects your brand’s personality and goals."
            />

            <ServiceCard
              headingA="Collaborative"
              headingB="Process"
              paragraph="Your feedback is integral to our design process. Together, we refine the logo until it aligns perfectly with your vision."
            />

            <ServiceCard
              headingA="Versatile"
              headingB="Formats"
              paragraph="Our logos maintain their clarity and detail, whether displayed on a small social media profile or a large storefront sign."
            />

            <ServiceCard
              headingA="Simple"
              headingB="Elegance"
              paragraph="We believe in clean, minimal designs that are easy to recognize and leave a lasting impression on your audience."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
