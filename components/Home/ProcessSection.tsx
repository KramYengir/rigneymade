import React from "react";
import ProcessCard from "./ProcessCard";
const ProcessSection = () => {
  return (
    <section className="py-12 sm:py-16 mb-16">
      <div className="rm-container flex flex-wrap justify-evenly  gap-y-8 py-12">
        <ProcessCard
          icon="/images/consult-icon.png"
          title="Consult"
          description="We start with detailed discussions to understand your vision and goals"
          number="1"
        />
        <ProcessCard
          icon="/images/design-icon.png"
          title="Design"
          description="We create various concepts, fine-tuned via your feedback"
          number="2"
        />
        <ProcessCard
          icon="/images/develop-icon.png"
          title="Develop"
          description="Finally, we build the design into a functional, responsive, and user-friendly product"
          number="3"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
