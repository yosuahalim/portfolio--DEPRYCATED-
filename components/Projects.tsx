import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col
    items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex h-screen w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary ">
        {projects.map((project, i) => (
          <div
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
            key={project._id}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              onClick={() => window.open(project.linkToBuild, "_blank")}
              className="xl:max-w-[700px] xl:max-h-[700px] cursor-pointer"
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              src={urlFor(project.image).url()}
              alt=""
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#F7aB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <p className="mt-3">{project.title}</p>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech) => (
                  <div key={tech._id} className="relative">
                    <Image
                      src={urlFor(tech.image).url()}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
};

export default Projects;
