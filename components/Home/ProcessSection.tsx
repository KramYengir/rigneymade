import React from "react";
import ProcessCard from "./ProcessCard";
const ProcessSection = () => {
  return (
    <section className="py-12 mb-16">
      <div className="rm-container flex flex-wrap justify-evenly gap-y-8">
        <ProcessCard
          icon="/images/consult-icon.png"
          title="Consult"
          description="Our process begins with a detailed consultation, during which we carefully listen to your vision, goals, and individual needs to create a strong foundation."
          number="1"
        />
        <ProcessCard
          icon="/images/design-icon.png"
          title="Design"
          description="Using your feedback, we develop initial concepts and fine-tune them to reflect your vision, resulting in a design that truly connects."
          number="2"
        />
        <ProcessCard
          icon="/images/develop-icon.png"
          title="Develop"
          description="We turn your ideas into reality by creating a responsive website or a polished logo that is both striking and adaptable to meet your business needs."
          number="3"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
