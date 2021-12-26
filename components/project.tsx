import React, { FC } from "react"
import Link from "next/link"

type ProjectProps = {
  img: string
  title: string
  desc: string
  demoLink: string
  sourceLink: string
}

const Project: FC<ProjectProps> = ({
  img,
  title,
  desc,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="w-80 flex flex-col justify-between border border-black rounded-md m-10 shadow-small hover:shadow-medium transition-shadow duration-200">
      <Link href={demoLink}>
        <a target="_blank">
          <img className="rounded-md h-80" src={img} alt="project" />
        </a>
      </Link>
      <h2 className="pt-2 text-center text-2xl">{title}</h2>
      <p className="text-center p-2">{desc}</p>

      <div className="flex justify-around p-2">
        <Link href={demoLink}>
          <a
            className="border border-black rounded-md p-1 bg-white hover:bg-black hover:text-white"
            target="_blank"
          >
            <i className="fas fa-play"></i> Demo
          </a>
        </Link>
        <Link href={sourceLink}>
          <a
            className="border border-black rounded-md p-1 bg-white hover:bg-black hover:text-white"
            target="_blank"
          >
            <i className="fab fa-github"></i> Source
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Project
