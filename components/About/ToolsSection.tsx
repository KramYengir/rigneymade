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
          expertise lies in the following technologies
        </p>
      </div>

      {/* list of tools */}
      <div className="rm-container grid lg:grid-cols-2 items-center justify-center gap-y-12 py-32">
        <div className="flex flex-col mx-auto ">
          <img
            src={"/images/tool_blob.png"}
            alt="various development software logos"
            className="h-48 md:h-80 xl:h-[400px] w-auto"
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
              Before any code is written, we start with a visual design phase
              following in-depth discussions about your website's core
              functionality. Using <strong>Figma</strong>, I create mockups for
              both desktop and mobile layouts, along with a visual style
              guide—covering colors, fonts, and overall aesthetics—to ensure a
              cohesive and consistent look across the entire design.
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
              I develop in a <strong>Ubuntu</strong> OS environment, using
              essential tools like <strong>VS Code</strong>,{" "}
              <strong>Git</strong>, and <strong>GitHub</strong>. After
              finalizing the design, I start coding with frameworks such as{" "}
              <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>Tailwind CSS</strong>. For efficient UI creation, I
              sometimes incorporate component libraries like{" "}
              <strong>shadcn/ui</strong> to ensure a responsive and visually
              engaging interface.
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
              When working on logo design, I start with quick mockups in{" "}
              <strong>Canva</strong> to explore different graphics, color
              schemes, and font combinations. I also use{" "}
              <strong>Procreate</strong> for hand-drawn rough concepts. Once I
              have a strong direction, I refine the design in{" "}
              <strong>GIMP (GNU Image Manipulation Program)</strong> to create a
              polished final logo. At this stage, I prepare multiple formats,
              including a vector version for print and a high-resolution version
              for digital use.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ToolsSection;
