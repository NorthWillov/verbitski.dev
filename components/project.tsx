import React, { FC } from "react";
import Link from "next/link";

type ProjectProps = {
  img: string;
  title: string;
  desc: string;
  demoLink: string;
  sourceLink: string;
};

const Project: FC<ProjectProps> = ({
  img,
  title,
  desc,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="bg-white w-72 flex flex-col justify-between rounded-2xl shadow-small hover:shadow-medium transition-shadow duration-200 mb-10">
      <Link href={demoLink}>
        <a target="_blank">
          <img className="rounded-t-2xl w-72" src={img} alt="project" />
        </a>
      </Link>
      <div>
        <h2 className="pt-2 text-center text-2xl">{title}</h2>
        <p className="text-center p-2">{desc}</p>

        <div className="flex justify-around p-5">
          <Link href={demoLink}>
            <a
              className="text-lg text-white bg-accent-3 py-2 rounded-lg w-3/6 text-center"
              target="_blank"
            >
              <i className="fas fa-play"></i> Demo
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
