import React from "react";
import consultIcon from "@/assets/images/consult-icon.png";
import designIcon from "@/assets/images/design-icon.png";
import developIcon from "@/assets/images/develop-icon.png";
import ProcessCard from "@/components/Home/ProcessCard";

const ProcessSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="rm-container flex flex-wrap justify-evenly  gap-y-8 py-12">
        <ProcessCard
          icon={consultIcon}
          title="Consult"
          description="We start with detailed discussions to understand your vision and goals"
          number="1"
        />
        <ProcessCard
          icon={designIcon}
          title="Design"
          description="We create various concepts, fine-tuned via your feedback"
          number="2"
        />
        <ProcessCard
          icon={developIcon}
          title="Develop"
          description="Finally, we build the design into a functional, responsive, and user-friendly product"
          number="3"
        />
      </div>
    </section>
  );
};

export default ProcessSection;
