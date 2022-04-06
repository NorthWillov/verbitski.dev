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
    <div className="w-72 flex flex-col justify-between rounded-2xl m-10 shadow-small hover:shadow-medium transition-shadow duration-200 dark:bg-gray-800">
      <Link href={demoLink}>
        <a target="_blank">
          <img className="rounded-t-2xl w-72" src={img} alt="project" />
        </a>
      </Link>
      <h2 className="pt-2 text-center text-2xl">{title}</h2>
      <p className="text-center p-2">{desc}</p>

      <div className="flex justify-around p-5">
        <Link href={demoLink}>
          <a
            className="border border-black rounded-md p-1 bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white"
            target="_blank"
          >
            <i className="fas fa-play"></i> Demo
          </a>
        </Link>
        <Link href={sourceLink}>
          <a
            className="border border-black rounded-md p-1 bg-white dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white"
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
