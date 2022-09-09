import React, { FC } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Project from "../components/project";

const Projects: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16">
        <Container>
          <h1 className="text-7xl md:text-8xl w-11/12 m-auto md:w-full md:m-0 pt-20">
            Projects
          </h1>

          <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

          <div className="flex flex-wrap sm:justify-between justify-center mt-20 pb-56">
            <Project
              img="/assets/projects/pizza-wege.jpeg"
              title="Pizzeria 'Riccardo' 🍕"
              desc="Full Stack Web Application for food delivery from 'Pizzeria & Restaurant - Riccardo' 👨🏻‍🍳"
              demoLink="https://riccardopizzeria.herokuapp.com"
              sourceLink="https://github.com/NorthWillov/food_service"
            />

            <Project
              img="/assets/projects/colors_app.png"
              title="Clone of Flat UI Colors"
              desc="A clone of websites like Flat UI Colors and Material UI Colors."
              demoLink="https://northwillov.github.io/colors-app"
              sourceLink="https://github.com/NorthWillov/colors-app"
            />

            <Project
              img="/assets/projects/star_wars.jpeg"
              title="Star Wars Characters Catalogue"
              desc="Catalogue, containing all data about 'Star Wars' foes."
              demoLink="https://northwillov.github.io/virtuslab"
              sourceLink="https://github.com/NorthWillov/virtuslab"
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Projects;
