import React from "react";
import Link from "next/link";

const LatestProject = () => {
  return (
    <div>
      <h1 className="text-center text-5xl pt-20 pb-20">Latest Project</h1>
      <div className="md:flex md:justify-between text-xl mb-20">
        <div className="md:w-5/12 w-3/6 m-auto">
          <img src="/assets/projects/latest_project.png" alt="latest_project" />
        </div>
        <div className="md:w-6/12 w-10/12 md:text-left m-auto mt-8 md:mt-0">
          <h2 className="text-4xl py-5">Pizzeria 'Riccardo'</h2>
          <p className="pb-5">
            Full Stack Web Application for food delivery from 'Pizzeria &
            Restaurant - Riccardo' 👨🏻‍
          </p>
          <div>
            <h3>Technologies used:</h3>
            <ul className="pb-5 pl-5 list-disc">
              <li>React</li>
              <li>Typescript</li>
              <li>Bootstrap</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className="flex justify-between pb-5 mt-5 md:w-8/12">
            <Link href="https://riccardopizzeria.herokuapp.com">
              <a
                target="_blank"
                className="text-lg text-white bg-accent-3 p-3 rounded-lg w-3/6 mr-1 text-center"
              >
                <i className="fas fa-play"></i> Demo
              </a>
            </Link>
            <Link href="https://github.com/NorthWillov/food_service">
              <a
                target="_blank"
                className="text-lg text-white bg-accent-3 p-3 rounded-lg w-3/6 ml-1 text-center"
              >
                <i className="fab fa-github"></i> Source
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link scroll={false} href="/projects">
              <a className="text-lg text-white bg-accent-3 p-3 rounded-lg md:w-8/12 w-full text-center">
                Check all projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
