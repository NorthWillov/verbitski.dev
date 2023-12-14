import React, { FC } from "react";
import Link from "next/link";

type ProjectProps = {
  img: string;
  title: string;
  desc: string;
  demoLink: string;
  sourceLink: string;
  technologies: string[];
};

const Project: FC<ProjectProps> = ({
  img,
  title,
  desc,
  demoLink,
  sourceLink,
  technologies = [],
}) => {
  return (
    <div className="w-full flex my-5 h-82 flex-col md:flex-row justify-center">
      <div className="md:w-1/2 w-full p-3 flex items-center">
        <Link href={demoLink}>
          <a target="_blank">
            <img className="h-auto w-full" src={img} alt="project" />
          </a>
        </Link>
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-between px-5">
        <div>
          <h2 className="pt-4 pb-3 text-left text-2xl">{title}</h2>
          <div className="flex flex-wrap">
            {technologies.map((t) => (
              <span className="bg-accent-3 text-white mr-1 p-1 rounded mb-2">
                {t}
              </span>
            ))}
          </div>

          <p className="text-left pb-5">{desc}</p>
        </div>

        <div className="flex justify-between pb-4">
          <Link href={demoLink}>
            <a
              className="text-lg text-white bg-accent-3 py-2 rounded-lg w-3/6 text-center"
              target="_blank"
            >
              <i className="fas fa-play"></i> Link
            </a>
          </Link>
          <Link href={sourceLink}>
            <a
              className="text-lg text-white bg-accent-3 py-2 rounded-lg w-3/6 ml-3 text-center"
              target="_blank"
            >
              <i className="fab fa-github"></i> Source
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
