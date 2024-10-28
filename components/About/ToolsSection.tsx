import React from "react";
import techCloudImg from "@/assets/images/tech_cloud.png";

const ToolsSection = () => {
  return (
    <section>
      <div className="grid gap-2 justify-center text-center h2-bg">
        <h2 className="h2">Our Toolbox</h2>
        <p className="sub-heading">- the nerdy stuff -</p>
        <p className="section-preface">
          I&apos;m constantly striving to improve and learn new technologies
          that enhance my work. While I regularly expand my skill set, my core
          expertise lies in the following technologies:
        </p>
      </div>

      {/* list of tools */}
      <div className="rm-container grid lg:grid-cols-2 items-center justify-center gap-y-12 py-32">
        <div className="flex flex-col mx-auto ">
          <img
            src={"/images/tech-cloud.png"}
            alt="various development software logos"
            className="h-36 md:h-80 xl:h-[400px] w-auto"
          />
        </div>
        <ul className="grid gap-4 gap-y-12 ">
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl xl:text-4xl font-light px-2 sm:px-0">
              <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                Web
              </span>{" "}
              Design
            </h3>
            <p className="font-light text-balance px-2 sm:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ab voluptates vel necessitatibus quo odio, repellat, quae
              accusantium, atque quod qui sapiente recusandae a incidunt placeat
              obcaecati? Necessitatibus, assumenda corporis.
            </p>
          </li>
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl xl:text-4xl font-light px-2 sm:px-0">
              <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                Web
              </span>{" "}
              Development
            </h3>
            <p className="font-light text-balance px-2 sm:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ab voluptates vel necessitatibus quo odio, repellat, quae
              accusantium, atque quod qui sapiente recusandae a incidunt placeat
              obcaecati? Necessitatibus, assumenda corporis.
            </p>
          </li>
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl xl:text-4xl font-light px-2 sm:px-0">
              <span className="font-bold text-rm-primary-700 dark:text-rm-primary-400">
                Logo
              </span>{" "}
              Design
            </h3>
            <p className="font-light text-balance px-2 sm:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ab voluptates vel necessitatibus quo odio, repellat, quae
              accusantium, atque quod qui sapiente recusandae a incidunt placeat
              obcaecati? Necessitatibus, assumenda corporis.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ToolsSection;
