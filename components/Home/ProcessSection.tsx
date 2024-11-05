import React from "react";
import ProcessCard from "./ProcessCard";
const ProcessSection = () => {
  return (
    <section className="py-12 sm:py-16 mb-16">
      <div className="rm-container flex flex-wrap justify-evenly  gap-y-8 py-12">
        <ProcessCard
          icon="/images/consult-icon.png"
          title="Consult"
          description="We begin with an in-depth consultation, listening carefully to your vision, goals, and unique needs to set a strong foundation."
          number="1"
        />
        <ProcessCard
          icon="/images/design-icon.png"
          title="Design"
          description="With your input, we craft initial concepts, refining them to align with your vision and deliver a design that truly resonates."
          number="2"
        />
        <ProcessCard
          icon="/images/develop-icon.png"
          title="Develop"
          description="We bring your vision to life, building a responsive website or refined logo that’s both impactful and versatile for your brand’s needs."
          number="3"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
