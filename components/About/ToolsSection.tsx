import React from "react";
import Image from "next/image";
import techCloudImg from "@/assets/images/tech_cloud.png";

const ToolsSection = () => {
  return (
    <section className="rm-container py-24">
      <div className="grid gap-2 justify-center text-center pt-24 pb-12">
        <h2 className="h2">Our Toolbox</h2>
        <p className="sub-heading">- the nerdy stuff -</p>
      </div>
      <p className="text-balance font-light leading-6 px-6 sm:px-0 text-center max-w-prose mx-auto">
        I&apos;m constantly striving to improve and learn new technologies that
        enhance my work. While I regularly expand my skill set, my core
        expertise lies in the following technologies:
      </p>

      {/* list of tools */}
      <div className="grid md:grid-cols-2 items-center justify-center gap-y-12 py-24">
        <div className="flex flex-col mx-auto ">
          <Image
            src={techCloudImg}
            alt="profile picture of Mark Rigney"
            className="h-56 md:h-80 xl:h-[400px] w-auto"
          />
        </div>
        <ul className="grid gap-4 gap-y-6">
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl font-light px-2 sm:px-0">
              <span className="font-bold">Web</span> Design
            </h3>
            <p className="font-light text-balance px-2 sm:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ab voluptates vel necessitatibus quo odio, repellat, quae
              accusantium, atque quod qui sapiente recusandae a incidunt placeat
              obcaecati? Necessitatibus, assumenda corporis.
            </p>
          </li>
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl font-light px-2 sm:px-0">
              <span className="font-bold">Web</span> Development
            </h3>
            <p className="font-light text-balance px-2 sm:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              ab voluptates vel necessitatibus quo odio, repellat, quae
              accusantium, atque quod qui sapiente recusandae a incidunt placeat
              obcaecati? Necessitatibus, assumenda corporis.
            </p>
          </li>
          <li className="grid gap-2">
            <h3 className="uppercase text-2xl font-light px-2 sm:px-0">
              <span className="font-bold">Logo</span> Design
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
