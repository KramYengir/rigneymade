import React from "react";
import ValuesCard from "./ValuesCard";
import { FaHandshake, FaEye, FaShieldAlt } from "react-icons/fa";

const ValuesSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h2-bg">
        <h2 className="h2">Our Promise</h2>
        <p className="sub-heading">- core values -</p>
        <p className="section-preface">
          Our goal is to have long term relationships with our clients based on
          respect and trust. To achieve this goal, we&apos;ve established core
          values at RigneyMade
        </p>
      </div>
      <div className="rm-container py-12 sm:py-36">
        <h3 className="uppercase text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-center py-12">
          Our Core Values
        </h3>
        <div className="flex flex-wrap justify-evenly gap-y-16 gap-x-4 py-12">
          <ValuesCard
            icon={FaShieldAlt}
            title={"Trust"}
            description={
              "We believe in building strong, trustworthy relationships through reliability and dedication to your success."
            }
          />
          <ValuesCard
            icon={FaHandshake}
            title={"Respect"}
            description={
              "We value every client’s vision and unique needs, treating each project with the utmost care and consideration."
            }
          />
          <ValuesCard
            icon={FaEye}
            title={"Transparency"}
            description={
              "We prioritize open communication and clear processes, ensuring you’re informed and involved every step of the way."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
