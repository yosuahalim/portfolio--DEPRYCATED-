import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex w-[500px] flex-shrink-0 cursor-pointer
     snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity
      duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        alt=""
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.company}</p>
        <div className="my-2 flex space-x-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              src={urlFor(tech.image).url()}
              className="w10 h-10 rounded-full"
              alt=""
            />
          ))}
        </div>
        <p className="py-5 uppercase text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateStarted).toDateString()}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-lg scrollbar-thin max-h-96 overflow-y-scroll pr-5 scrollbar-track-black scrollbar-thumb-primary/80">
          {experience.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
